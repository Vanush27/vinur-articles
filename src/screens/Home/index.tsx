import React, {useEffect, useRef, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

import {getArticles} from '@api';
import Search from '@components/search';

import {ArticleItem} from '@ui-modules';
import {useDebounce} from '@hooks';
import useNetworkStatus from '@components/network/NetWorkStatus';
import NetInfoComp from '@components/network/NetInfoComp';

import {useStyles} from './styles';

const HomeScreen = ({navigation}) => {
  const {styles} = useStyles();

  const flatListRef = useRef<FlatList>(null);
  const [articles, setArticles] = useState([]);

  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const isConnected = useNetworkStatus();
  const debouncedQuery = useDebounce(query);

  const fetchArticles = async (searchQuery = '', newPage = 1) => {
    setLoading(true);
    try {
      const data = await getArticles(newPage, searchQuery);
      const newArticles = data?.response?.results || [];
      const arr: any = [...articles, ...newArticles];

      setArticles(arr);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleEndReached = () => {
    if (!loading) {
      fetchArticles(debouncedQuery, page + 1);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setPage(1);
    setArticles([]);
    fetchArticles(debouncedQuery);
  }, [debouncedQuery, isConnected]);

  const renderItem = ({item}) => {
    return (
      <ArticleItem
        article={item}
        onPress={() => navigation.navigate('ArticleScreen', {article: item})}
      />
    );
  };

  return (
    <View style={styles.container}>
      {isConnected ? (
        <>
          <Search
            search={query}
            onChangeText={searchValue => {
              setQuery(searchValue);
            }}
          />
          {loading && page === 1 ? (
            <Text>LOADING...</Text>
          ) : (
            <FlatList
              ref={flatListRef}
              data={articles}
              renderItem={renderItem}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              onEndReached={handleEndReached}
              onEndReachedThreshold={0.5}
            />
          )}
        </>
      ) : (
        <NetInfoComp isConnected={isConnected} />
      )}
    </View>
  );
};

export default HomeScreen;

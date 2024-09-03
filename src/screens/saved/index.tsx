import {View, Text, FlatList} from 'react-native';

import {useStyles} from './styles';

import {useAppSelector} from '@hooks';
import {ArticleItem} from '@ui-modules';

const SavedScreen = ({navigation}) => {
  const {styles} = useStyles();
  const savedArticles = useAppSelector(state => state.articles.saveArticles);

  const renderItem = ({item}) => (
    <ArticleItem
      article={item}
      onPress={() => navigation.navigate('ArticleScreen', {article: item})}
    />
  );

  return (
    <View style={styles.container}>
      <Text>Save Article</Text>
      <FlatList
        data={savedArticles}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SavedScreen;

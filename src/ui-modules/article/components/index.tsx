import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import BookmarkIcon from '@components/save/BookmarkIcon';
import {formatDate} from '@utils/formatDate';
import {useAppSelector} from '@hooks';

import {TArticle} from '../types/Article';
import {useStyles} from './styles';

type TArticleItemProps = {
  article: TArticle;
  onPress: () => void;
};
const ArticleItem = ({article, onPress}: TArticleItemProps) => {
  const {styles} = useStyles();

  const isBookmarked =
    useAppSelector(state =>
      state.articles.saveArticles?.some(
        savedArticle => savedArticle.id === article.id,
      ),
    ) || false;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress} style={styles.wrapperLeft}>
        <View>
          <Text style={styles.title}>{article?.webTitle}</Text>

          <Image
            source={{uri: article?.fields?.thumbnail}}
            style={styles.image}
          />

          <Text style={styles.titleDate}>
            {formatDate(article?.webPublicationDate)}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.wrapperRight}>
        <BookmarkIcon article={article} isBookmarked={isBookmarked} />
      </View>
    </View>
  );
};

export default ArticleItem;

import {View, Text, ScrollView, Image} from 'react-native';

import RenderHtml from 'react-native-render-html';
import {formatDate} from '@utils/formatDate';
import StarRating from '@components/star';

import {useStyles} from './styles';

const ArticleScreen = ({route}) => {
  const {article} = route.params;

  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>{article?.webTitle}</Text>
        <Image
          source={{uri: article?.fields?.thumbnail}}
          style={styles.image}
        />

        <Text>{article?.tags[0].webTitle}</Text>
        <Text>{formatDate(article?.webPublicationDate)}</Text>

        <RenderHtml source={{html: article?.tags[0].bio}} />
        <StarRating rating={article.fields.starRating} />
      </ScrollView>
    </View>
  );
};

export default ArticleScreen;

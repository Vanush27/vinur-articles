import {API_KEY} from '@env';
import {baseUrl} from '../baseUrl';

const getArticles = async (page, query) => {
  try {
    const {data} = await baseUrl.get(`search`, {
      params: {
        'api-key': API_KEY,
        q: query,
        page,
        format: 'json',
        tag: 'film/film,tone/reviews',
        'show-tags': 'contributor',
        'show-fields': 'starRating,headline,thumbnail,short-url',
        'show-refinements': 'all',
        'order-by': 'relevance',
      },
    });

    return data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

export default getArticles;

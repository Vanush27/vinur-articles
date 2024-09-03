import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

type TArticleState = {
  saveArticles: any[];
  isBookmark: boolean;
};

const initialState: TArticleState = {
  saveArticles: [],
  isBookmark: false,
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    toggleBookmark: (state, action) => {
      const {article} = action.payload;

      state.saveArticles = state.saveArticles || [];

      const existingIndex = state.saveArticles.findIndex(
        savedArticle => savedArticle.id === article.id,
      );

      if (existingIndex >= 0) {
        state.saveArticles.splice(existingIndex, 1);
        state.isBookmark = false;
      } else {
        state.saveArticles.push(article);
        state.isBookmark = true;
      }
    },
    setBookmarkItems: (state, action) => {
      state.isBookmark = action.payload;
    },
  },
});

export const {toggleBookmark, setBookmarkItems} = articlesSlice.actions;
export default articlesSlice.reducer;

import React from 'react';
import {TouchableOpacity} from 'react-native';

import {toggleBookmark} from '@redux/slices/articlesSlice';
import RenderIcon from '@components/icon/RenderIcon';
import Icons from '@assets/icons/Icons';
import {useAppDispatch} from '@hooks';

type TImportantProps = {
  article?: any;
  isBookmarked: boolean;
};
const BookmarkIcon = ({article, isBookmarked}: TImportantProps) => {
  const dispatch = useAppDispatch();

  const onPress = () => {
    dispatch(toggleBookmark({article}));
  };

  return (
    <TouchableOpacity onPress={onPress}>
      {isBookmarked ? (
        <RenderIcon icon={Icons.BOOKMARK_ACTIVE} width={30} height={30} />
      ) : (
        <RenderIcon icon={Icons.BOOKMARK} width={30} height={30} />
      )}
    </TouchableOpacity>
  );
};

export default BookmarkIcon;

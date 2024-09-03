import {View} from 'react-native';

import {Searchbar} from 'react-native-paper';
import {useStyles} from './styles';

type TSearchProps = {
  search: string;
  onChangeText: (value: string) => void;
};
const Search = ({search, onChangeText}: TSearchProps) => {
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeText}
        value={search}
      />
    </View>
  );
};

export default Search;

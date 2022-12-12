import { StyleSheet, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default List = (props) => {
  const nav = useNavigation();
  const { items } = props.route.params;

  const renderList = ({item}) => 
    <Text
      name={item.name}
      style={styles.item}
      onPress={() => nav.navigate(item.name)}
    >
      {item.name}
    </Text>;

  return (
    <FlatList
      data={items}
      renderItem={renderList}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

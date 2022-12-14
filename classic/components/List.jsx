import { StyleSheet, FlatList, Text } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

export default List = (props) => {
  const { items } = props.route.params;
  const nav = useNavigation();
  const { colors } = useTheme();

  const renderList = ({item}) => 
    <Text
      name={item.name}
      style={{...styles.item, color: colors.text}}
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

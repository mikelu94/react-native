import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Item from './Item';
import List from './List';
import { lists } from '../config';

const Stack = createStackNavigator();

export default ListNavigator = () => {
  const items = lists.reduce((items, list) => [...items, ...list.items], []);
  const listScreens = lists.map(list => 
    <Stack.Screen
      name={list.name}
      key={list.name}
      component={List}
      initialParams={{ items: list.items }}
    />
  );
  const itemScreens = items.map(item => 
    <Stack.Screen
      name={item.name}
      key={item.name}
      component={Item}
      initialParams={{ name: item.name, description: item.description }}
    />
  );

  return (
    <Stack.Navigator style={styles.container}>
      <Stack.Screen name="All Lists" component={List} initialParams={{ items: lists }}/>
      {listScreens}
      {itemScreens}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
});

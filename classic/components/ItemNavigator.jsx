import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Item from './Item';
import List from './List';
import { lists } from '../config';

const Stack = createStackNavigator();

export default ItemNavigator = () => {
  const items = lists.reduce((items, list) => [...items, ...list.items], []);
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
      <Stack.Screen name="All Items" component={List} initialParams={{ items }}/>
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


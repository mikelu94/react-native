import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './components/Home';
import ItemNavigator from './components/ItemNavigator';
import ListNavigator from './components/ListNavigator';

const Tab = createBottomTabNavigator();

export default App = () => {
  const scheme = useColorScheme();

  const useTabBarIcon = (iconName) => {
    return ({ color, size }) => <Ionicons name={iconName} color={color} size={size}/>;
  };

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarIcon: useTabBarIcon('home') }}
        />
        <Tab.Screen
          name="Lists"
          component={ListNavigator}
          options={{ tabBarIcon: useTabBarIcon('list') }}
        />
        <Tab.Screen
          name="Items"
          component={ItemNavigator}
          options={{ tabBarIcon: useTabBarIcon('bookmark') }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

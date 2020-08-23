import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Perfil from '../pages/Perfil';
import Message from '../pages/Message';
// import TeacherList from '../pages/TeacherList';
// import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function NavTabs() {
  return (
    
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="md-home" size={size} color={ focused ? '#207E73' : '#2A9D8F' } />
            )
          }
        }}
      />

      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="md-search" size={size} color={ focused ? '#207E73' : '#2A9D8F' } />
            )
          }
        }}
      />

      <Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="md-mail" size={size} color={ focused ? '#207E73' : '#2A9D8F' } />
            )
          }
        }}
      />

      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="md-person" size={size} color={ focused ? '#207E73' : '#2A9D8F' } />
            )
          }
        }}
      />


  
      

      {/* <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name="ios-heart" size={size} color={ focused ? '#8257e5' : color } />
            )
          }
        }}
      /> */}
    </Navigator>
  );
}

export default NavTabs;
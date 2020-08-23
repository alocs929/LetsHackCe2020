import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import CompanyRegistration from '../pages/CompanyRegistration';
import TradingRegistration from '../pages/TradingRegistration';
import ServiceProviderRegistration from '../pages/ServiceProviderRegistration';
import NavTabs from './NavTabs';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  return (
      <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
          
          <Screen name="Landing" component={Landing}/>
          <Screen name="CompanyRegistration" component={CompanyRegistration} />
          <Screen name="TradingRegistration" component={TradingRegistration} />
          <Screen name="ServiceProviderRegistration" component={ServiceProviderRegistration} />
          <Screen name="NavTabs" component={NavTabs} />

        </Navigator>
      </NavigationContainer>
  );
}

export default AppStack;
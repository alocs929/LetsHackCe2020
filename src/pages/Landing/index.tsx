import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import Button from '../../components/Button';

import logoImg from '../../../assets/img/Logo.png';

const Landing: React.FC = () => {

  return (

    <View style={styles.container}>

      <Image source={logoImg} style={styles.logo}/>
  
      <Text style={styles.title}>Deseja entrar como</Text>

      <Button title="Potencial Exportador" para="CompanyRegistration" />
      <Button title="Trading" para="TradingRegistration" />
      <Button title="Prestador de Serviço" para="ServiceProviderRegistration" />  

    </View>
  
  );
}

export default Landing;
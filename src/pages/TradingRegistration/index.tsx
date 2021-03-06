import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, TextInput, ScrollView } from 'react-native-gesture-handler';
import LogoCompanyIMG from '../../../assets/img/perfilEmpresa.png';
import styles from './styles';
import InputLabel from '../../components/InputLabel';
import Button from '../../components/Button';
import { Ionicons } from '@expo/vector-icons';
import HeaderDev from '../../components/HeaderDev';

const TradingRegistration: React.FC = () => {
  const { navigate } = useNavigation();


  return (
    <>
    

    <ScrollView
      style={styles.container}
      contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 50,
      }}
    >
      <RectButton style={styles.buttonTopLeft} onPress={()=>navigate('Landing')} >
        <Ionicons name="md-arrow-round-back" size={32} color='#2A9D8F'/>
      </RectButton>

      <Text style={styles.title}>Crie sua conta como{'\n'}trading</Text>
  
      <Image style={ styles.image} source={LogoCompanyIMG}/>

      <InputLabel title="Razão Social"/>
      <InputLabel title="CNPJ"/>
      <InputLabel title="Email"/>
      <InputLabel title="Telefone"/>
      <InputLabel title="NCM"/>

      <RectButton style={styles.button} onPress={()=>{navigate('NavTabs')}}>
        <Text style={styles.buttonText}>Avançar</Text>
      </RectButton>

    </ScrollView>
    
    </>
  
  );
}

export default TradingRegistration;
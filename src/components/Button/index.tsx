import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface ButtonProps {
  title: string;
  para: string;
}


const Button: React.FC<ButtonProps> = ({title, para}: ButtonProps) => {
  const { navigate } = useNavigation();


  function handleNavigateToCompanyRegistration (){
    navigate(`${para}`);
  }
  return (
      <RectButton 
        onPress={handleNavigateToCompanyRegistration}
        style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </RectButton>
  );
}

export default Button;
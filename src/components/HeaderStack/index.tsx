import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface HeaderStackProps {
  title: string;
  voltar: string;
  seguir: string;
}


const HeaderStack: React.FC<HeaderStackProps>= ({title, voltar, seguir}: HeaderStackProps) => {
  const { navigate } = useNavigation();


  function handleNavigateBack(){
    navigate(`${voltar}`);
  }
  function handleNavigatePrevious(){
    navigate(`${seguir}`);
  }

  return (
      <View>

        <RectButton>
          <Text></Text>
        </RectButton>

        <Text>{title}</Text>

        <RectButton>
          <Text></Text>
        </RectButton>

      </View>
  );
}

export default HeaderStack;
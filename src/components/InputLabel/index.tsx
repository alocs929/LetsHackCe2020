import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton, TextInput } from 'react-native-gesture-handler';

import styles from './styles';

interface InputLabelProps {
  title: string;
}

const InputLabel: React.FC<InputLabelProps> = ({title}: InputLabelProps) => {
  const { navigate } = useNavigation();

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={`${title}...`}
        placeholderTextColor="#003459"
      />
    </View>
    
  );
}

export default InputLabel;
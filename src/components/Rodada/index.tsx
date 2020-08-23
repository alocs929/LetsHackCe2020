import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import foto from '../../../assets/img/perfilEmpresa.png'; 
import styles from './styles';

interface RodadaProps {
  foto : string;
  tema: string;
  dia: string;
  horario: string;

}

const Rodada: React.FC<RodadaProps> = ({foto, tema, dia, horario}: RodadaProps) => {
  const { navigate } = useNavigation();

  return (
    
    <View style={styles.container}>
      <View style={styles.title}>
        {/* <Image style={ styles.image} source={foto}/> */}
        <Text style={styles.title}>Rodada de Negócios</Text>
      </View>

      <Text>{`Tema: ${tema}`}</Text>
      <Text>{`Dia: ${dia}`}</Text>
      <Text>{`Das: ${tema}`}</Text>
      
    </View>
  );
}

export default Rodada;
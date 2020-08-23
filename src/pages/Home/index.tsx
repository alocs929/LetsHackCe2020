import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { perfilEmpresa } from '../../../assets/img/perfilEmpresa.png';
import Rodada from '../../components/Rodada';
import styles from '../Landing/styles';
// import styles from './styles';


const Home: React.FC = () => {
    const { navigate } = useNavigation();
    
    return( 
      <ScrollView>
        <View style={styles.container}>
          <Rodada
            foto={perfilEmpresa}
            tema="Exportação de Castanha"
            dia="20/09"
            horario="19h às 22h"
          />
        </View>

        <View style={styles.container}>
          <Rodada
            foto={perfilEmpresa}
            tema="Exportação de Fermento"
            dia="19/09"
            horario="19h às 22h"
          />
        </View>

      </ScrollView>
    );
}

export default Home;
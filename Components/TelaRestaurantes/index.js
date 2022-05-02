import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import Img1 from '../../assets/restaurantes/restaurante01.png'
import Img2 from '../../assets/restaurantes/restaurante02.png'
import Img3 from '../../assets/restaurantes/restaurante03.png'
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';


export default function TelaRestaurante() {
  return (
  <ScrollView>
  
    <View style={styles.container}>
     
      <Text style={styles.titulo}>
        Bares e Restaurantes
      </Text>
      <Text style={styles.descricao}>
      O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional Confira alguns bares e restaurantes famosos.
      </Text>

        <View style={styles.card}>
          <Image source={Img1} style={styles.cardImg} />
          <Text style={styles.tituloCard}> ARMAZÉN MAR</Text>
          <Text> Localização: Rod Rio-Santos</Text>
        </View>

      

        <View style={styles.card}>
          <Image source={Img2} style={styles.cardImg} />
          <Text style={styles.tituloCard}> BENDITA'S RESTAURANTE</Text>
          <Text> Localização: Centro Histórico</Text>
        </View>

        <View style={styles.card} >
          <Image source={Img3} style={styles.cardImg} />
          <Text style={styles.tituloCard}> SEREIA DO MAR PIZZA-BAR</Text>
          <Text> Localização: Praia do Jabaquara</Text>
        </View>

        

        


        
        
    </View>
  </ScrollView>
    
  );
}
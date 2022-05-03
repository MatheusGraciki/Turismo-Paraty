import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import Img1 from '../../assets/restaurantes/restaurante01.png'
import Img2 from '../../assets/restaurantes/restaurante02.png'
import Img3 from '../../assets/restaurantes/restaurante03.png'


import { translate } from '../Translate/index';


export default function TelaRestaurante() {
  return (
  
  
    <View style={styles.container}>
     
      <Text style={styles.titulo}>
        {translate('titleRestaurante')}
      </Text>
      <Text style={styles.descricao}>
      {translate('descricaoRestaurante')}
      </Text>

        <View style={styles.card}>
          <Image source={Img1} style={styles.cardImg} />
          <Text style={styles.tituloCard}> {translate('tituloRestaurante1')}</Text>
          <Text> {translate('Localizacao1')}</Text>
        </View>

      

        <View style={styles.card}>
          <Image source={Img2} style={styles.cardImg} />
          <Text style={styles.tituloCard}> {translate('tituloRestaurante2')}</Text>
          <Text> {translate('Localizacao2')}</Text>
        </View>

        <View style={styles.card} >
          <Image source={Img3} style={styles.cardImg} />
          <Text style={styles.tituloCard}> {translate('tituloRestaurante3')}</Text>
          <Text> {translate('Localizacao3')}</Text>
        </View>

        

        


        
        
    </View>
  
    
  );
}
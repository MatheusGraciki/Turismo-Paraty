import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

import Img1 from '../../assets/hospedagens/hospedagem01.png'
import Img2 from '../../assets/hospedagens/hospedagem02.png'
import Img3 from '../../assets/hospedagens/hospedagem03.png'
import { translate } from '../Translate/index';




export default function TelaHospedagem() {
  return (
  
  
    <View style={styles.container}>
     
      <Text style={styles.titulo}>
      {translate('titleHospedagem')}
      </Text>
      <Text style={styles.descricao}>
      {translate('descricaoHospedagem')}
      </Text>

      <View style={styles.card}>
          <Image source={Img1} style={styles.cardImg} />
          <Text style={styles.tituloCard}> {translate('titlePousada1')}</Text>
          <Text> {translate('precoPousada1')}</Text>
          <Text> {translate('localizacao1')}</Text>
        </View>

      

        <View style={styles.card}>
          <Image source={Img2} style={styles.cardImg} />
          <Text style={styles.tituloCard}> {translate('titlePousada2')}</Text>
          <Text> {translate('precoPousada2')}</Text>
          <Text> {translate('localizacao2')}</Text>
        </View>

        <View style={styles.card} >
          <Image source={Img3} style={styles.cardImg} />
          <Text style={styles.tituloCard}> {translate('titlePousada3')} </Text>
          <Text> {translate('precoPousada3')}</Text>
          <Text> {translate('localizacao3')}</Text>
        </View>

        
        

        


        
        
    </View>

    
  );
}
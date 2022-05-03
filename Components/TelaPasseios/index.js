import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import Img1 from '../../assets/passeios/passeio01.png'
import Img2 from '../../assets/passeios/passeio02.png'
import Img3 from '../../assets/passeios/passeio03.png'
import { translate } from '../Translate/index';





export default function TelaPasseios() {
  return (
  
  
    <View style={styles.container}>
     
      <Text style={styles.titulo}>
        {translate('titlePasseios')}
      </Text>
      <Text style={styles.descricao}>
        {translate('descricaoPasseios')}
      </Text>

        <View style={styles.card}>
          <Text style={styles.tituloCard}> {translate('cardTitle1')} </Text>
          <Image source={Img1} style={styles.cardImg} />
          
        </View>

      

        <View style={styles.card}>
          <Text style={styles.tituloCard}> {translate('cardTitle2')}</Text>
          <Image source={Img2} style={styles.cardImg} />
         
        </View>

        <View style={styles.card} >
          <Text style={styles.tituloCard}>{translate('cardTitle3')}</Text>
          <Image source={Img3} style={styles.cardImg} />
         
        </View>

        

        


        
        
    </View>

    
  );
}
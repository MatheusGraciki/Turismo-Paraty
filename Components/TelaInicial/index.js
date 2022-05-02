import React from 'react'
import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import FotoParaty from  '../../assets/01.png'
import styles from './styles'


export default function TelaInicial(props){
    return(
       
        < View style={styles.container}>
            <Text style={styles.titulo}> Paraty </Text>
            <Text style={styles.subtitulo}> Saiba o que visitar em paraty. </Text>
            <Image style={styles.img} source={FotoParaty}/>

            <TouchableOpacity
                style={styles.botao} 
                activeOpacity={0.5} 
                onPress={() => props.navigation.navigate("Restaurantes")}
            > 
                
               
                
                <Text style={styles.buttonrestaurantestextstyle}> 
                    VER RESTAURANTES
                </Text> 
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botao} 
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate("Passeios")}
            > 
            
               
                
                <Text style={styles.buttonpasseiostextstyle}> 
                    VER PASSEIOS
                </Text> 
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botao} 
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate("Hospedagem")}
            > 
                
               
               
                <Text style={styles.buttonhospedagemtextstyle}> 
                    VER HOSPEDAGEM
                </Text> 
            </TouchableOpacity>
                  
            
        
            

        </View>
       
        
    )
}
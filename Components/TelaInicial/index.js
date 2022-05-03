import React, { useState, useEffect } from 'react'
import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import { BottomSheet, ListItem } from 'react-native-elements';
import { translate } from '../Translate/index.js'
import logo from '../../assets/Logo.png'
import FotoParaty from  '../../assets/01.png'
import styles from './styles'
import ChangeLanguage from '../Translate/index.js'
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function TelaInicial(props){
    

    const [isVisible, setIsVisible] = useState(false);
    const [language, setLanguage] = useState('');

    const list = [
        {
            title: 'portugues',
            onPress: () => setLanguage('br')
        },
        {
            title: 'ingles',
            onPress: () => setLanguage('en')
        },
        {
            title: 'fechar',
            containerStyle: { backgroundColor: '#0071bc' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];

    if (language!='') {

        ChangeLanguage(language)
    }

    async function checkLang() {
        const lang = await AsyncStorage.getItem('Translate');
    
        if(lang){
            ChangeLanguage(lang);
        }
    }
      
    useEffect(() => {
        checkLang();
    }, []);


    return(
        <>

                <TouchableOpacity
                    style={styles.botao} 
                    activeOpacity={0.5} 
                    onPress={() => setIsVisible(true)}

                >
                    <Image style={styles.imgbutton} source={logo}/>

                    
                
                </TouchableOpacity> 
                    
            <BottomSheet modalProps={{}} isVisible={isVisible} containerStyle={{ backgroundColor: 'blur' }}>
                {list.map((l, i) => (
                    <ListItem
                        key={i}
                        containerStyle={l.containerStyle}
                        onPress={l.onPress}
                    >
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>

            
                    
            
            < View style={styles.container}>
                <Text style={styles.titulo}> 
                    {translate('title')}</Text>
                <Text style={styles.subtitulo}>  
                    {translate('subtitle')} </Text>
                <Image style={styles.img} source={FotoParaty}/>
                
               

                <TouchableOpacity
                    style={styles.buttons} 
                    activeOpacity={0.5} 
                    onPress={() => props.navigation.navigate("Restaurantes")}
                > 
                    
                
                    
                    <Text style={styles.buttontext}> 
                        {translate('buttonr')}
                    </Text> 
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons} 
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate("Passeios")}
                > 
                
                
                    
                    <Text style={styles.buttontext}> 
                        {translate('buttonp')}
                    </Text> 
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttons} 
                    activeOpacity={0.5}
                    onPress={() => props.navigation.navigate("Hospedagem")}
                > 
                    
                
                
                    <Text style={styles.buttontext}>  
                        {translate('buttonh')}
                    </Text> 
                </TouchableOpacity>

               
                
            
                

            </View>
        
        </>
            
    )
}
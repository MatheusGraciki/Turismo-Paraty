import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',  
        backgroundColor: '#ffcda5',
        padding: 15,
        
        
   
    },
    
    titulo:{
        fontSize: 20,
        textAlign: "center",
        fontWeight: 'bold',
        marginBottom: 5,
    },

    descricao:{

        textAlign: "center",
        marginBottom: 15,
       
    },
    
    card: {
        backgroundColor: '#fff',
        width: 250,
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,

    },

    cardImg:{
        width:230,
        height:60,
        marginBottom:5,
    },

    tituloCard:{
        fontWeight: 'bold',
        }
    



});

export default styles
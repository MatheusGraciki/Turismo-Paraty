import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
       
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',  
        backgroundColor: '#bbd4ad',
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
        width: 255,
        marginBottom: 10,
        padding: 12,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,

    },

    cardImg:{
        width:230,
        height:60,
        
        
    },

    tituloCard:{
        fontWeight: 'bold',
        textAlign:'center',
        paddingBottom: 5
    }
    



});

export default styles
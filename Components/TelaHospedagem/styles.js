import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
       
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',  
        backgroundColor: '#a9bcdc',
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
        width: 287,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,

    },

    cardImg:{
        width:265,
        height:45,
        
        
    },

    tituloCard:{
        fontWeight: 'bold',
        marginTop:5,
        width:180,
        
        
        paddingBottom: 5
    }
    



});

export default styles
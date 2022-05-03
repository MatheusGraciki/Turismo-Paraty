import { StyleSheet } from 'react-native';
 const styles = StyleSheet.create({
    container:{
        
        borderWidth: 0.5,
        borderRadius:5,
        alignItems: 'center',
        marginTop:50,
        marginHorizontal:40,
        justifyContent: 'center',
        borderTopWidth: 0.8,
        

    
    },
    titulo: {
        marginTop:10,
        fontWeight:'bold',
        fontSize:23,
    },
    subtitulo:{
        marginTop:20,
        fontWeight: '600'

    },
    img:{
        marginTop: 20,
        width: 255,
        height:150,
        marginBottom:20,
        
      

    },

    
    

    buttons:{
        backgroundColor: "#382d00",
        width:255,
        height:35,
        borderRadius:15,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom:20
        

        
    
    },
    buttontext:{ 
        color:'white',
        fontWeight: '500',
        textAlign: 'center'

    },
    imgbutton:{
        height:50,
        width:50

    },
    

 }) 
 
 export default styles
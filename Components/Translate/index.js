
import i18n from 'i18n-js';
import en from './languages/en.json'
import br from './languages/br.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
// Set the key-value pairs for the different languages you want to support.
i18n.translations = {br,en};
// Set the locale once at the beginning of your app.

i18n.locale = 'en'

async function ChangeLanguage(lang) {

    if(lang==''){
        i18n.locale = 'en'

    }
    else{
        i18n.locale = lang

    }
    await AsyncStorage.setItem('Translate', lang);
    
}

export const translate = key => i18n.t(key)

export default ChangeLanguage;

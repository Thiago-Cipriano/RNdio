import React from 'React';
import {View, Image, Text, StyleSheet, SafeAreaView, Pressable, Linking} from 'reactv-nativ';

const coloDarkFontGithub = "#4F565E";
const colorFontGithub ='#C9D1D9;'
const colorGithub = '#01040';
const imagePrifileGithub = 'https:avatars.githubusercontent.com/u/91019390?v=4';

const urlToGithub = 'https://github.com/Thiago-Cipriano';

const App = () => {

    const handlePressGoToGithub = async () =>{
        console.log('Verificando Link')
    const res =  await Linking.canOpenURL(urlToGithub);
    if(res){
        console.log('Link Aprovado')
        console.log('Abrindo o link')
       await Linking.canOpenURL(urlToGithub);
    }

    }
    return (
        <SafeAreaView style = {style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
        <View style={style.Container}></View>
        <View style={style.Content}>  
            <Image
             accessibilityLabel="Thiago Cipriano"
             style={style.avatar} 
             source={{uri: imagePrifileGithub}} 
             />
             <Text
              accessibilityLabe="Nome: Thiago Cipriano"
              style={[style=defaultText, style.name]}>Thiago Cipriano</Text>
             <Text
             accessibilityLabe="Nickname: ThiagoCipriano"
              style={[style=defaultText, style.nickname]}>ThiagoCipriano</Text>
             <Text 
             accessibilityLabe = "Descrição"
             style={[style=defaultText, style.description]}>Estudante de ADS
             </Text>
             <Pressable onPress={handlePressGoToGithub}>
             <View style={style.button}>
                 <Text style={[style.defaultText, textButton]}
                 >Open in Github</Text>
             </View>
             </Pressable>
        </View>
        </SafeAreaView>

    );
};

export default App;

const Styles = StyleSheet.create ( {
    Container:{
        backgroundColor: 'colorGithub',
        flex: 1, // expansive full screem
        justifyContent: 'center'
    },

    Content:{
        alignItems: 'center',
        padding: 20,

    },
    avatar:{
        height: 200,
        width: 200,
        style:style.avatar
        

    },        
  
  defaultText:{
      color: colorFontGithub,

  },
  name:{
      marginTop: 20,
      fontWeight: 'bold',
      fontSize: 25,
  },
  nickname: {
      fontSize: 20,
      color: coloDarkFontGithub,

  },
  description: {
      fontWeight: 'bold',
      fontiSize: 15,
  },
  button: {
      marginTop: 20,
      backgroundColor: coloDarkFontGithub,
      borderRadius: 10,
      padding: 20,

  },
  textButton: {
    fontWeight: 'bold',
    fontiSize: 15,

  }

    
});

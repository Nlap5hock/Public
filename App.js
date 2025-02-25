import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import Colors from './constants/colors';

export default function App() {
  const [fontsLoaded] = useFonts({
    "protest": require("./assets/fonts/ProtestRiot-Regular.ttf"),
  
  })

  const [currentScreen, setCurrentScreen] = useState("Home");
  
  function menuScreenHandler(){
    setCurrentScreen("menu");
  }

  function homeScreenHandler(){
    setCurrentScreen("home");
  }

  let screen = < HomeScreen onNext={menuScreenHandler}/>;

  if(currentScreen === "menu"){
    screen = <MenuScreen onNext={homeScreenHandler}/>;
  }

  return (
    <>
    <StatusBar style='dark'/>
    <SafeAreaProvider style={styles.container}>{screen}   
    </SafeAreaProvider>
    </>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.color2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


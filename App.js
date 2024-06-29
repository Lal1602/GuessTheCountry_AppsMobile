import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./src/navigator/MainNavigator";

// Pertemuan 6 & 7
import HomeScreen from "./src/screens/meeting 6 & 7/HomeScreen";
import GuessTheCountryScreen from "./src/screens/meeting 6 & 7/GuessTheCountry";
import WinScreen from "./src/screens/meeting 6 & 7/WinScreen";

const App = () => {
  return(
    <SafeAreaProvider>
      <MainNavigator/>
    </SafeAreaProvider>
  )
}

export default App;
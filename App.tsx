import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import AppNavigator from "./src/components/navigation";

function App(): React.JSX.Element {
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 2000);
  // }, []);

  return <AppNavigator />;
}

export default App;

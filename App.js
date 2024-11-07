import { StatusBar as Status } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import Navigation from "./src/features/navigation/Navigation";
// import 'react-native-url-polyfill/auto';


export default function App() {
  try{
  return (
    <Provider store={store}>
      <Status style="light"/>
      <Navigation />
    </Provider>
  );
}
catch(err){
  console.log(err);
}
}

import { StatusBar as Status } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import Navigation from "./src/features/navigation/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Status style="light"/>
      <Navigation />
    </Provider>
  );
}

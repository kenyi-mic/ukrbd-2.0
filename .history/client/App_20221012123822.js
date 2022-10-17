import { TailwindProvider } from "tailwindcss-react-native";
import AppStack from "./Navigation/AppStack";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <AppStack />
      </TailwindProvider>
    </Provider>
  );
}

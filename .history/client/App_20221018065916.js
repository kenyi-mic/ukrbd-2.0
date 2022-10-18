import { TailwindProvider } from "tailwindcss-react-native";
import AppStack from "./Navigation/AppStack";
import { Provider } from "react-redux";
import { store } from "./store";
import "react-native-gesture-handler";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure(awsconfig);

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <AppStack />
      </TailwindProvider>
    </Provider>
  );
}

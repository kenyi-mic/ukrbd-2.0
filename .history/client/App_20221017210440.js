import { TailwindProvider } from "tailwindcss-react-native";
import AppStack from "./Navigation/AppStack";
import { Provider } from "react-redux";
import { store } from "./store";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
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

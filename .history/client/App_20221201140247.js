import { TailwindProvider } from "tailwindcss-react-native";
import AppStack from "./Navigation/AppStack";
import { Provider } from "react-redux";
import { store } from "./store";
import "react-native-gesture-handler";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure(awsconfig);

export default function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch("http://localhost:3000/", { mode: "cors" });
      const data = await response.json();
      console.log({ data });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    makeAPICall();
  }, []);
  return (
    <Provider store={store}>
      <TailwindProvider>
        <AppStack />
      </TailwindProvider>
    </Provider>
  );
}

import Feed from "./src/screens/Feed";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Feed />
    </SafeAreaView>
  );
}

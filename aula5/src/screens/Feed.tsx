import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import { View } from "react-native";

const Feed = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Card />
      <Footer />
    </View>
  );
};

export default Feed;

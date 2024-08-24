import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";

const Feed = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Card />
      <Footer />
    </SafeAreaView>
  );
};

export default Feed;

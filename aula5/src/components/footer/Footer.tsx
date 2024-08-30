import { Text, TouchableOpacity, Linking } from "react-native";
import { Container, Imagens } from "./styles";
import Feather from "@expo/vector-icons/Feather";

const openLinkedIn = () => {
  const linkedInURL = "https://www.linkedin.com/in/renanbernardos";
  Linking.openURL(linkedInURL);
};

const openGitHub = () => {
  const gitHubURL = "https://github.com/renanb12";
  Linking.openURL(gitHubURL);
};

const Footer = () => {
  return (
    <Container>
      <Imagens>
        <TouchableOpacity onPress={openGitHub}>
          <Feather name="github" size={80} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openLinkedIn}>
          <Feather name="linkedin" size={80} color="white" />
        </TouchableOpacity>
      </Imagens>
    </Container>
  );
};

export default Footer;

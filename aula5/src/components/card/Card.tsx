import { Image } from "react-native";
import { Container, Texto, Titulo, Textos, Imagem } from "./styles";

const Card = () => {
  return (
    <Container>
      <Imagem>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
            borderRadius: 50,
          }}
          source={require("../../../assets/image_6487327.png")}
        />
      </Imagem>
      <Textos>
        <Titulo>Sobre mim:</Titulo>
        <Texto>
          Meu nome é Renan Bernardo da Silva, tenho 17 anos e resido em Esteio.
          Atualmente, estou cursando o ensino médio pela manhã e trabalho como
          suporte em um mercado à tarde. À noite, frequento o curso técnico de
          Desenvolvimento de Sistemas no Senac-RS.
        </Texto>
      </Textos>
    </Container>
  );
};

export default Card;

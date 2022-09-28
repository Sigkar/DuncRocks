import styled from "styled-components";
import { PageContainer, Text } from "../components";
import Image from "next/image";
import Hero from "../images/Grays_Peak_cropped.jpg";

const ImageContainer = styled.div`
  max-height: 1200px;
  max-width: 1200px;
  min-width: 200px;
  min-height: 200px;
  width: 25vw;
  height: 25vw;
  img {
    border-radius: 100%;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const HeroText = styled(Text)`
  font-size: 72px;
`;

export default function Home() {
  return (
    <PageContainer>
      <HeroContainer>
        <HeroText type="largeBold" color="black">
          Hello world!
        </HeroText>
        {/* <ImageContainer>
        <Image src={Hero} />
      </ImageContainer> */}
      </HeroContainer>
    </PageContainer>
  );
}

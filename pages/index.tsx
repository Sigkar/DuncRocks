import styled from "styled-components";
import { Text } from "../components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <Text type="large" color="orange">
      My page
    </Text>
  );
}

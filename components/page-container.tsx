import styled from "styled-components";

import { Colors } from "../types";
// Unnecessary but whatever

export const PageContainer = styled.div<{ background?: Colors }>`
  padding: 0px 16px;
  background: ${({ background, theme }) => theme.colors[background || "white"]};
`;

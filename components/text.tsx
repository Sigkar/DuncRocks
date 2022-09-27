import styled from "styled-components";
import { Colors, FontTypography } from "../types";

// Not the best for SEO, but I don't really want to push my SEO to begin with.
export const Text = styled.p<{
  type: FontTypography;
  color: Colors;
}>`
  ${({ type, color, theme }) => ({
    ...theme.typography[type || "body"],
    color: theme.colors[color || "black"],
  })}
`;

import Link from "next/link";

import styled, { css } from "styled-components";

import { CtaProps } from "./index";

export const CtaButton = styled(Link)<CtaProps>`
  position: relative;
  background: ${(props) => (props.background ? props.background : "")};
  color: ${(props) => (props.color ? props.color : "")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 5px 5px 18px;
  border-radius: 999px;
  font-weight: bold;
  font-size: 16px;
  gap: 12px;
  width: fit-content;

  svg {
    margin: 4px 3px 0 0;
  }
`;

import Link from "next/link";

import styled, { css } from "styled-components";

import { CtaProps } from "./index";

export const CtaButton = styled(Link)<CtaProps>`
  position: relative;
  background: ${(props) => (props.background ? props.background : "")};
  color: ${(props) => (props.color ? props.color : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
  width: 100%;
  border-radius: 999px;
  font-weight: bold;
  font-size: 18px;

  @media (min-width: 768px) {
    width: fit-content;
  }

  /* &:hover {
   
      opacity: 1;
    }
  } */
`;

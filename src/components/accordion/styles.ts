import styled, { css } from "styled-components";

import { AccordionProps } from "./index";

export const AccordionWrapper = styled.div<AccordionProps>`
  width: 100%;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
  border-bottom: 1px solid var(--light-grey);
  margin-bottom: var(--global-gap);
  padding-bottom: var(--global-gap);

  line-height: 140%;

  :last-of-type {
    border: none;
  }
`;

export const AccordionContainer = styled.div<AccordionProps>``;

export const AccordionTitleWrapper = styled.div<AccordionProps>`
  position: relative;
  color: var(--black);
  cursor: pointer;

  h4 {
    margin-right: 60px;
  }
`;

export const AccordionTrigger = styled.div<AccordionProps>`
  position: absolute;
  right: 0;
  font-size: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--snow);
  overflow: hidden;

  border-bottom: 2px solid var(--light-grey);

  &.expanded {
    border-bottom: 2px solid var(--orange);
  }
`;

export const AccordionContent = styled.div<AccordionProps>`
  padding: var(--global-padding);
  border-left: 4px solid var(--orange);
  margin-top: var(--global-gap);
`;

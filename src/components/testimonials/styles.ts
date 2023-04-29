import Link from "next/link";

import styled, { css } from "styled-components";

import { Props } from "./testimonial-item";

export const Container = styled.div`
  line-height: 150%;
  background: white;
  margin: 60px;
  position: relative;
  padding: 50px;
  border-radius: 20px;

  hr {
    border: 0;
    border-bottom: 1px dashed #ccc;
    background: #999;
    margin-bottom: 10px;
    margin-top: -10px;
  }
`;
export const Avatar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  border-radius: 50%;
  margin-left: -50px;
  margin-top: -50px;
  width: 100px;
  height: 100px;
  box-shadow: var(--global-shadow);
`;
export const Quotes = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: -20px;
  margin-top: -40px;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;
export const Name = styled.div`
  font-weight: bold;
`;

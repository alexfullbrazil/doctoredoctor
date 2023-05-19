import { Container, Avatar, Quotes, Content, Name } from "./styles";
import Image from "next/image";

import { Svg } from "afb-react-svg";

export interface Props {
  name?: string;
  content?: string;
  avatar?: string;
}

export default function TestimonialsItem({ name, avatar, content }: Props) {
  return (
    <Container>
      <Avatar>
        <Image src={avatar} width={100} height={100} alt={name} />
      </Avatar>
      <Quotes>
        <Svg src="/assets/images/depoiments/quotes.svg" />
      </Quotes>
      <Content>{content}</Content>
      <hr />
      <Name>{name}</Name>
    </Container>
  );
}

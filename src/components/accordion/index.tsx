import { useState } from "react";
import {
  AccordionWrapper,
  AccordionContainer,
  AccordionTitleWrapper,
  AccordionTrigger,
  AccordionContent,
} from "./styles";

export interface AccordionProps {
  title?: string;
  content?: string;
}

export function Accordion({ content, title }: AccordionProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AccordionWrapper>
      <AccordionTitleWrapper onClick={() => setOpen(!open)}>
        <AccordionTrigger
          className={open ? "expanded" : " "}
          onClick={() => setOpen(!open)}
        >
          {!open ? "+" : "-"}
        </AccordionTrigger>
        <h4>{title}</h4>
      </AccordionTitleWrapper>
      {open && <AccordionContent>{content}</AccordionContent>}
    </AccordionWrapper>
  );
}

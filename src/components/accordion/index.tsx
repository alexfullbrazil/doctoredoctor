import { ReactNode, useState } from "react";
import {
  AccordionWrapper,
  AccordionTitleWrapper,
  AccordionTitle,
  AccordionTrigger,
  AccordionContent,
} from "./styles";

export interface AccordionProps {
  title?: string;
  content?: string;
  children?: ReactNode;
}

export function Accordion({ content, title, children }: AccordionProps) {
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
        <AccordionTitle>{title}</AccordionTitle>
      </AccordionTitleWrapper>
      {open && <AccordionContent>{content}</AccordionContent>}
      {children}
    </AccordionWrapper>
  );
}

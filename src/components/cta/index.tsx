import { CtaButton } from "./styles";

export interface CtaProps {
  buttonText?: string;
  color: string;
  background: string;
}

export function Cta({ buttonText, color, background }: CtaProps) {
  return (
    <CtaButton
      href="https://api.whatsapp.com/send?phone=5511985851071&text=Ol%C3%A1%20Doctor%26Doctor.%20Gostaria%20de%20entrar%20em%20contato%20sobre%20d%C3%BAvidas%2C%20sugest%C3%B5es%20ou%20agendamentos"
      target="_blanc"
      background={background}
      color={color}
    >
      {buttonText}
    </CtaButton>
  );
}

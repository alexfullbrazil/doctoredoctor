import Image from "next/image";
import { useState } from "react";

interface CasesItemProps {
  imageBefore?: string;
  imageAfter?: string;
  excerpt?: string;
  content?: string;
}

export function CasesItem({
  imageBefore,
  imageAfter,
  excerpt,
  content,
}: CasesItemProps) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div className="cases-content-item">
        <div className="cases-before-after-grid">
          <Image
            src={imageBefore}
            width={380}
            height={380}
            priority
            alt="Lentes de Contado de porcelanda"
          />
          <Image
            src={imageAfter}
            width={380}
            height={380}
            priority
            alt="Lentes de Contado de porcelanda"
          />
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
        />

        <div
          className={`cases-content-item-more ${show ? "show" : ""}`}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />

        <button onClick={() => setShow(!show)}>
          {show ? "<- Voltar" : "Saiba mais ->"}
        </button>
      </div>
    </>
  );
}

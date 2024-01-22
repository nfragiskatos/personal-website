import { PropsWithChildren } from "react";
import { Line, Publisher } from "./Patent.styles";

interface PatentProps {
  publisher: string;
}

const Patent = ({ publisher, children }: PropsWithChildren<PatentProps>) => {
  return (
    <Line>
      {children}
      <Publisher>{publisher}</Publisher>
    </Line>
  );
};

export default Patent;

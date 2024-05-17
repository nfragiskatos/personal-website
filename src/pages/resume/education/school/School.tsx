import {
  DegreeAndMajor,
  EdWrapper,
  GraduationDate,
  Institution,
  Line,
} from "./School.styles";

interface SchoolProps {
  degree: string;
  major: string;
  institution: string;
  graduationDate: string;
}

const School = ({
  degree,
  major,
  institution,
  graduationDate,
}: SchoolProps) => {
  return (
    <Line>
      <EdWrapper>
        <DegreeAndMajor>{`${degree} - ${major},`}</DegreeAndMajor>
        <Institution>{institution}</Institution>
      </EdWrapper>
      <GraduationDate>{graduationDate}</GraduationDate>
    </Line>
  );
};

export default School;

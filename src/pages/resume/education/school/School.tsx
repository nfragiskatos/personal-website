import {
  DegreeAndMajor,
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
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <DegreeAndMajor>{`${degree} - ${major},`}</DegreeAndMajor>
        <Institution>{institution}</Institution>
      </div>
      <GraduationDate>{graduationDate}</GraduationDate>
    </Line>
  );
};

export default School;

import { Content, Line, Link, Title, Wrapper } from "./Project.styles";

import { PropsWithChildren } from "react";
import ProjectLink from "./ProjectLink";

interface ProjectProps {
  project: string;
  link: string;
  icon: JSX.Element;
}

const Project = ({
  project,
  link,
  icon,
  children,
}: PropsWithChildren<ProjectProps>) => {
  return (
    <Wrapper>
      <Content>
        <Line>
          <Title>{project}</Title>
          <ProjectLink>
            <Link href={link} target="_blank">
              {icon}
            </Link>
          </ProjectLink>
        </Line>
        {children}
      </Content>
    </Wrapper>
  );
};

export default Project;

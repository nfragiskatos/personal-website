import { useTheme } from "styled-components";
import {
  Chip,
  Content,
  InfoCell,
  TitleCell,
  Wrapper,
} from "./SkillsAndKnowledge.styles";

import { Title } from "../Resume.styles";

const SkillsAndKnowledge = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Title>skills and knowledge</Title>
      <Content>
        <TitleCell>Languages:</TitleCell>
        <InfoCell>
          <Chip>JavaScript</Chip>
          <Chip>JSX</Chip>
          <Chip>TypeScript</Chip>
          <Chip>Java</Chip>
          <Chip>Kotlin</Chip>
          <Chip>HTML</Chip>
          <Chip>CSS</Chip>
        </InfoCell>
        <TitleCell>Frameworks and Libraries:</TitleCell>
        <InfoCell>
          <Chip
            backgroundColor={theme.colors.secondary}
            color={theme.colors.onSecondary}
          >
            React (w/ Hooks)
          </Chip>
          <Chip
            backgroundColor={theme.colors.secondary}
            color={theme.colors.onSecondary}
          >
            Spring
          </Chip>
          <Chip
            backgroundColor={theme.colors.secondary}
            color={theme.colors.onSecondary}
          >
            GWT
          </Chip>
          <Chip
            backgroundColor={theme.colors.secondary}
            color={theme.colors.onSecondary}
          >
            Android
          </Chip>
          <Chip
            backgroundColor={theme.colors.secondary}
            color={theme.colors.onSecondary}
          >
            Compose
          </Chip>
        </InfoCell>
        <TitleCell>Other Experience:</TitleCell>
        <InfoCell>
          <Chip>C#</Chip>
          <Chip>C</Chip>
          <Chip>C++</Chip>
          <Chip>Win32</Chip>
          <Chip>MFC</Chip>
          <Chip>Perl</Chip>
          <Chip>JCL</Chip>
          <Chip>PL/X</Chip>
          <Chip>REXX</Chip>
          <Chip>Assembler for z/Architecture</Chip>
        </InfoCell>
        <TitleCell>Tooling:</TitleCell>
        <InfoCell>
          <Chip
            backgroundColor={theme.colors.secondary}
            color={theme.colors.onSecondary}
          >
            Git
          </Chip>
          <Chip
            backgroundColor={theme.colors.secondary}
            color={theme.colors.onSecondary}
          >
            Keycloak
          </Chip>
          <Chip
            backgroundColor={theme.colors.secondary}
            color={theme.colors.onSecondary}
          >
            Oracle Database
          </Chip>
          <Chip
            backgroundColor={theme.colors.secondary}
            color={theme.colors.onSecondary}
          >
            Jira
          </Chip>
          <Chip
            backgroundColor={theme.colors.secondary}
            color={theme.colors.onSecondary}
          >
            Jenkins
          </Chip>
          <Chip
            backgroundColor={theme.colors.secondary}
            color={theme.colors.onSecondary}
          >
            Confluence
          </Chip>
          <Chip
            backgroundColor={theme.colors.secondary}
            color={theme.colors.onSecondary}
          >
            Agile
          </Chip>
          <Chip
            backgroundColor={theme.colors.secondary}
            color={theme.colors.onSecondary}
          >
            Scrum
          </Chip>
        </InfoCell>
      </Content>
    </Wrapper>
  );
};

export default SkillsAndKnowledge;

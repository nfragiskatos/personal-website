import BottleBuddy from "./project/BottleBuddy";
import ComfySloth from "./project/ComfySloth";
import FragMessenger from "./project/FragMessenger";
import GitHubDashboard from "./project/GitHubDashboard";
import { Content, GitHubLink, HeroDetails, HeroSection, HeroTitle, Main } from "./Projects.styles";

const Projects = () => {
  return <Main>
    <HeroSection>
      <HeroTitle>Tinkering</HeroTitle>
      <HeroDetails>
        Over the years I have built many small side projects just for fun and as a good way to learn about new technologies. Here’s a selection of some of the more interesting ones.
        <br />
        <br />
        For more, please check out my <GitHubLink
          href="https://github.com/nfragiskatos"
          target="_blank"
        >GitHub</GitHubLink>.
      </HeroDetails>
    </HeroSection>
    <Content>
      <BottleBuddy />
      <ComfySloth />
      <FragMessenger />
      <GitHubDashboard />
    </Content>

  </Main>;
};

export default Projects;

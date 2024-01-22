import Project from "../Project";
import { ProjectDetails } from "../Project.styles";
import { GitHubIcon } from "./AnkiAndroid.styles";

const AnkiAndroid = () => {
  return (
    <Project
      project="anki-android"
      link="https://github.com/ankidroid/Anki-Android"
      icon={<GitHubIcon />}
    >
      <ProjectDetails>
        <li>
          I contribute to the Anki-Android open source project on GitHub.
          Anki-Android is a semi-official port of the open source Anki spaced
          repetition flashcard system.
        </li>
      </ProjectDetails>
    </Project>
  );
};

export default AnkiAndroid;

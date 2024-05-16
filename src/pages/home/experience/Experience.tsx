import { routes } from "../../../utils/routes";
import { Chip, ChipContainer, ChipTitle, ExperienceChips, ExperienceDetails, ExperienceSection, ResumePageLink } from "./Experience.styles";

const Experience = () => {
    return (
        <ExperienceSection>
            <ChipContainer>
                <ChipTitle>Experience with...</ChipTitle>
                <ExperienceChips>
                    <Chip>JavaScript</Chip>
                    <Chip>JSX</Chip>
                    <Chip>TypeScript</Chip>
                    <Chip>Java</Chip>
                    <Chip>Kotlin</Chip>
                    <Chip>HTML</Chip>
                    <Chip>CSS</Chip>
                    <Chip>Ruby</Chip>
                    <Chip>React (w/ Hooks) </Chip>
                    <Chip> Next.js </Chip>
                    <Chip>Ruby on Rails</Chip>
                    <Chip>TailwindCSS</Chip>
                    <Chip>Android</Chip>
                    <Chip>Spring</Chip>
                    <Chip>Docker</Chip>
                    <Chip>Git</Chip>
                </ExperienceChips>
            </ChipContainer>
            <ExperienceDetails>
                Nowadays, I mainly focus on doing full stack web development. I have
                done a lot of work using React w/ hooks and have experience in the
                Next.js framework to leverage server-side rendering with React Server
                Components. For back-end work, I’ve spent a lot of time in Java with
                Spring, and some time in Ruby on Rails.
                <br />
                <br />
                For a more expansive view of my experience. Check out my resume <ResumePageLink
                    to={routes.resume.path}
                >
                    here
                </ResumePageLink>.
            </ExperienceDetails>
        </ExperienceSection>
    )
}

export default Experience
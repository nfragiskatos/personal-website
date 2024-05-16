import { Description, DetailsContainer, GithubIcon, Main, ProjectImage, Title } from "./Project.styles";

const GitHubDashboard = () => {
    return (
        <Main>
            <ProjectImage width="45%" height="45%" altWidth="76%" src="https://user-images.githubusercontent.com/38383279/124360479-ec61ff00-dbde-11eb-8f69-b509ee0f9b55.PNG" alt="galler view for storefront" />
            <DetailsContainer>
                <Title>GitHub Dashboard
                    <a
                        href="https://github.com/nfragiskatos/React-GitHub_Users"
                        target="_blank"
                        rel="noreferrer">
                        <GithubIcon />
                    </a>

                </Title>
                <Description>
                    A dashboard for GitHub where you can search users to see various statistics about their activity on GitHub.
                    <br />
                    <br />
                    Another early project when learning React. Built this as a part of a course I was taking.
                    <br />
                    <br />
                    Features:
                    <ul>
                        <li>Create an account and login</li>
                        <li>User Search</li>
                        <li>Analytics</li>
                        <li>Charts and Graphs</li>
                    </ul>

                </Description>
            </DetailsContainer>

        </Main>
    )
}

export default GitHubDashboard
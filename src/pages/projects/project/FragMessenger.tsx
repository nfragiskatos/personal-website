import { Description, DetailsContainer, GithubIcon, Main, ProjectImage, Title } from "./Project.styles";

const FragMessenger = () => {
    return (
        <Main>
            <DetailsContainer>
                <Title>FragMessenger
                    <a
                        href="https://github.com/nfragiskatos/FragMessenger"
                        target="_blank"
                        rel="noreferrer">
                        <GithubIcon />
                    </a>

                </Title>
                <Description>
                    A chat application that uses Firebase as the backend. Send and receive messages.
                    <br />
                    <br />
                    Features:
                    <ul>
                        <li>Create Accounts</li>
                        <li>Send messages</li>
                        <li>Chat History</li>
                    </ul>

                </Description>
            </DetailsContainer>
            <ProjectImage src="https://raw.githubusercontent.com/nfragiskatos/FragMessenger/master/screenshots/latest_messages.png" style={{ marginRight: "1rem" }} alt="home screen in dark mode" />
            <ProjectImage src="https://raw.githubusercontent.com/nfragiskatos/FragMessenger/master/screenshots/chat_log_hermione.png" alt="edit screen in dark mode" />
        </Main>
    )
}

export default FragMessenger
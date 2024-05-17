import { Description, DetailsContainer, GithubIcon, Main, ProjectImage, Title } from "./Project.styles";

const BottleBuddy = () => {
    return (
        <Main>
            <DetailsContainer>
                <Title>Bottle Buddy
                    <a
                        href="https://github.com/nfragiskatos/BottleBuddy"
                        target="_blank"
                        rel="noreferrer">
                        <GithubIcon />
                    </a>


                </Title>
                <Description>
                    A feeding tracker Android app for bottle-fed babies.
                    <br />
                    Set a daily feeding goal and track your baby's bottle feedings throughout the day.
                    <br />
                    <br />
                    Features:
                    <ul>
                        <li>Input and view in milliliters or ounces</li>
                        <li>View graph of daily progress</li>
                        <li>Send text messages with individual or daily feeding summaries</li>
                        <li>Light and Dark mode</li>
                    </ul>

                </Description>
            </DetailsContainer>
            <ProjectImage margin src="https://github.com/nfragiskatos/BottleBuddy/blob/main/list_screen_dark_mode.png?raw=true" alt="home screen in dark mode" />
            <ProjectImage src="https://github.com/nfragiskatos/BottleBuddy/blob/main/edit_screen_light_mode.png?raw=true" alt="edit screen in dark mode" />
        </Main>
    )
}

export default BottleBuddy
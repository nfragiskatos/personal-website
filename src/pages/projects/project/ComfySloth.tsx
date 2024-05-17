import { Description, DetailsContainer, GithubIcon, Main, ProjectImage, Title } from "./Project.styles";

const ComfySloth = () => {
    return (
        <Main>
            <DetailsContainer>
                <Title>Comfy Sloth
                    <a
                        href="https://github.com/nfragiskatos/React-Comfy_Sloth"
                        target="_blank"
                        rel="noreferrer">
                        <GithubIcon />
                    </a>

                </Title>
                <ProjectImage width="40%" height="40%" altWidth="76%" src="https://user-images.githubusercontent.com/38383279/124523243-28e25600-ddab-11eb-926b-761878b8c0a4.png" alt="galler view for storefront" />
                <Description>
                    A storefront for a furniture store
                    <br />
                    <br />
                    One of my earliest projects when learning React. Built this as a part of a course I was taking.
                    <br />
                    <br />
                    Features:
                    <ul>
                        <li>Auth0</li>
                        <li>Shopping Cart</li>
                        <li>Gallery with filtering</li>
                        <li>Product Search</li>
                    </ul>

                </Description>
            </DetailsContainer>

        </Main>
    )
}

export default ComfySloth
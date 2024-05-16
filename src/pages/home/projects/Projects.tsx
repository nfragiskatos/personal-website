import { routes } from "../../../utils/routes";
import { ProjectImage } from "../../projects/project/Project.styles";
import { ProjectDetails, ProjectPageLink, ProjectSection } from "./Projects.styles";

const Projects = () => {

  return (
    <ProjectSection>
      <ProjectDetails>
        The best way for me to learn is to build. Over the years I
        have built many small side projects just for fun and as a good way to learn about new technologies.
        <br />
        <br />
        Checkout my projects page <ProjectPageLink
          to={routes.projects.path}
        >
          here
        </ProjectPageLink>.
      </ProjectDetails>
      <ProjectImage width="40%" height="40%" altWidth="76%" src="https://user-images.githubusercontent.com/38383279/124523243-28e25600-ddab-11eb-926b-761878b8c0a4.png" alt="galler view for storefront" />
    </ProjectSection>
  )
}

export default Projects
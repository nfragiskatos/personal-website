import { JobDetails } from "../Experience.styles";
import Job from "../job/Job";

const GoldblattSystems = () => {
  return (
    <Job
      title="full stack developer"
      startDate="june 2018"
      endDate="september 2023"
      company="goldblatt systems"
      location="tucson, AZ"
    >
      <JobDetails>
        <li>
          Created a Patient Portal product, a complement to the main Physician
          Portal Electronic Medical Record (EMR) product, using React with
          Typescript. The Patient Portal allows the patients to:
          <ul>
            <li>
              View lab orders and results, manage allergies and medications,
              message their provider, view or cancel upcoming appointments, fill
              out questionnaires, and view care plans.
            </li>
          </ul>
        </li>
        <li>
          Built and maintained a React UI component library, for consistent
          component design in all React products.
          <ul>
            <li>
              Created and published release packages to private NPM registry.
            </li>
            <li>
              Leveraged Storybook to provide an interactive directory to view,
              develop, and test components in isolation.
            </li>
            <li>Automated UI testing using Jest and React Testing Library.</li>
          </ul>
        </li>
        <li>
          Produced and maintained an authentication library for all the React
          products that manages all the necessary authentication, authorization,
          token exchanges and refreshes with the Keycloak server.
        </li>
        <li>
          Developed a Physician Portal EMR system with the back end written in
          Java with Spring and Hibernate, and the front end written in Java
          leveraging GWT.
          <ul>
            <li>
              Created new features and internal tooling, and implemented
              performance improvements, unit and integration tests, and bug
              fixes.
            </li>
          </ul>
        </li>
      </JobDetails>
    </Job>
  );
};

export default GoldblattSystems;

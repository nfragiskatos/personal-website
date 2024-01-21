import { JobDetails } from "../ProfessionalExperience.styles";
import Job from "../job/Job";

const IBM = () => {
  return (
    <Job
      title="software engineer"
      startDate="january 2016"
      endDate="june 2017"
      company="international business machines (IBM)"
      location="tucson, AZ"
    >
      <JobDetails>
        <li>
          Developed and maintained disaster recovery software for Enterprise
          Storage Systems (ESS) on z/OS.
        </li>
        <li>
          As a member of Function Verification Test team, I designed, developed,
          and automated test cases.
        </li>
        <li>
          Acted as hardware support backup for lab’s storage systems to help
          maintain existing ESSs. Included recovering systems if down, replacing
          broken hardware, updating microcode, applying sandbox code, and
          setting up new ESS boxes.
        </li>
        <li>
          Provided service team assistance to fix and test defects, and certify
          and package fixes by other team members before being deployed to
          customers.
        </li>
        <li>
          Served as agile transformation lead for our product’s development
          team.
        </li>
      </JobDetails>
    </Job>
  );
};

export default IBM;

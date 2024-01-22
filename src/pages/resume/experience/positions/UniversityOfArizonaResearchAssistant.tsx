import { JobDetails } from "../Experience.styles";
import Job from "../job/Job";

const UniversityOfArizonaResearchAssistant = () => {
  return (
    <Job
      title="research assistant"
      startDate="fall 2013"
      endDate="summer 2015"
      company="university of arizona"
      location="tucson, AZ"
    >
      <JobDetails>
        <li>
          Researched the feasibility of extracting side-channel information from
          encrypted MAC frames using only frame timing measurements.
        </li>
      </JobDetails>
    </Job>
  );
};

export default UniversityOfArizonaResearchAssistant;

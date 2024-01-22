import { JobDetails } from "../Experience.styles";
import Job from "../job/Job";

const UniversityOfArizonaTeachingAssistant = () => {
  return (
    <Job
      title="teaching assistant"
      startDate="Fall 2015"
      company="university of arizona"
      location="tucson, AZ"
    >
      <JobDetails>
        <li>
          Class: Computer Programming for Engineering Applications (Language: C)
        </li>
      </JobDetails>
    </Job>
  );
};

export default UniversityOfArizonaTeachingAssistant;

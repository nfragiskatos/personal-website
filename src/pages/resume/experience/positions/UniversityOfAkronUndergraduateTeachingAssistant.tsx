import { JobDetails } from "../Experience.styles";
import Job from "../job/Job";

const UniversityOfAkronUndergraduateTeachingAssistant = () => {
  return (
    <Job
      title="undergraduate teaching assistant"
      startDate="spring 2013"
      company="university of akron"
      location="akron, OH"
    >
      <JobDetails>
        <li>Class: Introduction to Communication Systems</li>
      </JobDetails>
    </Job>
  );
};

export default UniversityOfAkronUndergraduateTeachingAssistant;

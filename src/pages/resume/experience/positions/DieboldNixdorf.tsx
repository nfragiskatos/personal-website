import { JobDetails } from "../Experience.styles";
import Job from "../job/Job";

const DieboldNixdorf = () => {
  return (
    <Job
      title="software engineer (co-op)"
      startDate="spring 2011"
      endDate="summer 2012"
      company="Diebold Nixdorf"
      location="green, OH"
    >
      <JobDetails>
        <li>
          Created new software automated solutions to unforeseen problems when
          creating release candidate operating systems for ATM customers.
          <ul>
            <li>
              Developed primarily in C/VC++ in combination with MFC and Win32
              APIs, and occasionally Perl and VBScript.
            </li>
            <li>
              Programmed a Windows Installation Wizard utility in VC++/MFC for
              deployment on Diebold ATMs.
            </li>
            <li>
              Created a utility to convert bitmaps into AVI files using
              VC++/MFC.
            </li>
            <li>
              Devised a custom software solution to handle programmatically
              controlling desktop displays in a multi-monitor ATM setup.
            </li>
          </ul>
        </li>
        <li>Administered smoke and regression testing on new releases.</li>
        <li>
          Performed various ATM unit hardware maintenance, such as RAM upgrades
          and BIOS flashes.
        </li>
      </JobDetails>
    </Job>
  );
};

export default DieboldNixdorf;

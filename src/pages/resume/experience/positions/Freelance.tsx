import { JobDetails } from "../Experience.styles"
import Job from "../job/Job"

const Freelance = () => {
    return (
        <Job
            title="freelance full stack engineer - tech lead"
            startDate="january 2024"
            endDate="april 2024"
            company="contract position - startup"
            location="remote"
        >
            <JobDetails>
                <li>
                    Developed an investment tool for financial advisors to assist clients in managing their retirement accounts.
                    <ul>
                        <li>Built the front end application using Next.js, React, TypeScript, and TailwindCSS that was supported by a back end
                            API developed with Ruby on Rails.</li>
                        <li>Wrote automated tests with RSpec, and utilized Rswag to auto-generate OpenApi documentation from request specs.</li>
                        <li>Drove engineering decisions with regards to what technologies to leverage, system design, coding standards, and best
                            practices across domains.</li>
                        <li>Reviewed pull requests.</li>
                        <li>Wrote and maintained design documentation.</li>
                    </ul>
                </li>
            </JobDetails>

        </Job>
    )
}

export default Freelance
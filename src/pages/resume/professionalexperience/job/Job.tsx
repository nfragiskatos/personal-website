import {
  Company,
  Content,
  Date,
  Line,
  Location,
  Title,
  Wrapper,
} from "./Job.styles";

import { PropsWithChildren } from "react";

interface JobProps {
  title: string;
  startDate: string;
  endDate: string;
  company: string;
  location: string;
}

const Job = ({
  title,
  startDate,
  endDate,
  company,
  location,
  children,
}: PropsWithChildren<JobProps>) => {
  return (
    <Wrapper>
      <Content>
        <Line>
          <Title>{title}</Title>
          <Date>{`${startDate} - ${endDate}`}</Date>
        </Line>
        <Line>
          <Company>{company}</Company>
          <Location>{location}</Location>
        </Line>
        {children}
      </Content>
    </Wrapper>
  );
};

export default Job;

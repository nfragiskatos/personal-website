import { Link } from "react-router-dom";
import styled from "styled-components";

export const ExperienceSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10rem;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.surfaceVariant};
    color: ${({ theme }) => theme.colors.onPrimaryContainer};
    padding: 6rem 2rem 6rem 2rem;

    @media ${({ theme }) => theme.device.lg} {
        flex-direction: column;
        gap: 2rem;
      }
`;

export const ExperienceDetails = styled.div`
  font-size: 2.2rem;
  padding: 2.5rem;
  text-align: start;
  width: 100%;
  line-height: 1.6;
  max-width: 60rem;
  border-radius: 50px 15px;
  background: ${({ theme }) => theme.colors.primaryContainer};

  @media ${({ theme }) => theme.device.lg} {
        align-self: center;
      }
`;

export const ResumePageLink = styled(Link)`
text-decoration: none;
color: ${({ theme }) => theme.colors.tertiary};
`;

export const ExperienceChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  max-width: 60rem;
`;

export const Chip = styled.div`
  padding: 0.7rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  font-size: 2.5rem;
  background: ${({ theme }) =>
     theme.colors.secondary};
  color: ${({ theme, color }) => color || theme.colors.onPrimary};
  border-radius: 5px;
  font-weight: 600;
`;

export const ChipTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: capitalize;
  text-transform: uppercase;
  margin: 2rem;
  width: 100%;
`;

export const ChipContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-self: start;
`;
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.surfaceVariant};
`;

export const Content = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem 5rem;
`;

export const InfoCell = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

export const TitleCell = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bolder;
  justify-content: start;
  align-items: center;
  color: ${({ theme }) => theme.colors.onSurface};
`;

interface ChipProps {
  color?: string;
  backgroundColor?: string;
}

export const Chip = styled.div<ChipProps>`
  padding: 0.7rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  font-size: 1.3rem;
  background: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.colors.secondary};
  color: ${({ theme, color }) => color || theme.colors.onPrimary};
  border-radius: 5px;
  font-weight: 600;
`;

import { StyledSections } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <StyledSections>
      <h2>{title}</h2>
      {children}
    </StyledSections>
  );
};

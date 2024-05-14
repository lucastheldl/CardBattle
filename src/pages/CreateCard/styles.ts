import styled from "styled-components";

export const RaritySection = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding-bottom: 2rem;

  width: 30%;
`;
export const RarityBtnContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  input {
    margin: auto 0;
    height: 1rem;
    width: 1rem;
    accent-color: ${(props) => props.theme["red-500"]};
  }
`;
export const RarityTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

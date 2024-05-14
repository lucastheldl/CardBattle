import styled from "styled-components";

export const CreateCardWrapper = styled.main`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  h3 {
    color: ${(props) => props.theme["red-500"]};
    padding-bottom: 2rem;
  }
`;
export const MovesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  .moveSlot {
    display: flex;
    flex-direction: column;
    width: 200px;
    color: ${(props) => props.theme["red-500"]};
    padding: 1rem;
    border: 1px solid ${(props) => props.theme["red-500"]};
    border-radius: 10px;
  }
`;
export const RaritySection = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding-bottom: 2rem;
  padding: 1rem;
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

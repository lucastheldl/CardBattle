import styled from "styled-components";

export const CardContainer = styled.button`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme["gray-900"]};
  border: 1px solid ${(props) => props.theme["gray-500"]};

  border-radius: 6px;
  padding: 0.5rem;

  cursor: pointer;

  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }
`;
export const CardImageArea = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;

  img {
    width: 150px;
    object-fit: cover;
  }
`;
export const CardInfoArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  padding: 0.5rem;

  box-sizing: border-box;

  strong {
    color: ${(props) => props.theme["red-500"]};
    line-break: auto;
    text-align: center;
  }
`;

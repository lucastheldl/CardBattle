import styled from "styled-components";

interface StatusProps {
  rarity: "COMMON" | "RARE" | "LEGENDARY";
}

export const CardContainer = styled.button<StatusProps>`
  display: flex;
  flex-direction: column;

  align-items: center;
  max-width: 180px;

  height: 270px;

  background-color: ${(props) => props.theme["gray-900"]};
  border: ${(props) => {
    switch (props.rarity) {
      case "COMMON":
        return `2px solid ${props.theme["red-500"]}`;
      case "RARE":
        return `2px inset ${props.theme["gold-500"]}`;
      case "LEGENDARY":
        return `2px solid ${props.theme["red-500"]}`;
    }
  }};
  ${(props) =>
    props.rarity === "LEGENDARY" &&
    `
    animation: rgbAnimation 5s ease-in-out infinite;
  `}

  border-radius: 6px;
  padding: 0.5rem;

  cursor: pointer;

  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }

  @keyframes rgbAnimation {
    0% {
      border-color: red;
    }
    33% {
      border-color: green;
    }
    66% {
      border-color: blue;
    }
    100% {
      border-color: red;
    }
  }
`;
export const CardImageArea = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;

  img {
    width: 100%;
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
export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${(props) => props.theme["gray-100"]};
  }
`;
export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: auto;

  p {
    color: ${(props) => props.theme["red-500"]};
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

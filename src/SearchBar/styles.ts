import styled from "styled-components";

export const Search = styled.div`
  input {
    height: 16px;
    padding: 8px 8px 8px 20px;
    font-size: 16px;
    border: 1px solid #878787;
    border-radius: 8px;
    background-color: #c9c7c7;
    width: 98%;
  }

  svg {
    position: absolute;
    display: flex;
    margin-left: 4px;
    margin-top: 9px;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

import styled from "styled-components";

export const Todo = styled.div`
  width: 100%;
  background-color: #878787;
  border-radius: 8px;
  cursor: default;

  &:focus {
    background-color: #60a6bf;
  }

  &:hover {
    background-color: #60a6bf;
  }

  .container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    padding: 16px;
    width: 100%;
    align-items: flex-start;

    .buttons {
      display: flex;
      gap: 8px;
      justify-content: center;
      width: inherit;
    }

    .confirm-button,
    .cancel-button {
      color: #fff !important;
      text-transform: uppercase;
      text-decoration: none;
      background: #2f667a;
      padding: 10px;
      border-radius: 50px;
      display: inline-block;
      border: none;
      transition: all 0.4s ease 0s;
      cursor: pointer;
      width: 180px;
    }

    .cancel-button {
      padding: 10px;
    }
  }

  .form {
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    label {
      margin-right: 52px;
    }
  }

  .title,
  .description {
    input {
      height: 16px;
      padding: 8px;
      font-size: 16px;
      border: 1px solid #878787;
      border-radius: 8px;
      background-color: #c9c7c7;
    }
  }

  .icons {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: inherit;
    align-items: flex-end;
    justify-content: center;
    margin-right: 8px;

    svg {
      cursor: pointer;
    }
  }
`;

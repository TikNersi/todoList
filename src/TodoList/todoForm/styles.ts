import styled from "styled-components";

export const TodoForm = styled.div`
  width: 100%;
  background-color: #878787;
  border-radius: 8px;

  .container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;
    gap: 8px;
    padding: 8px;
    align-items: center;

    .buttons {
      display: flex;
      gap: 8px;
    }

    .confirm-button,
    .cancel-button {
      color: #fff !important;
      text-transform: uppercase;
      text-decoration: none;
      background: #60a3bc;
      padding: 10px;
      border-radius: 50px;
      display: inline-block;
      border: none;
      transition: all 0.4s ease 0s;
      cursor: pointer;
      width: 180px;
    }

    .cancel-button {
      background: red;
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
    svg {
      cursor: pointer;
    }
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: inherit;
    align-items: flex-end;
    justify-content: center;
    margin-right: 8px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  gap: 8px;
  margin-top: 8px;

  .uncomplete-todos,
  .pending,
  .complete {
    background-color: #b5b5b5;
    flex: 1;
    border-radius: 8px;
    padding: 16px;
    gap: 8px;
  }

  .uncomplete-todos,
  .pending,
  .complete {
    gap: 4px;
    list-style: none;
    margin-block-start: auto;
    padding-inline-start: 0px;
    padding: 16px;
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  .container {
    width: 100%;
    height: 100%;
    gap: 8px;
    display: flex;

    .uncomplete-todos {
      padding: 16px;
    }
  }

  .pending {
  }

  .complete {
  }
`;

export const Button = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: center;

  button {
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
`;

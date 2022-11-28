import styled from "styled-components";

export default function Chute(props) {
  const { attempt, setAttempt, setAttemptButton, gameStart, finished } = props;
  return (
    <ContainerAnswer>
      <h1>Já sei a palavra!</h1>
      <input
        disabled={finished || gameStart ? true : false}
        value={attempt}
        onChange={(e) => setAttempt(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setAttemptButton(true)
          }
      }}
        data-test="guess-input"
      ></input>
      <button
        disabled={finished || gameStart ? true : false}
        onClick={() => setAttemptButton(true)}
        data-test="guess-button"
      >
        Chutar
      </button>
    </ContainerAnswer>
  );
}

const ContainerAnswer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;

  h1{
      font-size: 20px;
      font-weight: 400;
  }
  
  input{
    width: 353px;
    height: 40px;
    margin: 1%;
    border: 1px solid #cccccc;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
  }

  button{
    width: 100px;
    height: 40px;
    background-color: #e1ecf4;
    border: 1px solid #7aa7c7;
    color: #7aa7c7;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 700;
  }

`

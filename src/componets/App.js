import { useState } from "react";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import styled from "styled-components";

function App() {
  const [gameWord, setGameWord] = useState("");
  const [gameStart, setGameStart] = useState(true);
  const [underlines, setUnderlines] = useState("");
  const [letter, setLetter] = useState("");
  const [underState, setUnderState] = useState(false);
  const [image, setImage] = useState("../assets/images/forca0.png");
  const [errors, setErrors] = useState(0);
  const [attempt, setAttempt] = useState("");
  const [attemptButton, setAttemptButton] = useState(false);
  const [classWord, setClassWord] = useState("");
  const [clicked, setClicked] = useState("");
  const [finished, setFinished] = useState(false);
  return (
    <>
      <Jogo
        gameWord={gameWord}
        setGameWord={setGameWord}
        underlines={underlines}
        setUnderlines={setUnderlines}
        letter={letter}
        underState={underState}
        setUnderState={setUnderState}
        image={image}
        setImage={setImage}
        errors={errors}
        setErrors={setErrors}
        attempt={attempt}
        setAttempt={setAttempt}
        attemptButton={attemptButton}
        setAttemptButton={setAttemptButton}
        classWord={classWord}
        setClassWord={setClassWord}
        gameStart={gameStart}
        setGameStart={setGameStart}
        finished={finished}
        setFinished={setFinished}
        setClicked={setClicked}
      />
      <ContainerUser>
        <Letras
          setLetter={setLetter}
          setUnderState={setUnderState}
          gameStart={gameStart}
          clicked={clicked}
          setClicked={setClicked}
          finished={finished}
        />
        <Chute
          attempt={attempt}
          setAttempt={setAttempt}
          setAttemptButton={setAttemptButton}
          gameStart={gameStart}
          finished={finished}
        />
      </ContainerUser>
    </>
  );
}

export default App;

const ContainerUser = styled.div`
  width: 100%;
  max-height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

import { useState } from "react";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";

function App() {
  const [gameWord, setGameWord] = useState("");
  const [underlines, setUnderlines] = useState("");
  const [letter, setLetter] = useState("");
  const [underState, setUnderState] = useState(false);
  const [image, setImage] = useState("../assets/images/forca0.png")
  const [errors, setErrors] = useState(0)
  const [attempt, setAttempt] = useState("")
  const [attemptButton, setAttemptButton] = useState(false)
  const [classWord, setClassWord] = useState("");
  
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
      />
      <div className="containerUser">
        <Letras setLetter={setLetter} setUnderState={setUnderState}/>
        <Chute setAttempt={setAttempt} setAttemptButton={setAttemptButton} />
      </div>
    </>
  );
}

export default App;

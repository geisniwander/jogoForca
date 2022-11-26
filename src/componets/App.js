import { useState } from "react";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";

function App() {
const [gameWord, setGameWord] = useState("_ _ _ _ _ _ _ _ _ _")
const [underlines, setUnderlines] = useState("_ _ _ _ _ _ _")


  return (
    <>
      <Jogo gameWord={gameWord} setGameWord={setGameWord} underlines={underlines} setUnderlines={setUnderlines}/>
      <div className="containerUser">
        <Letras />
        <Chute />
      </div>
    </>
  );
}

export default App;

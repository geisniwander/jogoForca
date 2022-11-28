import palavras from "../palavras";
import styled from "styled-components";

export default function Jogo(props) {
  const {
    gameWord,
    setGameWord,
    underlines,
    setUnderlines,
    letter,
    underState,
    setUnderState,
    image,
    setImage,
    errors,
    setErrors,
    attempt,
    setAttempt,
    attemptButton,
    setAttemptButton,
    classWord,
    setClassWord,
    setGameStart,
    setFinished,
    setClicked,
  } = props;
  let str = [];
  let word = "";
  if (underState === true) {
    modifyUnderline();
  }
  if (attemptButton) {
    testAttempt();
  }
  function comparador() {
    const factor = 0.5;
    return Math.random() - factor;
  }
  function startGame() {
    setImage(`../assets/images/forca0.png`);
    setUnderlines("");
    setGameWord("");
    setClassWord("");
    setGameStart(false);
    setFinished(false);
    setAttemptButton(false);
    setClicked("");
    setUnderState(false);
    setErrors(0);
    setAttempt("");
    raffleWord();
  }
  function raffleWord() {
    word = [...palavras].sort(comparador)[1];
    setGameWord(word);
    insertUnderline();
  }

  function insertUnderline() {
    for (let i = 0; i < word.length; i++) {
      str.push("_ ");
    }
    setUnderlines(str);
  }

  function modifyUnderline() {
    let err = 0;
    let hit = 0;
    const max = 6;
    const mword = gameWord;
    const uword = underlines;
    const fword = [];
    for (let i = 0; i < mword.length; i++) {
      if (mword[i] === letter) {
        fword.push(letter);
        hit++;
      } else {
        if (uword[i] === " ") {
          fword.push(" ");
        } else if (uword[i] === "_") {
          fword.push("_");
        } else {
          fword.push(uword[i]);
        }
      }
    }
    if (fword.join("") === gameWord) {
      endGame("victory");
    }
    if (hit === 0) {
      err = errors + 1;
      if (err >= max) {
        endGame("defeat");
        return;
      } else {
        setErrors(err);
        setImage(`../assets/images/forca${err}.png`);
      }
    }
    setUnderlines(fword);
    setUnderState(false);
  }

  function testAttempt() {
    if (attempt === gameWord) {
      endGame("victory");
    } else {
      endGame("defeat");
    }
  }

  function endGame(identifier) {
    setUnderlines(gameWord);
    setFinished(true);
    if (identifier === "victory") {
      setClassWord("victory");
      setGameStart(true);
    } else {
      setImage(`../assets/images/forca6.png`);
      setClassWord("defeat");
      setGameStart(true);
    }
  }

  return (
    <ContainerGame>
      <GameResult>
        <ContainerLeft>
          <img alt="faseImage" src={image} data-test="game-image" />
        </ContainerLeft>
        <ContainerRigth>
          <button onClick={startGame} data-test="choose-word">
            Escolher palavra
          </button>
          <h1
            className={`word ${classWord}`}
            data-test="word"
            data-answer={gameWord}
          >
            {underlines}
          </h1>
        </ContainerRigth>
      </GameResult>
    </ContainerGame>
  );
}

const ContainerGame = styled.div`
  width: 100%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
  margin-bottom: 2%;
`;
const GameResult = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
`;
const ContainerLeft = styled.div`
  height: 100%;
  width: 50%;

  img {
    height: 100%;
  }
`;

const ContainerRigth = styled.div`
  width: 50%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.5%;
  font-size: 50px;
  font-weight: 700;

  button {
    margin-top: 30px;
    width: 200px;
    height: 60px;
    border-radius: 10px;
    background-color: #27ae60;
    border: none;
    color: white;
    font-weight: 700;
    font-size: 20px;
  }

  button:disabled {
    background-color: #798a9f;
  }

  h1 {
    font-size: 50px;
    font-weight: 500;
    line-height: 68px;
  }

  .victory {
    color: #27ae60;
  }

  .defeat {
    color: red;
  }
`;

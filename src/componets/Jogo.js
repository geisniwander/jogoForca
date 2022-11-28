import palavras from "../palavras";

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
    gameStart,
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
    return Math.random() - 0.5;
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
    word = palavras.sort(comparador)[1];
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
    <div className="containerGame">
      <div className="gameResult">
        <div className="containerLeft">
          <img alt="faseImage" src={image} data-test="game-image" />
        </div>
        <div className="containerRigth">
          <button
            className="buttonStart"
            disabled={!gameStart}
            onClick={startGame}
            data-test="choose-word"
          >
            Escolher palavra
          </button>
          <div className={`word ${classWord}`}>
            <h1 className="wordw" data-test="word" data-answer={gameWord}>
              {underlines}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

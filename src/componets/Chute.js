export default function Chute(props) {
  const { attempt, setAttempt, setAttemptButton, gameStart, finished } = props;
  return (
    <div className="containerAnswer">
      <h1 className="textAnswer">Já sei a palavra!</h1>
      <input
        className="inputAsnwer"
        disabled={finished || gameStart ? true : false}
        value={attempt}
        onChange={(e) => setAttempt(e.target.value)}
        data-test="guess-input"
      ></input>
      <button
        className="buttonAnswer"
        disabled={finished || gameStart ? true : false}
        onClick={() => setAttemptButton(true)}
        data-test="guess-button"
      >
        Chutar
      </button>
    </div>
  );
}

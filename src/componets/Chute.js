export default function Chute(props) {
  return (
    <div className="containerAnswer">
      <h1 className="textAnswer">Já sei a resposta!</h1>
      <input className="inputAsnwer" disabled={(props.finished||props.gameStart) ? true : false} value={props.attempt} onChange={e => props.setAttempt(e.target.value)} data-test="guess-input"></input>
      <button className="buttonAnswer" disabled={(props.finished||props.gameStart) ? true : false} onClick={()=>props.setAttemptButton(true)} data-test="guess-button">Chutar</button>
    </div>
  );
}

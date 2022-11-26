export default function Chute(props) {
  return (
    <div className="containerAnswer">
      <h1 className="textAnswer">Já sei a resposta!</h1>
      <input className="inputAsnwer" value={props.attempt} onChange={e => props.setAttempt(e.target.value)}></input>
      <button className="buttonAnswer" onClick={()=>props.setAttemptButton(true)}>Chutar</button>
    </div>
  );
}

export default function Letras(props){
    const alfabeto1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]
    const alfabeto2 = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return(
        <div className="containerLetters">
            <div className="topLetters">
            {alfabeto1.map((l)=> <button key={l} className="buttonLetter" onClick={()=> {props.setLetter(l); props.setUnderState(true)}}>{l}</button>)}
            </div>
        <div className="bottonLetters">
            {alfabeto2.map((l)=> <button key={l} className="buttonLetter" onClick={()=> {props.setLetter(l); props.setUnderState(true)}}>{l}</button>)}
        </div>
        </div>
    )
}
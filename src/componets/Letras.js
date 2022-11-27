export default function Letras(props){
    const alfabeto1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]
    const alfabeto2 = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return(
        <div className="containerLetters">
            <div className="topLetters">
            {alfabeto1.map((l)=> <button key={l} className="buttonLetter" disabled={(props.finished||props.gameStart||props.clicked.includes(l)) ? true : false} onClick={()=> {props.setClicked(props.clicked+l); props.setLetter(l); props.setUnderState(true);}} data-test="letter">{l}</button>)}
            </div>
        <div className="bottonLetters">
            {alfabeto2.map((l)=> <button key={l} className="buttonLetter" disabled={(props.finished||props.gameStart||props.clicked.includes(l)) ? true : false} onClick={()=> {props.setClicked(props.clicked+l);props.setLetter(l); props.setUnderState(true)}} data-test="letter">{l}</button>)}
        </div>
        </div>
    )
}
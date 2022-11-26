import palavras from "../palavras"

export default function Jogo(props){
    let word = "";
    function comparador() { 
        return Math.random() - 0.5; 
    }

    function raffleWord(){
        word = (palavras.sort(comparador))[1]
        props.setGameWord(word);
        modifiesUnderline();
    }

    function modifiesUnderline(){
        const str = []
        for(let i=0; i<(props.gameWord.split("")).length; i++){
          str.push("_ ")
        }
        props.setUnderlines(str);
    }

    return(
        <div className="containerGame">
            <div className="gameResult">
                <div className="containerLeft">
                <img alt="faseImage" src="./assets/images/forca0.png"/>
                </div>
                <div className="containerRigth">
                <button className="buttonStart" onClick={raffleWord}>Escolher palavra</button>
                <div className="word">
                    <h1>{props.underlines}</h1>
                </div>
                </div>
            </div>
            </div>

    )
}
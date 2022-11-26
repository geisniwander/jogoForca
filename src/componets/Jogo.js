import palavras from "../palavras"

export default function Jogo(props){
    if(props.underState===true){
        modifyUnderline();
    }

    let str=[];
    let word = "";
    function comparador() { 
        return Math.random() - 0.5; 
    }

    function raffleWord(){
        word = (palavras.sort(comparador))[1]
        props.setGameWord(word);
        insertUnderline();
    }

    function insertUnderline(){
        for(let i=0; i<word.length; i++){
          str.push("_ ")
        }
        props.setUnderlines(str);
    }

    function modifyUnderline(){
        let errors = 0;
        let hit=0;
        const mword =(props.gameWord)
        const uword =(props.underlines)
        const fword = [];
        console.log(mword);

        for(let i=0; i<mword.length;i++){
            if(mword[i]===props.letter){
                fword.push(props.letter);
                hit++;
            }
            else{

                if(uword[i]===" "){
                    fword.push(" ");
                }
                else if(uword[i]==="_"){
                    fword.push("_");
                }
                else{
                    fword.push(uword[i])
                }
            }
        }
        if(hit===0){
            errors=(props.errors)+1
            if(errors>6){
                endGame();
            }
            else{
                console.log(errors)
                props.setErrors(errors)
                props.setImage(`../assets/images/forca${errors}.png`)
            }
        }
        props.setUnderlines(fword);
        props.setUnderState(false);
    }

    function endGame(){
        console.log("acabou");
        props.setErrors(0)
        props.setImage(`../assets/images/forca0.png`)
        props.setGameWord("")
        props.setUnderlines("")
    }

  
    return(
        <div className="containerGame">
            <div className="gameResult">
                <div className="containerLeft">
                <img alt="faseImage" src={props.image}/>
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
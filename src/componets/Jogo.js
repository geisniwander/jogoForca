import palavras from "../palavras"

export default function Jogo(props){
    let str=[];
    let word = "";
    if(props.underState===true){
        modifyUnderline();
    }
    if(props.attemptButton){
        testAttempt();
    }
    function comparador() { 
        return Math.random() - 0.5; 
    }
    function startGame(){
        props.setImage(`../assets/images/forca0.png`)
        props.setUnderlines("");
        props.setGameWord("");
        props.setClassWord("");
        props.setGameStart(false);
        props.setFinished(false);
        props.setAttemptButton(false);
        props.setClicked("")
        props.setUnderState(false)
        props.setErrors(0)
        props.setAttempt("")
        raffleWord();
    }
    function raffleWord(){
        word = (palavras.sort(comparador))[1]
        props.setGameWord(word);
        console.log(word)
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
        if(fword.join('')===props.gameWord){
            endGame("victory");
        }
        if(hit===0){
            errors=(props.errors)+1
            if(errors>=6){
                endGame("defeat");
                props.setUnderlines(props.gameWord);
                props.setUnderState(false);
                return
            }
            else{
                props.setErrors(errors)
                props.setImage(`../assets/images/forca${errors}.png`)
            }
        }
        props.setUnderlines(fword);
        props.setUnderState(false);
    }

    function testAttempt(){
        if(props.attempt===props.gameWord){
            endGame("victory")
        }
        else{
            endGame("defeat")
        }
    }

    function endGame(identifier){
        props.setUnderlines(props.gameWord)
        props.setFinished(true)            
        if(identifier==="victory"){
            props.setImage(`../assets/images/forca0.png`)
            props.setClassWord("victory")
            props.setGameStart(true);
        }
        else{
            defeat();
        }
    }
    function defeat(){
        props.setImage(`../assets/images/forca6.png`)
        props.setClassWord("defeat")
        props.setGameStart(true);
    }

  
    return(
        <div className="containerGame">
            <div className="gameResult">
                <div className="containerLeft">
                <img alt="faseImage" src={props.image} data-test="game-image"/>
                </div>
                <div className="containerRigth">
                <button className="buttonStart" disabled={!props.gameStart} onClick={startGame} data-test="choose-word">Escolher palavra</button>
                <div className={`word ${props.classWord}`}>
                    <h1 data-test="word" data-answer={props.gameWord}>{props.underlines}</h1>
                </div>
                </div>
            </div>
            </div>

    )
}
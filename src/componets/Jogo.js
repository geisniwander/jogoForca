import palavras from "../palavras"

export default function Jogo(props){
    if(props.underState===true){
        modifyUnderline();
    }
    if(props.attemptButton){
        testAttempt();
    }

    let str=[];
    let word = "";
    function comparador() { 
        return Math.random() - 0.5; 
    }
    function startGame(){
        props.setGameStart(false);
        raffleWord();
    }
    function raffleWord(){
        word = (palavras.sort(comparador))[1]
        props.setGameWord(word);
        insertUnderline();
        //console.log(props.gameStart)

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
        console.log(fword.join(''))
        console.log(props.gameWord)
        if(fword.join('')===props.gameWord){
            endGame("victory");
        }
        if(hit===0){
            errors=(props.errors)+1
            if(errors>6){
                endGame("defeat");
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

    function testAttempt(){
        if(props.attempt===props.gameWord){
            endGame("victory")
        }
        else{
            console.log("ekse")
            endGame("defeat")
        }
    }

    function endGame(identifier){
        if(identifier==="victory"){
            props.setImage(`../assets/images/forca0.png`)
            props.setClassWord("victory")
            props.setUnderlines(props.gameWord)
            console.log("ganhou");
        }
        else{
            props.setImage(`../assets/images/forca6.png`)
            props.setClassWord("defeat")
            console.log("perdeu");
        }
        props.setErrors(0)
        props.setGameWord("")
        //props.setUnderlines("")
        props.setUnderState(false);
        props.setAttempt(false)
        props.setAttemptButton(false)

    }

  
    return(
        <div className="containerGame">
            <div className="gameResult">
                <div className="containerLeft">
                <img alt="faseImage" src={props.image}/>
                </div>
                <div className="containerRigth">
                <button className="buttonStart" onClick={startGame}>Escolher palavra</button>
                <div className={`word ${props.classWord}`}>
                    <h1>{props.underlines}</h1>
                </div>
                </div>
            </div>
            </div>

    )
}
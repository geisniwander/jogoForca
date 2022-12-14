import styled from "styled-components";

export default function Letras(props) {
  const alfabeto1 = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
  ];
  const alfabeto2 = [
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const { setLetter, setUnderState, gameStart, clicked, setClicked, finished } =
    props;

  function clickedLetter(l) {
    setClicked(clicked + l);
    setLetter(l);
    setUnderState(true);
  }

  return (
    <ContainerLetters>
      <TopBottonLetters>
        {alfabeto1.map((l) => (
          <button
            key={l}
            disabled={
              finished || gameStart || clicked.includes(l) ? true : false
            }
            onClick={() => clickedLetter(l)}
            data-test="letter"
          >
            {l}
          </button>
        ))}
      </TopBottonLetters>
      <TopBottonLetters>
        {alfabeto2.map((l) => (
          <button
            key={l}
            disabled={
              finished || gameStart || clicked.includes(l) ? true : false
            }
            onClick={() => clickedLetter(l)}
            data-test="letter"
          >
            {l}
          </button>
        ))}
      </TopBottonLetters>
    </ContainerLetters>
  );
}

const ContainerLetters = styled.div`
  width: 100%;
  margin-bottom: 1%;
`;
const TopBottonLetters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    width: 40px;
    height: 40px;
    margin: 0.4%;
    background-color: #e1ecf4;
    border: 1px solid #7aa7c7;
    color: #7aa7c7;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 700;
  }
  button:disabled {
    background-color: #9faab5;
    color: #798a9f;
  }
`;

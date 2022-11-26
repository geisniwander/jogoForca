import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";

function App() {
  return (
    <>
      <Jogo />
      <div className="containerUser">
        <Letras />
        <Chute />
      </div>
    </>
  );
}

export default App;

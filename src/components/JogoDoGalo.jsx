//Cria aqui o teu componente
import { useJogoDoGalo } from "../hooks/useJogoDoGalo";
import styles from "../styles/JogoDoGalo.module.css";

const casaVazia = " ";
export function JogoDoGalo() {
  const {
    jogo,
    verificarFimDoJogo,
    adicionarJogada,
    verificarVencedor,
    reiniciarJogo,
  } = useJogoDoGalo();

  return (
    <div className={styles.wrapper}>
      <div className="">
        <div>
          <div className="flex justify-center mb-2 font-bold ">
            Current Player:
            <span className="text-black"> {jogo.jogadorAtual}</span>
          </div>
          <div className="border-4  rounded-lg border-black p-2 mb-4">
            <div className={styles.row}>
              <div>
                <button
                  className={`${styles.cell} ${
                    jogo.tabuleiro[0][0] === "X"
                      ? styles.cellX
                      : jogo.tabuleiro[0][0] === "O"
                      ? styles.cellO
                      : ""
                  }`}
                  onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 0, 0)}
                >
                  {jogo.tabuleiro[0][0]}
                </button>
              </div>
              <div>
                <button
                  className={`${styles.cell} ${
                    jogo.tabuleiro[0][1] === "X"
                      ? styles.cellX
                      : jogo.tabuleiro[0][1] === "O"
                      ? styles.cellO
                      : ""
                  }`}
                  onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 0, 1)}
                >
                  {jogo.tabuleiro[0][1]}
                </button>
              </div>
              <div>
                <button
                  className={`${styles.cell} ${
                    jogo.tabuleiro[0][2] === "X"
                      ? styles.cellX
                      : jogo.tabuleiro[0][2] === "O"
                      ? styles.cellO
                      : ""
                  }`}
                  onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 0, 2)}
                >
                  {jogo.tabuleiro[0][2]}
                </button>
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <button
                  className={`${styles.cell} ${
                    jogo.tabuleiro[1][0] === "X"
                      ? styles.cellX
                      : jogo.tabuleiro[1][0] === "O"
                      ? styles.cellO
                      : ""
                  }`}
                  onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 1, 0)}
                >
                  {jogo.tabuleiro[1][0]}
                </button>
              </div>
              <div>
                <button
                  className={`${styles.cell} ${
                    jogo.tabuleiro[1][1] === "X"
                      ? styles.cellX
                      : jogo.tabuleiro[1][1] === "O"
                      ? styles.cellO
                      : ""
                  }`}
                  onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 1, 1)}
                >
                  {jogo.tabuleiro[1][1]}
                </button>
              </div>
              <div>
                <button
                  className={`${styles.cell} ${
                    jogo.tabuleiro[1][2] === "X"
                      ? styles.cellX
                      : jogo.tabuleiro[1][2] === "O"
                      ? styles.cellO
                      : ""
                  }`}
                  onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 1, 2)}
                >
                  {jogo.tabuleiro[1][2]}
                </button>
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <button
                  className={`${styles.cell} ${
                    jogo.tabuleiro[2][0] === "X"
                      ? styles.cellX
                      : jogo.tabuleiro[2][0] === "O"
                      ? styles.cellO
                      : ""
                  }`}
                  onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 2, 0)}
                >
                  {jogo.tabuleiro[2][0]}
                </button>
              </div>
              <div>
                <button
                  className={`${styles.cell} ${
                    jogo.tabuleiro[2][1] === "X"
                      ? styles.cellX
                      : jogo.tabuleiro[2][1] === "O"
                      ? styles.cellO
                      : ""
                  }`}
                  onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 2, 1)}
                >
                  {jogo.tabuleiro[2][1]}
                </button>
              </div>
              <div>
                <button
                  className={`${styles.cell} ${
                    jogo.tabuleiro[2][2] === "X"
                      ? styles.cellX
                      : jogo.tabuleiro[2][2] === "O"
                      ? styles.cellO
                      : ""
                  }`}
                  onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 2, 2)}
                >
                  {jogo.tabuleiro[2][2]}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button className="font-bold" onClick={() => reiniciarJogo()}>
          Restart
        </button>
      </div>
      <div>
        Has the game finished?
        {verificarFimDoJogo(jogo) === true ? " Yes" : " No"}
      </div>
      <div>Winner: {verificarVencedor(jogo)}</div>
    </div>
  );
}

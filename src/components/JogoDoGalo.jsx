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
      <div className="w-64 h-64 bg-fuchsia-500">
        <div>
          <div className={styles.row}>
            <div>
              <button
                className={styles.cell}
                onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 0, 0)}
              >
                {jogo.tabuleiro[0][0]}
              </button>
            </div>
            <div>
              <button
                className={styles.cell}
                onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 0, 1)}
              >
                {jogo.tabuleiro[0][1]}
              </button>
            </div>
            <div>
              <button
                className={styles.cell}
                onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 0, 2)}
              >
                {jogo.tabuleiro[0][2]}
              </button>
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <button
                className={styles.cell}
                onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 1, 0)}
              >
                {jogo.tabuleiro[1][0]}
              </button>
            </div>
            <div>
              <button
                className={styles.cell}
                onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 1, 1)}
              >
                {jogo.tabuleiro[1][1]}
              </button>
            </div>
            <div>
              <button
                className={styles.cell}
                onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 1, 2)}
              >
                {jogo.tabuleiro[1][2]}
              </button>
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <button
                className={styles.cell}
                onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 2, 0)}
              >
                {jogo.tabuleiro[2][0]}
              </button>
            </div>
            <div>
              <button
                className={styles.cell}
                onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 2, 1)}
              >
                {jogo.tabuleiro[2][1]}
              </button>
            </div>
            <div>
              <button
                className={styles.cell}
                onClick={() => adicionarJogada(jogo, jogo.jogadorAtual, 2, 2)}
              >
                {jogo.tabuleiro[2][2]}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {JSON.stringify(jogo)} */}
      <div></div>{" "}
      <div>
        <button onClick={() => reiniciarJogo()}>Reiniciar</button>
      </div>
      <div>
        O jogo já acabou? {verificarFimDoJogo(jogo) === true ? "SIM" : "NAO"}
      </div>
      <div>Quem ganhou foi: {verificarVencedor(jogo)}</div>
      <div>Jogador atual: {jogo.jogadorAtual}</div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useJogoDoGalo } from "../hooks/useJogoDoGalo";

export function JogoDoGalo() {
  const {
    jogo,
    verificarFimDoJogo,
    adicionarJogada,
    verificarVencedor,
    reiniciarJogo,
  } = useJogoDoGalo();

  const [previousWinner, setPreviousWinner] = useState(null);
  const winner = verificarVencedor(jogo);

  useEffect(() => {
    if (winner) {
      setPreviousWinner(winner);
    }
  }, [winner]);

  const handleRestart = () => {
    reiniciarJogo();
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center transition-colors duration-500 ${
        winner === "X"
          ? "bg-gradient-to-b from-amber-300 to-amber-200"
          : winner === "O"
          ? "bg-gradient-to-b from-rose-300 to-rose-200"
          : "bg-teal-200"
      }`}
    >
      <div className="text-center mb-4">
        <div className="mb-2 font-bold text-2xl">
          {winner ? (
            <>
              Winner: <span className="text-black">{winner}</span>
            </>
          ) : (
            <>
              Current Player:{" "}
              <span className="text-black">{jogo.jogadorAtual}</span>
            </>
          )}
        </div>
        <div className="border-4 rounded-lg border-black p-4 mb-4 shadow-lg bg-cyan-500">
          <div className="flex flex-col gap-2">
            {jogo.tabuleiro.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-2">
                {row.map((cell, cellIndex) => (
                  <button
                    key={cellIndex}
                    className={`flex justify-center items-center font-bold text-5xl w-20 h-20 rounded-lg border-4 transition-all duration-200 ${
                      cell === "X"
                        ? "bg-amber-200 text-amber-800"
                        : cell === "O"
                        ? "bg-rose-200 text-rose-800"
                        : "bg-violet-500 text-violet-800"
                    } border-black hover:shadow-xl cursor-pointer transform hover:scale-105`}
                    onClick={() =>
                      !winner &&
                      adicionarJogada(
                        jogo,
                        jogo.jogadorAtual,
                        rowIndex,
                        cellIndex
                      )
                    }
                    disabled={!!winner}
                  >
                    {cell}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button
          className="font-bold bg-emerald-500 border-4 border-black text-black px-6 py-2 rounded shadow hover:bg-emerald-600 transition duration-200"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
      <div className="mt-4 text-lg">
        Has the game finished?{" "}
        <span className="font-semibold">
          {verificarFimDoJogo(jogo) ? "Yes" : "No"}
        </span>
      </div>
      <div className="mt-2 text-lg">
        Previous Winner:{" "}
        <span className="font-semibold">
          {previousWinner ? previousWinner : "None"}
        </span>
      </div>
    </div>
  );
}

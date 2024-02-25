import { useState } from "react";

import styles from "../styles/Game.module.css";

import Board from "./Board";
import { calculateWinner } from "../helpers";

export default function Game() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);

    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];

        if (winner || boardCopy[i]) return;

        boardCopy[i] = xIsNext ? <span className={styles.x}>X</span> : <span className={styles.o}>O</span>;
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    };

    const renderMoves = () => {
        return <button className={styles.start} onClick={() => setBoard(Array(9).fill(null))}>Start</button>
    };

    return (
        <div className={styles.container}>
            <h2>Jogo da velha</h2>
            <Board
                Squares={board}
                onClick={handleClick}>
            </Board>
            <div className={styles.rotulo}>
                <p>{winner ? 'Vitórias: ' + winner : 'Próximo: '} <span>{(xIsNext ? 'X' : 'O')}</span></p>
                {renderMoves()}
            </div>
            <footer>&copy; Hipnos</footer>
        </div>
    );
};
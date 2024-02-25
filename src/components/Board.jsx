import Square from "./Square";
import styles from "../styles/Board.module.css";

export default function Board({ Squares, onClick }) {
    return (
        <div className={styles.board}>
            {Squares.map((square, i) => (
                <Square
                    key={i}
                    value={square}
                    onClick={() => onClick(i)}
                />
            ))}
        </div>
    );
};
import styles from "../styles/Square.module.css";

export default function Square({ onClick, value }) {
    return (
        <>
            <button className={styles.square} onClick={onClick}>{value}</button>
        </>
    );
};
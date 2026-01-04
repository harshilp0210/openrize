import styles from './GlobalBackground.module.css';

const GlobalBackground = () => {
    return (
        <div className={styles.background}>
            <div className={styles.grid}></div>
        </div>
    );
};

export default GlobalBackground;

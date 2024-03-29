import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Creative Thoughts Agency.</h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Accusamus corporis, adipisci unde nesciunt excepturi.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.button}>Learn More</button>
                    <button className={styles.button}>Contact</button>
                </div>
                <div className={styles.brands}>
                    <Image
                        className={styles.brandImg}
                        src="/brands.png"
                        alt=""
                        fill
                    />
                </div>
            </div>

            <div className={styles.imageContainer}>
                <Image className={styles.heroImg} src="/hero.gif" alt="" fill />
            </div>
        </div>
    );
};

export default Home;

import styles from './Hero.module.css'
import heroImg from '../../../assets/image/hero.svg'
export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroInner}>
                <div className={styles.left}>
                    <h1 className={styles.title}>
                        Chef<br/>
                        Academy<br/>
                        Secrets
                    </h1>
                </div>
                <div className={styles.badges}>
                    <p className={styles.badgesText}>
                        New strawberry season has started, let’s cook!
                    </p>
                    <p className={styles.badgesText}>
                        Our chef are always ready
                    </p>
                </div>
                <div className={styles.right}>
                    <img src={heroImg} alt='hero' className={styles.heroImg}/>
                </div>
            </div>
        </section>
    )
}
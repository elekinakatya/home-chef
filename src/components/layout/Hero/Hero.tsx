import styles from './Hero.module.css'
import heroImg from '../../../assets/image/hero.svg'
import love from '../../../assets/image/love.svg'
import spot from '../../../assets/image/spot1.svg'
import spotMini from '../../../assets/image/spot(mini).svg'
import whiteSpot from '../../../assets/image/whiteSpot.svg'
import sticks from '../../../assets/image/sticks.svg'
import {useEffect, useRef, useState} from "react";

type HeroProps = {
    onHide?: () => void;
    onSlideStart?: () => void;
}

export const Hero = ( {onHide,onSlideStart}: HeroProps) => {
    const [scrolled, setScrolled] = useState(false)
    const [hidden, setHidden] = useState(false)
    const heroRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const onScroll = () => {
            if (!heroRef.current) return;

            const heroHeight = heroRef.current.offsetHeight;
            if (window.scrollY > heroHeight/2) {
                setScrolled(true)
                onSlideStart?.()
                window.removeEventListener('scroll', onScroll);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    if (hidden) return null;

    return (
        <section ref={heroRef} className={`${styles.hero}
         ${scrolled ? ' animate__animated animate__slideOutUp' : '' } `}
        onAnimationEnd={() => {
            if (scrolled) {
                setHidden(true);
                onHide?.();
            }
        }}
        >
            <img src={spot} alt="Spot" className={styles.spot} />
            <img src={spotMini} alt="SpotMini" className={styles.spotMini} />
            <img src={whiteSpot} alt="WhiteSpot" className={styles.whiteSpot} />
            <img src={sticks} alt="Sticks" className={styles.sticks} />
            <div className={styles.heroInner}>
                <div className={styles.left}>
                    <h1 className={styles.title}>
                        <span className={styles.line1}>Chefs</span>
                        <span className={styles.line2}>Academy</span>
                        <span className={styles.line3}>Secrets</span>
                    </h1>
                        <div className={styles.badgesTop}>
                            <img src={love} alt="love" className={styles.love}/>
                            <p className={styles.badgesText}>
                                New strawberry season has started, let’s cook!
                            </p>
                        </div>
                        <div className={styles.badgesBottom}>
                            <img src={love} alt="love" className={styles.love}/>
                            <p className={styles.badgesText}>
                                Our chef are always ready
                            </p>
                        </div>
                </div>
                <div className={styles.right}>
                    <img src={heroImg} alt='hero' className={styles.heroImg}/>
                </div>
            </div>
        </section>
    )
}
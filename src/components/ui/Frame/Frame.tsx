import styles from './Frame.module.css'
import type {ReactNode} from "react";

type FrameProps = {
    children: ReactNode
}
export const Frame =({children}: FrameProps) => {

    return (
        <div className={styles.frame}>{children}</div>
    )

}
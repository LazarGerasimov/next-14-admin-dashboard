import Image from 'next/image';
import styles from './rightbar.module.css';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';

const Rightbar = () => {
    return (
        <div className={styles.container}>
            {/* First card */}
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image
                        src="/astronaut.png"
                        alt='astro_image'
                        fill
                        className={styles.bgImage}
                    />
                </div>
                <div />
                <div className={styles.text}>
                    <span className={styles.notification}>🔥 Available Now</span>
                    <h3 className={styles.title}>
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>

            {/* Second card */}
            <div className={styles.item}>
                <div />
                <div className={styles.text}>
                    <span className={styles.notification}>🔥 Available Now</span>
                    <h3 className={styles.title}>
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar
import Link from 'next/link';

import styles from './workout.module.scss';

interface props {
    workout: any
}

export default function Workout({ workout }: props) {
    return (
        <Link href={workout.link} className={styles.link}>
            <li className={styles.card}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardTitle}>{workout.label}</div>
                </div>
                <div className={styles.footer}>
                    <p className={styles.recent}>{workout.reps} Reps</p>
                    <p className={styles.recent}>{workout.sets} Sets</p>
                </div>
            </li>
        </Link>
    )
}
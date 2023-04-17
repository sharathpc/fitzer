import Link from 'next/link';

import styles from './weekday.module.scss';

interface props {
    day: any
}

export default function Weekday({ day }: props) {
    return (
        <Link href={`/${day.label}`}>
            <li className={styles.card} style={{ backgroundColor: day.color }}>
                <div className={styles.cardHeader}>
                    <div className={styles.cardTitle}>{day.label}</div>
                </div>
                <div className={styles.cardTime}>{day.workoutType}</div>
                <p className={styles.recent}>Workouts - {day.workouts.length}</p>
            </li>
        </Link>
    )
}
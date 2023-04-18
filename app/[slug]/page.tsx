import styles from './page.module.scss';

import weeksdata from '@/data/weekdays';
import Workout from '@/components/workout/workout';

type Props = {
  params: any
}

export default function Workouts({ params }: Props) {
  const day = weeksdata.find(day => day.label === params.slug);
  return (
    <main className={styles.main}>
      <div className={styles.daySection}>
        <div className={styles.title}>{day?.label}</div>
        <p className={styles.recent}>Workouts - {day?.workouts.length}</p>
      </div>
      <ul className={styles.workouts}>
        {day?.workouts.map(workout =>
          <Workout key={workout?.label} workout={workout} />
        )}
      </ul>
    </main>
  )
}

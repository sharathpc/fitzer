import styles from './page.module.scss';

import weeksdata from '@/data/weekdays';
import Weekday from '@/components/weekday/weekday';
import Workout from '@/components/workout/workout';

type Props = {
  params: any
}

export default function Workouts({ params }: Props) {
  const day = weeksdata.find(day => day.label === params.slug);
  return (
    <main className={styles.main}>
      {/* <Weekday key={day?.label} day={day} /> */}
      <ul className={styles.workouts}>
        {day?.workouts.map(workout =>
          <Workout key={workout.label} workout={workout} />
        )}
      </ul>
    </main>
  )
}

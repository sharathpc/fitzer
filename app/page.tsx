import styles from './page.module.scss';

import weeksdata from '@/data/weekdays';
import Weekday from '@/components/weekday/weekday';

export default function Home() {
  return (
    <main className={styles.main}>
      <ul className={styles.weekdays}>
        {weeksdata.map(day =>
          <Weekday key={day.label} day={day} />
        )}
      </ul>
    </main>
  )
}

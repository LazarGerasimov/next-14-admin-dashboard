import Image from 'next/image'
import styles from './transactions.module.css'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {/* First */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt='no-avatar-img'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>14.02.24</td>
            <td>£438.00</td>
          </tr>
          {/* Second */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt='no-avatar-img'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Tony Montana
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>10.05.24</td>
            <td>£402.55</td>
          </tr>
          {/* Third */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt='no-avatar-img'
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Pablo Escobar
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
            </td>
            <td>15.03.24</td>
            <td>£544.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
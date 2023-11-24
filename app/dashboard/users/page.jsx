import Search from '@/app/ui/dashboard/search/search';
import styles from '../../ui/dashboard/users/users.module.css';

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user.."/>
      </div>
      <table className={styles.table}>

      </table>
    </div>
  )
}

export default UsersPage
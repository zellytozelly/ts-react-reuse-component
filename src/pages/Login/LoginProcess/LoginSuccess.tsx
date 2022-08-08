import styles from './loginProcess.module.scss'

const LoginSuccess = () => {
  return (
    <div className={styles.loginSuccessContainer}>
      <div className={styles.title}>
        <p>반갑습니다</p>
        <p>000 님</p>
      </div>
      <img src='' className={styles.img} alt='' />
      <button type='button'>시작하기</button>
    </div>
  )
}

export default LoginSuccess

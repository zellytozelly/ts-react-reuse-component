import styles from './loginProcess.module.scss'

const LoginPage = () => {
  return (
    <div className={styles.loginPageContainer}>
      <h1>소셜 로그인</h1>
      <button type='button'>구글로그인 위치</button>
    </div>
  )
}

export default LoginPage

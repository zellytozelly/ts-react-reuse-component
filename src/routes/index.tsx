import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import Main from 'pages/Main'
import Login from 'pages/Login'
import Time from 'pages/Time/Time'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='time' element={<Time />} />
        <Route path='*' element={<p>404 Not Found</p>} />
      </Routes>
    </div>
  )
}

export default App

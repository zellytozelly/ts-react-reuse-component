import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import Main from 'pages/Main'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<p>404 Not Found</p>} />
      </Routes>
    </div>
  )
}

export default App

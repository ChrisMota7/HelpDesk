import Image from 'next/image'
import styles from './page.module.css'
import Login from './Login/Login'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import { Dashboard } from './components/Dashboard/Dashboard'

export default function Home() {
  return (
    <div>
      {/* Hello world */}
      <Login></Login>
    </div>
  )
}

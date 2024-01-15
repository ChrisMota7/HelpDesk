import Image from 'next/image'
import styles from './page.module.css'
import Login from './Login/Login'
// import { Dashboard } from './components/Dashboard/Dashboard'

export default function Home() {
  return (
    <div>
      {/* Hello world */}
      <Login></Login>
    </div>
  )
}

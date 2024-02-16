import './globals.css'
import Sidevar from './components/Sidevar/Sidevar'
import Menu from './components/Menu/Menu'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>HELP-DESK</title>
      <body>
        <Menu children={children}/>
      </body>
    </html>
  )
}

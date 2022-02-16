import 'tailwindcss/tailwind.css'

import {getToken} from '../utils/login'
import {Nav} from '../components/Nav'
import {UserProvider} from '../contexts/user.context'

import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
  const { user } = getToken()

  return (
    <UserProvider initialUser={user}>
      <div className="h-screen">
        <Nav loggedUser={user} />
        <Component {...pageProps} />
      </div>
    </UserProvider>
  )
}
export default MyApp

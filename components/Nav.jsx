import Link from 'next/link'
import {useRouter} from 'next/router'
import { logoutUser } from '../utils/login'

export function Nav({ loggedUser }) {
  const router = useRouter()

  const userLogout = () => {
    logoutUser()
    router.push('/')
  }

  return (
    <div className="fixed top-0 w-full">
      <div className="flex justify-center p-4 space-x-4 text-sm text-gray-500">
        <Link href="/">
          <a className={router.pathname == '/' ? 'text-gray-900' : ''}>Home</a>
        </Link>
        { loggedUser ?          
          <span className="cursor-pointer" onClick={userLogout} >
            <a >Logout</a>
          </span> :
          <>
          <Link href="/login">
            <a className={router.pathname == '/login' ? 'text-gray-900' : ''}>Login</a>
          </Link>
          <Link href="/register">
            <a className={router.pathname == '/register' ? 'text-gray-900' : ''}>Register</a>
          </Link>
          </>
        }


      </div>
    </div>
  )
}

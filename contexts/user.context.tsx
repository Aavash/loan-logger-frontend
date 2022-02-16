import {createContext, FC, useContext, useState} from 'react'

export interface UserContext {
  user?: UserDocument
  setUser: (user?: UserDocument) => void
}

export interface UserDocument {
  id: string
  name: string
  tokenVersion: number
  gitHubUserId: string
}

export const UserContextImpl = createContext<UserContext>(null!)

export function useUser() {
  return useContext(UserContextImpl)
}

interface Props {
  initialUser?: any
}

export const UserProvider: FC<Props> = ({children, initialUser}) => {
  const [user, setUser] = useState(initialUser)

  return <UserContextImpl.Provider value={{user, setUser}}>{children}</UserContextImpl.Provider>
}

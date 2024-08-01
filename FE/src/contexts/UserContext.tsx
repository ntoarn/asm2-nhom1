import { IUser } from '@/interfaces/User'
import { createContext, ReactNode, useEffect, useState } from 'react'

export type AuthContextType = {
	user: IUser
	logout: () => void
	login: (user: IUser, accessToken: string) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<IUser>({} as IUser)
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user') || '{}')
		if (user) {
			setUser(user)
		}
	}, [])
	const logout = () => {
		localStorage.removeItem('user')
		localStorage.removeItem('accessToken')
		setUser({} as IUser)
	}

	const login = (user: IUser, accessToken: string) => {
		localStorage.setItem('user', JSON.stringify(user))
		localStorage.setItem('accessToken', accessToken)
		setUser(user)
	}
	return <AuthContext.Provider value={{ user, logout, login }}>{children}</AuthContext.Provider>
}

export default AuthProvider
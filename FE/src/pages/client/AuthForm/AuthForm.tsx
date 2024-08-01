import instance from '@/apis'
import { AuthContext, AuthContextType } from '@/contexts/UserContext'
import { IUser } from '@/interfaces/User'
import { loginSchema, registerSchema } from '@/schemas/authSchema'
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type Props = {
	isLogin?: boolean
}

const AuthForm = ({ isLogin }: Props) => {
	const {
		handleSubmit,
		formState: { errors },
		register
	} = useForm<IUser>({
		resolver: zodResolver(isLogin ? loginSchema : registerSchema)
	})

	const nav = useNavigate()

	const { login } = useContext(AuthContext) as AuthContextType

	const onSubmitAuth = async (data: IUser) => {
		try {
			if (isLogin) {
				const res = await instance.post(`/auth/login`, data)
				console.log(res)
				login(res.data.user, res.data.token)
				res.data.user.role === 'admin' ? nav('/admin') : nav('/')
			} else {
				await instance.post(`/auth/register`, { email: data.email, password: data.password })
				nav('/login')
			}
		} catch (error: any) {
			console.log(error)
			alert(error?.response?.data || 'Error!')
		}
	}
	return (
		<form onSubmit={handleSubmit(onSubmitAuth)}>
			<h1>{isLogin ? 'Login' : 'Register'}</h1>
			<div className='mb-3'>
				<label htmlFor='email' className='form-label'>
					email
				</label>
				<input type='email' className='form-control' {...register('email', { required: true })} />
				{errors.email && <span className='text-danger'>{errors.email.message}</span>}
			</div>

			<div className='mb-3'>
				<label htmlFor='password' className='form-label'>
					password
				</label>
				<input type='password' className='form-control' {...register('password', { required: true })} />
				{errors.password && <span className='text-danger'>{errors.password.message}</span>}
			</div>

			{!isLogin && (
				<div className='mb-3'>
					<label htmlFor='confirmPass' className='form-label'>
						Confirm Password
					</label>
					<input type='password' className='form-control' {...register('confirmPass', { required: true })} />
					{errors.confirmPass && <span className='text-danger'>{errors.confirmPass.message}</span>}
				</div>
			)}

			<div className='mb-3'>
				<button className='btn btn-primary w-100'>{isLogin ? 'Login' : 'Register'}</button>
			</div>
		</form>
	)
}

export default AuthForm
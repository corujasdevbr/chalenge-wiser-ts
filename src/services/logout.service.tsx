import React from 'react'
import { logout } from '../store/ducks/auth'

const Logout : React.FC<any> = () => {
	localStorage.removeItem('token');
	return logout();
}
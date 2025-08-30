'use client'

import { useApp } from './context/AppContext'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'

export default function Home() {
    const { isAuthenticated } = useApp()

    return <>{isAuthenticated ? <Dashboard /> : <LoginPage />}</>
}

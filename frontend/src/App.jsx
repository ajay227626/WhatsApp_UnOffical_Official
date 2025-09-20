import { useState } from 'react'
import './App.css'
import { AuthProvider } from './context/AuthContext';
import Login from './pages/auth/Login';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <AuthProvider>
                <Login />
            </AuthProvider>
        </>        
    );
}

export default App

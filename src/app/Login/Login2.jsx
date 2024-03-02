'use client'
import { post } from '../utils/api';
import './Login.scss'
import React, {useState} from 'react';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) =>{
        e.preventDefault();

        try {
            const response = await post("/auth/login", { email, password })
            if (response.jwt) {
                router.push("/tickets")
            }
        } catch (e) {
            console.log(e)
        }

    }

    return(
        <div className="form-body">
            <img src="/LogoNegro.png" alt="user-login"/>
            <h1 class="text">HELP DESK</h1>
            <h2 class="text">Inicio de sesión</h2>
            <form class="login-form" onSubmit={submit}>
                <input type="text" placeholder="Email o nombre de usuario"
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="password" placeholder="Contraseña"
                    onChange={e => setPassword(e.target.value)}
                />
                <button>Iniciar Sesión</button>
            </form>


        </div>
    );
}
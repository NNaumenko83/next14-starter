import { register } from '@/lib/action';
import React from 'react';
import styles from './register.module.css';

function RegisterPage() {
    return (
        <div>
            RegisterPage
            <form action={register}>
                <input type="text" placeholder="username" name="" />
                <input type="email" placeholder="email" name="email" />
                <input
                    type="password"
                    placeholder="password"
                    name="passwordRepeat"
                />
                <input
                    type="password"
                    placeholder="password again"
                    name="password"
                />
                <button>Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;

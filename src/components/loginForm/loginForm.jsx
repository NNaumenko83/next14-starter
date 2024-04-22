'use client';
import { login } from '@/lib/action';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';

import styles from './loginForm.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);
    const router = useRouter();
    // useEffect(() => {
    //     if (state.isLoggedIn) {
    //         router.push('/');
    //     }
    // }, [state.isLoggedIn]);

    return (
        <>
            <form className={styles.form} action={formAction}>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button>Login</button>
                {state?.error && <p>{state.error}</p>}
                <Link href="/register">
                    {"Dont't have an account?"} <b>Register</b>
                </Link>
            </form>
        </>
    );
};

export default LoginForm;

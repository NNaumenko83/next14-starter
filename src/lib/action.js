'use server';
import { signIn, signOut } from './auth';

export const handleGoogleLogin = async () => {
    await signIn('google');
};

export const handleLogout = async () => {
    console.log('handleLogout');
    await signOut();
};

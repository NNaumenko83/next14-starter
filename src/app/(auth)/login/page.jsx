import { handleGoogleLogin } from '@/lib/action';

import React from 'react';

async function LoginPage() {
    return (
        <div>
            <form action={handleGoogleLogin}>
                <button>Login with Google</button>
            </form>
        </div>
    );
}

export default LoginPage;

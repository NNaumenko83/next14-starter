'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import React from 'react';

const NavigationTestPage = () => {
    // CLIENT SIDE NAVIGATION
    const pathName = usePathname();
    console.log('pathName:', pathName);
    const searchParams = useSearchParams();

    const q = searchParams.get('q');
    console.log('q:', q);

    const router = useRouter();
    const handleClick = () => {
        console.log('clicked');
        router.replace('/');
    };
    return (
        <div>
            <Link href="/" prefetch={false}>
                Home
            </Link>
            <button onClick={handleClick}>Write and redirect</button>
        </div>
    );
};

export default NavigationTestPage;

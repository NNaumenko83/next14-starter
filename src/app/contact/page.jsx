// 'use client';

import React from 'react';
import styles from './contact.module.css';
import Image from 'next/image';
// import HydrationTest from '@/components/hydrationTest';

export const metadata = {
    title: 'Contact page',
    description: 'Contact descriptions',
};

function ContactPage() {
    // const HydrationTestNoSSR = dynamic(
    //     () => import('@/components/hydrationTest'),
    //     { ssr: false }
    // );

    // const a = Math.random() * (10 - 1) + 1;
    // console.log('a:', a);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src="/contact.png" alt="" fill />
            </div>
            <div className={styles.formContainer}>
                {/* <div suppressHydrationWarning>{a}</div> */}

                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name ans Surname" />
                    <input type="email" placeholder="Email address" />
                    <input type="tel" placeholder="Phone Number (Optional)" />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message"
                    ></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;

'use client';
import React, { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/navLink';

const links = [
    {
        title: 'Homepage',
        path: '/',
    },
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
];

// TEMPORARY
const session = true;
const isAdmin = true;

function Links() {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link => (
                    <NavLink item={link} key={link.path} />
                ))}
                {session ? (
                    <>
                        {isAdmin && (
                            <NavLink
                                item={{ title: 'Admin', path: '/admin' }}
                            />
                        )}
                        <button type="button" className={styles.logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <NavLink item={{ title: 'Login', path: '/login' }} />
                )}
            </div>
            <button
                className={styles.menuButton}
                type="button"
                onClick={() => setOpen(!open)}
            >
                Menu
            </button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map(link => (
                        <NavLink item={link} key={link.path} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Links;

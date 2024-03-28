import Link from 'next/link';
import React from 'react';
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
    return (
        <div className={styles.links}>
            {links.map(link => (
                <NavLink item={link} key={link.path} />
            ))}
            {session ? (
                <>
                    {isAdmin && (
                        <NavLink item={{ title: 'Admin', path: '/admin' }} />
                    )}
                    <button type="button" className={styles.logout}>
                        Logout
                    </button>
                </>
            ) : (
                <NavLink item={{ title: 'Login', path: '/login' }} />
            )}
        </div>
    );
}

export default Links;

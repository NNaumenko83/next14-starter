import React from 'react';
import styles from './postUser.module.css';
import { getUser } from '@/lib/data';

// const getData = async id => {
//     const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${id}`,
//         { cache: 'no-store' }
//     );

//     if (!response.ok) {
//         throw new Error('Something went wrong');
//     }
//     const data = await response.json();
//     return data;
// };

const User = async ({ userId }) => {
    // const user = await getData(userId);

    const user = await getUser(userId);
    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.name}</span>
        </div>
    );
};

export default User;

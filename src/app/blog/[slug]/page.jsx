import React from 'react';
import styles from './singlePost.module.css';
import Image from 'next/image';

function SinglePostPage() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.img}
                    src="https://images.pexels.com/photos/17554347/pexels-photo-17554347/free-photo-of-taxis-in-front-of-palace-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                    fill
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image
                        className={styles.avatar}
                        src="https://images.pexels.com/photos/17554347/pexels-photo-17554347/free-photo-of-taxis-in-front-of-palace-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                    />
                    <div className={styles.detailtext}>
                        <span className={styles.detailAuthor}>Authot</span>
                        <span className={styles.detailValue}>
                            Terry Jefferson
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePostPage;

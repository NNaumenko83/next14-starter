import React from 'react';
import styles from './PostCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        alt=""
                        src="https://images.pexels.com/photos/17554347/pexels-photo-17554347/free-photo-of-taxis-in-front-of-palace-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        fill
                    />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat est dolore consequuntur voluptatem distinctio
                    explicabo quis alias minus cum impedit, perspiciatis at
                    natus libero culpa molestias tenetur commodi vel unde?
                </p>
                <Link className={styles.link} href="/blog/post">
                    READ MORE
                </Link>
            </div>
        </div>
    );
};

export default PostCard;

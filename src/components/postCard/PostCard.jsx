import React from 'react';
import styles from './PostCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

const PostCard = ({ post }) => {
    console.log('post:', post);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {post.img && (
                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.img}
                            alt=""
                            src={post.img}
                            fill
                        />
                    </div>
                )}
                <span className={styles.date}>
                    {format(new Date(post.createdAt), 'dd-MM-yyyy')}
                </span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.slug}`}>
                    READ MORE
                </Link>
            </div>
        </div>
    );
};

export default PostCard;

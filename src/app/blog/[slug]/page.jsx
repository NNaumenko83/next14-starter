import React, { Suspense } from 'react';
import styles from './singlePost.module.css';
import Image from 'next/image';
import User from '@/components/postUser/postUser';
import { getPost } from '@/lib/data';

//https:jsonplaceholder.typicode.com/posts/1

// FETCH DATA WITH API

// const getData = async id => {
//     const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${id}`
//     );

//     if (!response.ok) {
//         throw new Error('Something went wrong');
//     }
//     const data = await response.json();
//     return data;
// };

async function SinglePostPage({ params }) {
    console.log('params:', params);

    const { slug } = params;

    // const post = await getData(slug);

    // FETCH DATA WITHOUT API
    const post = await getPost(slug);
    console.log('post:', post);

    return (
        <div className={styles.container}>
            {post.img && (
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src={post.img} alt="" fill />
                </div>
            )}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <User userId={post.userId} />
                    </Suspense>

                    {/* <div className={styles.detailtext}>
                        <span className={styles.detailTitle}>Authot</span>
                        <span className={styles.detailValue}>
                            Terry Jefferson
                        </span>
                    </div> */}
                    <div className={styles.detailtext}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>
                            {post.createdAt.toString().slice(4, 16)}
                        </span>
                    </div>
                </div>
                <div className={styles.content}>{post.desc}</div>
            </div>
        </div>
    );
}

export default SinglePostPage;

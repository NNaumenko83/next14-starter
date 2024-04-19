import React from 'react';
import styles from './blog.module.css';
import PostCard from '@/components/postCard/PostCard';
// import { getPosts } from '@/lib/data';

// FETCH DATA WITH API

const getData = async () => {
    const response = await fetch('http://localhost:3000/api/blog', {
        next: { revalidate: 3600 },
    });
    console.log('response:', response);

    if (!response.ok) {
        throw new Error('Something went wrong');
    }
    const data = await response.json();
    return data;
};

export const metadata = {
    title: 'Blog page',
    description: 'Blog page',
};

async function BlogPage() {
    // FETCH DATA WITH API
    const posts = await getData();

    // FETCH DATA WITHOUT API
    // const posts = await getPosts();

    // console.log('posts:', posts);

    return (
        <div className={styles.container}>
            {posts.map(post => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
}

export default BlogPage;

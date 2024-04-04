import React from 'react';
import styles from './blog.module.css';
import PostCard from '@/components/postCard/PostCard';

const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
        throw new Error('Something went wrong');
    }
    const data = await response.json();
    return data;
};

async function BlogPage() {
    const posts = await getData();
    console.log('posts:', posts);

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

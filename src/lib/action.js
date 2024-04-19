'use server';
import { revalidatePath } from 'next/cache';
import { signIn, signOut } from './auth';
import { Post } from './models';
import { connectToDb } from './utils';

export const handleGoogleLogin = async () => {
    await signIn('google');
};

export const handleLogout = async () => {
    console.log('handleLogout');
    await signOut();
};

export const addPost = async formData => {
    const { title, description, slug, userId } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc: description,
            slug,
            userId,
        });

        await newPost.save();
        console.log('Save to database');
        revalidatePath('/blog');
    } catch (error) {
        console.log('error:', error);
        return { error: 'Something went wrong' };
    }
};
export const deletePost = async formData => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log('Deleted from database');
        revalidatePath('/blog');
    } catch (error) {
        console.log('error:', error);
        return { error: 'Something went wrong' };
    }
};

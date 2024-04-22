'use server';
import { revalidatePath } from 'next/cache';
import { signIn, signOut } from './auth';
import { Post, User } from './models';
import { connectToDb } from './utils';
import bcrypt from 'bcrypt';

export const handleGoogleLogin = async () => {
    await signIn('google');
};

export const handleLogout = async () => {
    console.log('handleLogout');
    await signOut();
};

export const register = async (prevState, formData) => {
    const { username, email, password, img, passwordRepeat } =
        Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        return { error: 'Password does not match' };
        // throw new Error('Password does not match');
    }

    try {
        connectToDb();
        const user = await User.findOne({ username });
        if (user) {
            return { error: 'User already exists' };
        }

        const salt = await bcrypt.genSalt(10);
        console.log('salt:', salt);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log('hashedPassword:', hashedPassword);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });

        await newUser.save();
        console.log('Saved to database');

        return { success: true };
    } catch (error) {
        console.log('error:', error);
        return { error: 'Something went wrong' };
    }
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

export const login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn('credentials', { username, password });
    } catch (error) {
        console.log('error:', error);
        if (error.message.includes('CredentialsSignin')) {
            return { error: 'Invalid username or password' };
        }
        return { error: 'Something went wrong' };
    }
};

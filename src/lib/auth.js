import NextAuth from 'next-auth';
// import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { connectToDb } from './utils';
import { User } from './models';
export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log(user, account, 'profile', profile);
            if (account.provider === 'google') {
                connectToDb();
                try {
                    const user = await User.findOne({ email: profile.email });
                    if (!user) {
                        const newUser = new User({
                            username: profile.name,
                            email: profile.email,
                            image: profile.picture,
                        });
                        await newUser.save();
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
            return true;
        },
    },
});

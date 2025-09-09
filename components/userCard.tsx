import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type Variant = 'default' | 'compact';

export interface UsersCardInterface {
    users: UserCardProps[];
}

export interface UserCardProps {
    id: number;
    name: string;
    job: string;
    rating: string;
    email: string;
    phone: string;
    avatar: string;
}

export const user1: UserCardProps = {
    id: 1,
    name: 'John Doe',
    job: 'Développeur React Native',
    rating: '⭐⭐⭐⭐⭐',
    email: 'john@example.com',
    phone: '+33 6 12 34 56 78',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
};

export const user2: UserCardProps = {
    id: 2,
    name: 'Sarah Connor',
    job: 'Designer UX/UI',
    rating: '⭐⭐⭐⭐⭐',
    email: 'sarah@example.com',
    phone: '+33 6 87 65 43 21',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
};

export const user3: UserCardProps = {
    id: 3,
    name: 'Mike Johnson',
    job: 'Chef de projet',
    rating: '⭐⭐⭐⭐',
    email: 'mike@example.com',
    phone: '+33 6 11 22 33 44',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
};

export const user4: UserCardProps = {
    id: 4,
    name: 'Emma Watson',
    job: 'Développeuse Backend',
    rating: '⭐⭐⭐⭐⭐',
    email: 'emma@example.com',
    phone: '+33 6 55 66 77 88',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
};

export const users: UsersCardInterface = {
    users: [user1, user2, user3, user4],
};


function Header({ userData, variant = 'default' }: { userData: UserCardProps, variant?: Variant }) {
    return (
        <View style={styles.header}>
            <View>
                <Image
                    source={{ uri: userData?.avatar }}
                    style={variant === 'compact' ? styles.avatarSmall : styles.avatar} />
                <Text style={styles.name}>{userData?.name}</Text>
                <Text style={styles.job}>{userData?.job}</Text>
                <Text style={styles.rating}>{userData?.rating}</Text>
            </View>
        </View>
    );
}

function Contact({ userData }: { userData: UserCardProps }) {
    return (
        <View>
            <Text style={styles.contactItem}>{userData?.email}</Text>
            <Text style={styles.contactItem}>{userData?.phone}</Text>
        </View>
    );
}

export function Button({ title, onPress }: { title: string, onPress: () => void }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

export function ProfileCardList({ users, variant = 'default' }: { users: UsersCardInterface, variant?: Variant }) {
    return (
        <View>
            {users.users.map((user) => (
                <ProfileCard key={user.id} userData={user} variant={variant} />
            ))}
        </View>
    );
}

export function ProfileCard({ userData, variant = 'default' }: { userData: UserCardProps, variant?: Variant }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.card, variant === 'default' && styles.card,
            variant === 'compact' && styles.compactCard]}>
                <Header userData={userData} />
                <View style={styles.contact}>
                    <Contact userData={userData} />
                    <Button title="Contact me" onPress={() => console.log('Contact me')} />
                </View>
            </View>
        </SafeAreaView>
    );

}

export function DisplayContent({ children, condition, valueStart = 0, valueEnd = 0 }: { children: React.ReactNode, condition: 'custom', valueStart?: number, valueEnd?: number }) {

    const items = React.Children.toArray(children);

    switch (condition) {
        case 'custom':
            return (
                <View style={styles.contentContainer}>
                    {items && items.slice(valueStart, valueEnd)}
                </View>
            );
        default:
            return (
                <View style={styles.contentContainer}>
                    {items && items.slice(valueStart)}
                </View>
            );
    }

}


export const Section = ({ children, variant = 'default' }: { children: React.ReactNode, variant?: Variant }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Section - {variant}</Text>
            {children}{variant === 'compact'}
        </View>
    );
};

export function UserCard({ userData, users, variant = 'default' }: { userData: UserCardProps, users: UsersCardInterface, variant?: Variant }) {
    return (
        <>
            {/* <ProfileCard userData={userData} variant={variant} /> */}
            <ProfileCardList users={users} variant={variant} />
        </>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#e4f4f5',
    },

    scrollView: {
        flex: 1,
    },

    contentContainer: {
        paddingTop: 20,
        paddingBottom: 20,
    },

    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },

    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
        overflow: 'hidden',
    },

    avatarSmall: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
        overflow: 'hidden',
        borderColor: 'blue',
    },

    card: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 16,
        borderRadius: 10,
        boxShadow: '#000 0px 2px 4px',
        height: "auto",
        alignSelf: 'flex-start',
    },

    compactCard: {
        height: 100,
        borderColor: 'blue',
        borderWidth: 1,
    },

    userInfo: {
        flex: 1,
        flexWrap: 'wrap',
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },

    job: {
        fontSize: 14,
        color: '#666',
    },

    rating: {
        fontSize: 14,
        color: '#666',
    },

    contact: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 16,
    },

    contactItem: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },

    button: {
        marginTop: 16,
        alignSelf: 'center',
        backgroundColor: '#007AFF',
        textAlign: 'center',
        color: '#fff',
        padding: 8,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
        alignSelf: 'flex-start',
    },

    section: {
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
});
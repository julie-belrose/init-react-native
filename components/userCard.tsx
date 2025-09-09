import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type Variant = 'detailed' | 'compact';

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


function Header({ userData, variant = 'detailed' }: { userData: UserCardProps, variant?: Variant }) {
    return (
        <View style={styles.header}>
            <View>
                <Image
                    source={{ uri: userData.avatar }}
                    style={variant === 'compact' ? styles.avatarCompact : styles.avatar} />
                <Text style={styles.name}>{userData.name}</Text>
                <Text style={styles.job}>{userData.job}</Text>
                <Text style={styles.rating}>{userData.rating}</Text>
            </View>
        </View>
    );
}

function Contact({ userData }: { userData: UserCardProps }) {
    return (
        <View>
            <Text style={styles.contactItem}>{userData.email}</Text>
            <Text style={styles.contactItem}>{userData.phone}</Text>
        </View>
    );
}

// - Accepte des props `user` et`variant`
//     - Deux modes d'affichage selon la prop `variant` :
//         - `"detailed"` : carte complète(par défaut)
//             - `"compact"` : carte réduite

export function Button({ title, onPress }: { title: string, onPress: () => void }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

export function UserCardList({ users }: { users: UsersCardInterface }) {
    return (
        <View>
            {users.users.map((user) => (
                <UserCard key={user.id} userData={user} />
            ))}
        </View>
    );
}

export function ProfileCard({ userData, variant = 'detailed' }: { userData: UserCardProps, variant?: Variant }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.card, variant === 'compact' && styles.compactCard]}>
                <Header userData={userData} />
                <View style={styles.contact}>
                    <Contact userData={userData} />
                </View>
            </View>
        </SafeAreaView>
    );

}

export function DisplayContent({ children, condition, valueStart = 0, valueEnd = 0 }: { children: React.ReactNode, condition: 'custom', valueStart?: number, valueEnd?: number }) {
    //2. Utilisez `users.slice(0, 2).map()` pour les 2 premiers utilisateurs //slice Start
    //3. Utilisez `users.slice(2).map()` pour les utilisateurs restants //SliceEnd

    const items = React.Children.toArray(children);

    switch (condition) {
        case 'custom':
            return (
                <View>
                    {items && items.slice(valueStart, valueEnd)}
                </View>
            );
        default:
            return (
                <View>
                    {items && items.slice(valueStart)}
                </View>
            );
    }

}


const Section = ({ children, variant = 'detailed' }: { children: React.ReactNode, variant?: Variant }) => {
    return (
        <View>
            {children}{variant === 'compact'}
        </View>
    );
};

export function UserCard({ userData, variant = 'detailed' }: { userData: UserCardProps, variant?: Variant }) {
    return (
        <ProfileCard userData={userData} variant={variant} />
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: 50,
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

    avatarCompact: {
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
});
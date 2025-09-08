import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export interface UserCardProps {
    name: string;
    job: string;
    rating: number;
    email: string;
    phone: string;
    avatar: string;
}

export const userData: UserCardProps = {
    name: "John Doe",
    job: "Développeur React Native",
    rating: 5,
    email: "john@example.com",
    phone: "+33 6 12 34 56 78",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

function Header({ userData }: { userData: UserCardProps }) {
    return (
        <View style={styles.header}>
            <View>
                <Image
                    source={{ uri: userData.avatar }}
                    style={styles.avatar} />
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

export function ProfileCard({ userData }: { userData: UserCardProps }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.card}>
                <Header userData={userData} />
                <View style={styles.contact}>
                    <Contact userData={userData} />
                </View>
            </View>
        </SafeAreaView>
    );

}

export function UserCard({ userData }: { userData: UserCardProps }) {
    return (
        <ProfileCard userData={userData} />
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

    card: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 16,
        borderRadius: 10,
        boxShadow: '#000 0px 2px 4px',
        height: "auto",
        alignSelf: 'flex-start',
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
});
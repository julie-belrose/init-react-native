import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export interface UserCardProps {
    name: string;
    job: string;
    rating: number;
    email: string;
    phone: string;
    avatar: string;
}

const userData: UserCardProps = {
    name: "John Doe",
    job: "Développeur React Native",
    rating: 5,
    email: "john@example.com",
    phone: "+33 6 12 34 56 78",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};


// Header component
function Header({ userData }: { userData: UserCardProps }) {
    return (
        <View style={styles.header}>
            <Image source={{ uri: userData.avatar }} style={styles.avatar} />
            <View>
                <Text>{userData.name}</Text>
                <Text>{userData.job}</Text>
                <View>{userData.rating}</View>
            </View>
        </View>
    );
}
//

// Contact component
function Contact({ userData }: { userData: UserCardProps }) {
    return (
        <View>
            <Text>{userData.email}</Text>
            <Text>{userData.phone}</Text>
        </View>
    );
}

// Main ProfileCard component
//         ### Layout
// - Carte avec fond blanc et ombres légères
// - Coins arrondis
// - Marges extérieures
// - Padding interne
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
    //    **userInfo** :
    //     - Utilisation de l'espace restant
    //     - Gestion du retour à la ligne

    //    **Styles de texte** (name, job, rating) :
    //     - Tailles de police appropriées
    //     - Couleurs
    //     - Marges

    //    **contact** :
    //     - Bordure supérieure
    //     - Padding supérieur

    //    **contactItem** :
    //     - Taille de police
    //     - Couleur
    //     - Marge inférieure

});
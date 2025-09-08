import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export interface userCard {
    name: string;
    job: string;
    rating: number;
    email: string;
    phone: string;
    avatar: string;
}

const userData: userCard = {
    name: "John Doe",
    job: "Développeur React Native",
    rating: 5,
    email: "john@example.com",
    phone: "+33 6 12 34 56 78",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};


// Header component
function Header({ userData }: { userData: userCard }) {
    return (
        <View style={{ /* layout row */ }}>
            <Image source={{ uri: userData.avatar }} style={{ /* profil */ }} />
            <View>
                <Text>{userData.name}</Text>
                <Text>{userData.job}</Text>
                <View>{userData.rating}</View>
            </View>
        </View>
    );
}

// Contact component
function Contact({ userData }: { userData: userCard }) {
    return (
        <View>
            <Text>{userData.email}</Text>
            <Text>{userData.phone}</Text>
        </View>
    );
}

// Main ProfileCard component
export function ProfileCard() {

}

export function userCard({ userData }: { userData: userCard }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
            </View>
        </SafeAreaView>

        // 1. **Section header** : Photo de profil + informations utilisateur
        //     - Photo de profil circulaire
        //     - Nom complet
        //     - Intitulé du poste
        //     - Note sous forme d'étoiles

        // 2. **Section contact** : Informations de contact
        //     - Adresse email
        //     - Numéro de téléphone

        //         ### Layout
        // - Carte avec fond blanc et ombres légères
        // - Coins arrondis
        // - Marges extérieures
        // - Padding interne

        // ### Header
        // - Photo et informations côte à côte
        // - Photo de profil circulaire (80x80 pixels)
        // - Informations alignées verticalement à droite de la photo

        // ### Section contact
        // - Séparée du header par une ligne horizontale
        // - Informations de contact listées verticalement


    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: 50,
    },
    //     **card** :
    //     - Fond blanc
    //     - Padding de 20px
    //     - Marge de 16px
    //     - Coins arrondis (borderRadius: 10)
    //     - Ombres (shadowColor, shadowOffset, shadowOpacity, shadowRadius, elevation)

    //    **header** :
    //     - Direction flex en ligne (row)
    //     - Alignement des éléments
    //     - Marge inférieure

    //    **avatar** :
    //     - Dimensions : 80x80 pixels
    //     - Bordure circulaire (borderRadius: 40)
    //     - Marge droite
    //     - Prévention du rétrécissement

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
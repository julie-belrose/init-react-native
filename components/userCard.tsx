import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function userCard() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <Text>Mon titre</Text>
                <Text>Contenu de l'app</Text>
            </View>
        </SafeAreaView>
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
# Exercice React Native : Carte de Profil Utilisateur

## Objectif

Créer un composant de carte utilisateur en React Native en utilisant les composants de base `View`, `Text`, `Image` et les propriétés de style Flexbox.

## Rendu attendu

Votre carte doit afficher :

1. **Section header** : Photo de profil + informations utilisateur
    - Photo de profil circulaire
    - Nom complet
    - Intitulé du poste
    - Note sous forme d'étoiles

2. **Section contact** : Informations de contact
    - Adresse email
    - Numéro de téléphone

## Spécifications visuelles

### Layout
- Carte avec fond blanc et ombres légères
- Coins arrondis
- Marges extérieures
- Padding interne

### Header
- Photo et informations côte à côte
- Photo de profil circulaire (80x80 pixels)
- Informations alignées verticalement à droite de la photo

### Section contact
- Séparée du header par une ligne horizontale
- Informations de contact listées verticalement

### Données à utiliser
- **Nom** : John Doe
- **Poste** : Développeur React Native
- **Note** : 5 étoiles
- **Email** : john@example.com
- **Téléphone** : +33 6 12 34 56 78
- **Photo** : https://randomuser.me/api/portraits/men/1.jpg

## Instructions

### Étape 1 : Création du composant de base

1. Créez un nouveau fichier `UserCard.js`
2. Importez les composants nécessaires depuis `react-native`
3. Créez la fonction composant `UserCard`
4. Exportez le composant par défaut

### Étape 2 : Structure du layout

1. Créez la `View` principale avec le style `card`
2. Ajoutez la section `header` contenant :
    - L'image de profil
    - Les informations utilisateur dans une `View` séparée
3. Ajoutez la section `contact` pour les informations de contact

### Étape 3 : Intégration de l'image

1. Utilisez le composant `Image` avec une source URL
2. Appliquez les styles pour rendre l'image circulaire
3. Définissez des dimensions fixes (largeur et hauteur)

### Étape 4 : Styling avec StyleSheet

1. Créez un objet `StyleSheet` avec `StyleSheet.create()`
2. Définissez les styles suivants :

   **card** :
    - Fond blanc
    - Padding de 20px
    - Marge de 16px
    - Coins arrondis (borderRadius: 10)
    - Ombres (shadowColor, shadowOffset, shadowOpacity, shadowRadius, elevation)

   **header** :
    - Direction flex en ligne (row)
    - Alignement des éléments
    - Marge inférieure

   **avatar** :
    - Dimensions : 80x80 pixels
    - Bordure circulaire (borderRadius: 40)
    - Marge droite
    - Prévention du rétrécissement

   **userInfo** :
    - Utilisation de l'espace restant
    - Gestion du retour à la ligne

   **Styles de texte** (name, job, rating) :
    - Tailles de police appropriées
    - Couleurs
    - Marges

   **contact** :
    - Bordure supérieure
    - Padding supérieur

   **contactItem** :
    - Taille de police
    - Couleur
    - Marge inférieure

### Étape 5 : Gestion du responsive

1. Assurez-vous que le texte s'adapte à différentes longueurs
2. Gérez le retour à la ligne automatique
3. Empêchez l'image de se déformer

## Points d'attention

- **Flexbox** : Utilisez `flexDirection: 'row'` pour la section header
- **Responsive** : Pensez aux textes longs qui pourraient déborder
- **Image** : N'oubliez pas de spécifier des dimensions pour les images avec URL
- **Accessibilité** : Gardez des contrastes de couleurs suffisants

## Extensions possibles (Bonus)

Une fois l'exercice de base terminé, vous pouvez :

1. Ajouter un bouton "Contacter" sous les informations de contact
2. Rendre les données dynamiques via des props
3. Créer plusieurs variantes de cartes (compacte, détaillée)
4. Ajouter des animations au toucher

## Aide

Si vous rencontrez des difficultés :

1. Vérifiez que tous les imports sont corrects
2. Assurez-vous que les dimensions de l'image sont spécifiées
3. Utilisez `flex: 1` pour les éléments qui doivent s'étendre
4. N'oubliez pas `flexWrap: 'wrap'` pour la gestion du texte long

Bonne découverte de React Native !

--- 

# Exercice React Native : Application de Gestion d'Équipe

## Objectif

Étendre l'exercice précédent de carte utilisateur pour créer une application complète de gestion d'équipe avec plusieurs types d'affichage, navigation scrollable et gestion de données multiples.

## Prérequis

- Exercice précédent "Carte de Profil Utilisateur" terminé
- Compréhension des props React
- Notions de base des listes et du mapping en JavaScript
- Connaissance des composants `ScrollView`, `SafeAreaView` et `TouchableOpacity`

## Rendu attendu

Votre application doit présenter :

1. **Écran principal avec SafeAreaView** pour la gestion des zones sûres
2. **ScrollView** pour navigation verticale dans le contenu
3. **Titre principal** de l'application
4. **Deux sections distinctes** :
   - Section "Profils détaillés" : cartes complètes pour les 2 premiers utilisateurs
   - Section "Autres membres" : cartes compactes pour les utilisateurs restants
5. **Deux variantes de cartes** :
   - **Carte détaillée** : version complète avec bouton d'action
   - **Carte compacte** : version réduite en ligne

## Nouvelles fonctionnalités à implémenter

### Gestion des données
- Tableau d'utilisateurs avec 4 profils minimum
- Chaque utilisateur doit contenir : id, nom, poste, évaluation, email, téléphone, avatar

### Composant UserCard réutilisable
- Accepte des props `user` et `variant`
- Deux modes d'affichage selon la prop `variant` :
  - `"detailed"` : carte complète (par défaut)
  - `"compact"` : carte réduite

### Interface responsive
- Gestion des zones sûres avec SafeAreaView
- Défilement fluide avec ScrollView
- Espacement approprié entre les éléments

## Spécifications techniques

### Structure des données
Créez un tableau `users` contenant au minimum :
```javascript
  const users = [
    {
      id: 1,
      name: 'John Doe',
      job: 'Développeur React Native',
      rating: '⭐⭐⭐⭐⭐',
      email: 'john@example.com',
      phone: '+33 6 12 34 56 78',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      name: 'Sarah Connor',
      job: 'Designer UX/UI',
      rating: '⭐⭐⭐⭐⭐',
      email: 'sarah@example.com',
      phone: '+33 6 87 65 43 21',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      job: 'Chef de projet',
      rating: '⭐⭐⭐⭐',
      email: 'mike@example.com',
      phone: '+33 6 11 22 33 44',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      id: 4,
      name: 'Emma Watson',
      job: 'Développeuse Backend',
      rating: '⭐⭐⭐⭐⭐',
      email: 'emma@example.com',
      phone: '+33 6 55 66 77 88',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
    }
  ];
```

### Variante de carte détaillée
- Reprend exactement la structure de l'exercice précédent
- Ajoute un bouton "Contacter" sous les informations de contact
- Bouton avec fond bleu et texte blanc

### Variante de carte compacte
Nouvelle mise en page horizontale :
- Photo de profil plus petite (50x50 pixels)
- Nom et poste affichés verticalement à droite de la photo
- Bouton d'action circulaire à droite (icône de conversation)
- Hauteur réduite avec padding minimal

## Instructions étape par étape

### Étape 1 : Préparation de la structure

1. Partez de votre exercice précédent
2. Transformez le composant principal en `App` component
3. Transformez votre carte en composant `UserCard` réutilisable
4. Créez le tableau de données `users`

### Étape 2 : Refactoring du composant UserCard

1. Modifiez `UserCard` pour accepter des props :
   - `user` : objet contenant les données utilisateur
   - `variant` : chaîne définissant le type d'affichage
2. Implémentez la logique conditionnelle avec `if (variant === 'compact')`
3. Déplacez les données statiques vers l'utilisation des props

### Étape 3 : Création de la variante compacte

1. Créez une nouvelle structure de carte avec `flexDirection: 'row'`
2. Réduisez les dimensions de l'avatar (50x50)
3. Simplifiez les informations affichées (nom et poste seulement)
4. Ajoutez un bouton circulaire avec icône

### Étape 4 : Mise en place de l'interface principale

1. Intégrez `SafeAreaView` comme conteneur principal
2. Ajoutez `ScrollView` avec les props appropriées :
   - `contentContainerStyle` pour le padding
   - `showsVerticalScrollIndicator` pour la visibilité
3. Créez le titre principal de l'application

### Étape 5 : Sections et affichage conditionnel

1. Créez deux sections avec titres :
   - "Profils détaillés" pour les cartes complètes
   - "Autres membres" pour les cartes compactes
2. Utilisez `users.slice(0, 2).map()` pour les 2 premiers utilisateurs
3. Utilisez `users.slice(2).map()` pour les utilisateurs restants
4. Appliquez les bonnes props `variant` à chaque carte

### Étape 6 : Styling avancé

1. **SafeAreaView et ScrollView** :
   - `safeArea` : flex: 1, backgroundColor
   - `scrollView` : flex: 1
   - `contentContainer` : paddingTop, paddingBottom

2. **Titres et sections** :
   - `title` : titre principal centré, grande taille
   - `sectionTitle` : sous-titres alignés à gauche

3. **Carte compacte** :
   - `cardCompact` : layout horizontal, padding réduit
   - `avatarSmall` : dimensions réduites
   - `userInfoCompact` : flex: 1 pour occuper l'espace
   - `buttonSmall` : bouton circulaire avec dimensions fixes

4. **Bouton d'action** :
   - `contactButton` : bouton principal de la carte détaillée
   - Fond bleu, texte blanc, coins arrondis

## Points d'attention

- **Props et réutilisabilité** : Le composant UserCard doit être totalement dynamique
- **Gestion des listes** : Utilisez correctement `map()` avec des `key` uniques
- **SafeAreaView** : Essentiel pour la compatibilité mobile
- **ScrollView performance** : Utilisez `contentContainerStyle` au lieu de `style` pour le padding
- **Responsive design** : Les cartes doivent s'adapter aux différentes largeurs d'écran

## Extensions possibles

Une fois l'exercice terminé, vous pouvez ajouter :

1. **Interactivité** : Fonctions de callback pour les boutons
2. **Filtrage** : Barre de recherche pour filtrer les utilisateurs
3. **Tri** : Options de tri par nom, poste ou évaluation
4. **Animations** : Effets de transition au scroll
5. **Pull-to-refresh** : Rafraîchissement par glissement
6. **États de chargement** : Simulation de chargement des données

## Aide et debugging

Si vous rencontrez des problèmes :

1. **Props non reçues** : Vérifiez la destruction des props dans UserCard
2. **Cartes non affichées** : Contrôlez les clés `key` dans le map
3. **Scroll ne fonctionne pas** : Vérifiez `contentContainerStyle` vs `style`
4. **Layout cassé** : Utilisez des couleurs temporaires pour visualiser les conteneurs
5. **TouchableOpacity non cliquable** : Vérifiez que l'élément n'est pas masqué

Bonne progression vers une application React Native complète !
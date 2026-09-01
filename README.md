# Chloé & Arthur — Site de mariage V3

Site statique **mobile-first**, prévu pour être hébergé gratuitement avec GitHub Pages.

## Contenu
- `index.html` : accueil, illustration des mariés, présentation et programme
- `hebergement.html` : hébergement sur place et solutions à proximité
- `infos-pratiques.html` : adresses, itinéraires, parking, chiens et contacts
- `style.css` : design responsive et palette du faire-part
- `script.js` : menu mobile + lien du questionnaire
- `config.js` : emplacement unique pour le lien du questionnaire
- `assets/couple.png` : image du couple fournie
- `assets/guirlande.png` : image de la guirlande fournie

## IMPORTANT : ajouter le lien du questionnaire
Ouvrir `config.js` et remplacer :

`https://forms.gle/REMPLACER_PAR_VOTRE_LIEN`

par l'adresse réelle de votre formulaire.

Le bouton "Répondre au questionnaire" de chacune des 3 pages utilisera automatiquement ce lien.

## Mise en ligne avec GitHub Pages
1. Créer un repository GitHub.
2. Mettre **tous** les fichiers et le dossier `assets` à la racine du repository.
3. Aller dans `Settings` → `Pages`.
4. Dans `Build and deployment`, choisir `Deploy from a branch`.
5. Choisir la branche `main` et le dossier `/ (root)`.
6. Enregistrer.
7. GitHub donnera une adresse du type `https://VOTRE-COMPTE.github.io/NOM-DU-REPO/`.

## Police Worstveld Sting
Le CSS demande `Worstveld Sting` en priorité. Si cette police n'est pas installée sur le téléphone/ordinateur du visiteur, le site utilise automatiquement une police de remplacement élégante.

Pour avoir exactement Worstveld Sting sur tous les téléphones, il faut disposer du fichier de police web (`.woff` ou `.woff2`) et l'ajouter au dossier du site.

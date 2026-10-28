# Guide — Administration du site (type WordPress)

Le site dispose d'une interface d'administration sur
**https://az-demenagement.be/admin/** qui permet de modifier le contenu sans
toucher au code, comme sur WordPress : formulaires, médiathèque d'images,
bouton Enregistrer. Chaque sauvegarde **republie automatiquement le site en
1 à 2 minutes**.

## Ce qui est modifiable dans l'admin

| Écran | Contenu |
| --- | --- |
| **Réglages** | Téléphone, e-mail, adresse, TVA, horaires, lien du formulaire de devis |
| **Page d'accueil** | Titre et sous-titre du bandeau, points forts, photos du bandeau et de la section Boutique |
| **Services** | La liste des services (titres, descriptions, ordre, icônes) du menu et de la page Services |
| **FAQ** | Toutes les questions/réponses (accueil + international) |
| **Boutique** | Les 16 produits : noms, prix TVAC, photos, descriptions, caractéristiques, catégories |

Les images téléversées sont **automatiquement converties en WebP et
redimensionnées** (max 1600 px) — pas besoin de les préparer.

## Mise en service (une seule fois, ~20 minutes)

### 1. Créer le dépôt GitHub
1. Créez un compte gratuit sur https://github.com (ou utilisez l'existant).
2. Créez un dépôt **privé** nommé `az-demenagement`.
3. Depuis le dossier du projet, poussez le code :
   ```bash
   git remote add origin https://github.com/VOTRE-COMPTE/az-demenagement.git
   git push -u origin main
   ```
4. Dans [public/admin/config.yml](public/admin/config.yml), remplacez
   `VOTRE-COMPTE-GITHUB/az-demenagement` par le vrai chemin (ex.
   `azsolutions/az-demenagement`), puis commitez/poussez.

### 2. Configurer le déploiement automatique (FTP Infomaniak)
Dans GitHub : votre dépôt → **Settings → Secrets and variables → Actions →
New repository secret**. Créez ces 4 secrets (valeurs dans votre manager
Infomaniak, rubrique FTP) :

| Nom | Valeur |
| --- | --- |
| `FTP_SERVER` | l'hôte FTP (ex. `xxxxx.ftp.infomaniak.com`) |
| `FTP_USERNAME` | l'identifiant FTP |
| `FTP_PASSWORD` | le mot de passe FTP |
| `FTP_DIR` | le dossier web, ex. `/web/` (celui où se trouve `index.html`) |

Dès que c'est fait, chaque modification (admin ou code) déclenche
automatiquement : construction du site → contrôle qualité → envoi FTP.
Suivi visible dans l'onglet **Actions** du dépôt.

### 3. Donner l'accès au client
1. Le client crée un compte GitHub gratuit (ou vous l'ajoutez comme
   collaborateur du dépôt : Settings → Collaborators).
2. Il ouvre **https://az-demenagement.be/admin/** → « Sign in with Token ».
3. La fenêtre propose un lien qui pré-remplit la création du jeton GitHub
   (permission « Contents : Read and write » sur le dépôt). Il génère le
   jeton, le colle, c'est mémorisé dans son navigateur.
4. Il modifie, clique **Enregistrer** — le site est à jour 2 minutes plus tard.

## Au quotidien (côté client)

1. Ouvrir `az-demenagement.be/admin/`
2. Choisir l'écran (Boutique, FAQ, Réglages…)
3. Modifier, téléverser des photos si besoin (glisser-déposer)
4. **Enregistrer** → publication automatique

## Limites actuelles (extensibles sur demande)

- Les textes longs des pages services (Bruxelles, Belgique, etc.) et les
  pages légales se modifient encore dans le code — extensible au besoin.
- La création d'une **nouvelle page** reste du développement.
- Ne pas modifier les « identifiants techniques » (slug, id) sans raison :
  ils relient les contenus entre eux.

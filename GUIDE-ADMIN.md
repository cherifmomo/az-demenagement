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

### 3. Activer la fenêtre identifiant + mot de passe (type wp-admin)

L'accès à `/admin/` est protégé par une vraie fenêtre de connexion
(identifiant + mot de passe), gérée par le serveur Infomaniak.

1. **Trouver le chemin du site sur le serveur** : ouvrez une fois
   `https://az-demenagement.be/chemin.php` — la page affiche le chemin
   (ex. `/home/clients/xxxxxxxx/sites/az-demenagement.be`).
2. Dans [public/admin/.htaccess](public/admin/.htaccess), remplacez
   `CHEMIN_ABSOLU_DU_SITE` par ce chemin.
3. **Définir l'identifiant et le mot de passe** (depuis le dossier du
   projet, sur votre Mac — choisissez un mot de passe neuf) :
   ```bash
   htpasswd -bBc public/admin/.htpasswd admin 'VotreMotDePasseIci'
   ```
   (remplacez `admin` et le mot de passe par ce que vous voulez ;
   relancez la même commande pour changer le mot de passe plus tard)
4. Supprimez `public/chemin.php` du projet et du serveur.
5. Commitez/poussez (ou redéployez le zip) : la fenêtre de connexion
   apparaît désormais à l'ouverture de `/admin/`.

### 4. Connecter l'admin au dépôt (une fois par navigateur, par vous)
Dernière étape technique, à faire **par vous, une seule fois sur chaque
navigateur du client** (le client n'a pas à s'en occuper) :

1. Sur l'ordinateur du client, ouvrez `az-demenagement.be/admin/` et
   entrez l'identifiant/mot de passe définis à l'étape 3.
2. L'écran « Sign in with Token » s'affiche : cliquez le lien proposé
   (création du jeton GitHub pré-remplie, permission « Contents : Read
   and write » sur le dépôt), générez le jeton, collez-le.
3. C'est mémorisé dans ce navigateur : le client ne reverra plus cet
   écran. Gardez le jeton en lieu sûr pour un éventuel nouveau PC.

## Au quotidien (côté client)

1. Ouvrir `az-demenagement.be/admin/`
2. Entrer l'**identifiant** et le **mot de passe** (le navigateur propose
   de les enregistrer — ensuite c'est automatique)
3. Choisir l'écran (Boutique, FAQ, Réglages…)
4. Modifier, téléverser des photos si besoin (glisser-déposer)
5. **Enregistrer** → publication automatique en 1-2 minutes

## Limites actuelles (extensibles sur demande)

- Les textes longs des pages services (Bruxelles, Belgique, etc.) et les
  pages légales se modifient encore dans le code — extensible au besoin.
- La création d'une **nouvelle page** reste du développement.
- Ne pas modifier les « identifiants techniques » (slug, id) sans raison :
  ils relient les contenus entre eux.

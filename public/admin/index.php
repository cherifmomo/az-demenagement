<?php
// ============================================================
// Administration du site — page de connexion + interface CMS.
// Identifiant et mot de passe : fichier .env de ce dossier
// (modifiable en clair via FileZilla).
// ============================================================

session_name('AZADMIN');
session_set_cookie_params([
  'httponly' => true,
  'samesite' => 'Lax',
  'secure'   => !empty($_SERVER['HTTPS']),
  'path'     => '/admin/',
]);
session_start();

// --- Lecture des identifiants depuis .env ---
function lire_env(string $fichier): array {
  $valeurs = ['ADMIN_USER' => '', 'ADMIN_PASS' => '', 'GITHUB_TOKEN' => ''];
  if (!is_readable($fichier)) return $valeurs;
  foreach (file($fichier, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $ligne) {
    $ligne = trim($ligne);
    if ($ligne === '' || str_starts_with($ligne, '#')) continue;
    [$cle, $val] = array_pad(explode('=', $ligne, 2), 2, '');
    $valeurs[trim($cle)] = trim($val);
  }
  return $valeurs;
}

$env = lire_env(__DIR__ . '/.env');
$erreur = '';

// --- Déconnexion ---
if (isset($_GET['logout'])) {
  session_destroy();
  header('Location: /admin/');
  exit;
}

// --- Tentative de connexion ---
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $u = $_POST['identifiant'] ?? '';
  $p = $_POST['motdepasse'] ?? '';
  // Petit frein anti-essais en rafale
  sleep(1);
  if ($env['ADMIN_USER'] !== '' && $env['ADMIN_PASS'] !== ''
      && hash_equals($env['ADMIN_USER'], $u)
      && hash_equals($env['ADMIN_PASS'], $p)) {
    session_regenerate_id(true);
    $_SESSION['connecte'] = true;
    header('Location: /admin/');
    exit;
  }
  $erreur = 'Identifiant ou mot de passe incorrect.';
}

$connecte = !empty($_SESSION['connecte']);
header('X-Robots-Tag: noindex, nofollow');
?>
<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Administration — AZ Déménagement</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<?php if (!$connecte): ?>
  <style>
    :root { --navy: #132b50; --navy-d: #0d1f3c; --amber: #f59e0b; --line: #dde5f0; }
    * { box-sizing: border-box; }
    body {
      margin: 0; min-height: 100vh; display: grid; place-items: center;
      font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
      background: linear-gradient(160deg, var(--navy-d), var(--navy) 60%, #1a3a6b);
    }
    .boite {
      width: min(94vw, 400px); background: #fff; border-radius: 16px;
      padding: 2.2rem 2rem; box-shadow: 0 24px 60px -12px rgb(0 0 0 / .45);
    }
    .logo { display: flex; justify-content: center; margin-bottom: 1.2rem; }
    h1 { font-size: 1.25rem; text-align: center; color: var(--navy); margin: 0 0 1.4rem; }
    label { display: block; font-weight: 600; font-size: .92rem; color: #2b3440; margin: 0 0 .3rem; }
    input {
      width: 100%; padding: .75rem .9rem; margin-bottom: 1rem;
      border: 1.5px solid var(--line); border-radius: 10px; font-size: 1rem;
    }
    input:focus { outline: none; border-color: #1d4ed8; box-shadow: 0 0 0 3px rgb(29 78 216 / .15); }
    button {
      width: 100%; padding: .85rem; border: 0; border-radius: 999px;
      background: var(--amber); color: var(--navy-d); font-size: 1.02rem; font-weight: 700;
      cursor: pointer;
    }
    button:hover { background: #d97706; }
    .erreur {
      background: #fef2f2; border: 1px solid #f5c6c6; color: #b91c1c;
      border-radius: 10px; padding: .7rem .9rem; font-size: .92rem; margin-bottom: 1rem;
    }
    .retour { text-align: center; margin-top: 1.1rem; font-size: .88rem; }
    .retour a { color: #64748b; }
  </style>
</head>
<body>
  <main class="boite">
    <div class="logo">
      <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#1d4ed8"/><stop offset="1" stop-color="#132b50"/>
        </linearGradient></defs>
        <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#g)"/>
        <text x="32" y="41" text-anchor="middle" font-family="Arial Black,Arial" font-weight="900" font-size="27" fill="#fff">AZ</text>
        <path d="M15 51h26" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
        <path d="M41 51l-5-4M41 51l-5 4" stroke="#f59e0b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <h1>Administration du site</h1>
    <?php if ($erreur): ?><p class="erreur"><?= htmlspecialchars($erreur) ?></p><?php endif; ?>
    <form method="post" action="/admin/">
      <label for="identifiant">Identifiant</label>
      <input type="text" id="identifiant" name="identifiant" autocomplete="username" required autofocus />
      <label for="motdepasse">Mot de passe</label>
      <input type="password" id="motdepasse" name="motdepasse" autocomplete="current-password" required />
      <button type="submit">Se connecter</button>
    </form>
    <p class="retour"><a href="/">← Retour au site</a></p>
  </main>
  <script>
    // Hors session : aucun jeton ne doit rester dans ce navigateur
    try { localStorage.removeItem('sveltia-cms.user'); } catch (e) {}
    // Nettoie l'adresse résiduelle du CMS (#/collections/…)
    try { if (location.hash) history.replaceState(null, '', '/admin/'); } catch (e) {}
  </script>
</body>
</html>
<?php else: ?>
  <style>
    .barre-admin {
      position: fixed; top: 0; right: 0; z-index: 99999;
      font: 600 12px system-ui, sans-serif;
    }
    .barre-admin a {
      display: inline-block; background: #132b50; color: #fff;
      padding: 6px 12px; border-radius: 0 0 0 10px; text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="barre-admin"><a href="/admin/?logout">Se déconnecter</a></div>
  <!-- Connexion GitHub automatique : le jeton (GITHUB_TOKEN du fichier .env,
       jamais exposé tant qu'on n'est pas connecté) est injecté dans le
       stockage du CMS. Le client ne voit jamais d'écran GitHub. -->
  <script>
    try {
      var jeton = <?= json_encode($env['GITHUB_TOKEN']) ?>;
      if (jeton) {
        var actuel = null;
        try { actuel = JSON.parse(localStorage.getItem('sveltia-cms.user') || 'null'); } catch (e) {}
        if (!actuel || actuel.token !== jeton) {
          localStorage.setItem('sveltia-cms.user', JSON.stringify({ backendName: 'github', token: jeton }));
        }
      }
    } catch (e) {}
  </script>
  <!-- Sveltia CMS : interface d'administration du contenu -->
  <script src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js"></script>
</body>
</html>
<?php endif; ?>

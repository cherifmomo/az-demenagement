<?php
// Fichier temporaire : affiche le chemin absolu du site sur le serveur,
// nécessaire pour configurer la protection de l'administration.
// À SUPPRIMER du serveur une fois la configuration terminée.
header('Content-Type: text/plain; charset=utf-8');
echo "Chemin absolu du site sur le serveur :\n\n";
echo __DIR__ . "\n\n";
echo "→ Dans public/admin/.htaccess, remplacez CHEMIN_ABSOLU_DU_SITE par ce chemin.\n";
echo "→ Puis supprimez ce fichier (chemin.php) du serveur et du projet.\n";

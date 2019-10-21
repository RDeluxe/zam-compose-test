# zam-compose-test

Possibilités:

- Chaque API a un docker-compose.yml permettant de lancer la/les bases de données nécessaires (comment récupérer les migrations qui sont sur un autre repo ?). Ce docker-compose comprend l'api et ses db
- Chaque API a un dossier "tests" comprenant les fichiers yml de tests
- Le service de CI/CD va clone l'api à tester, lancer son docker-compose (`docker-compose up`) puis lancer venom `venom run --env API_URL=localhost API_PORT=3000 /api/tests/*` (si l'api se trouve dans le dossier "api")

Cette possibilité sous-entend que le servide de CI/CD a Venom de pré-installé (on a aussi une image docker de disponible dans venom/Dockerfile)

Pour charger les migrations de la DB on peut utiliser l'executor venom pour ça => https://github.com/ovh/venom/tree/master/executors/dbfixtures

_Note_ les variables d'env de venom n'ont pas l'air de fonctionner (sous windows)
_Note_ pas de doc pour le body d'une requête POST dans venom. Le mieux serait de stocker les json de request et response dans le dossier /tests de chaque API pour que ça soit plus maintenable


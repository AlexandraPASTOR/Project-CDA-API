# 🤖 API Blagues – Carambar & Co 🎉

Mini API REST conçue dans le cadre d’un **projet de sélection | CDA** , permettant de gérer une liste de blagues façon “Carambar”, avec un backend en **Node.js**, **Express**, **Sequelize** et **SQLite**.

---

## 🧠 Objectifs du projet

- Démontrer la maîtrise de la stack Node.js/Express avec base SQLite
- Créer une API versionnée et documentée
- Renvoyer des blagues aléatoires ou ciblées via des endpoints REST
- Déployer le backend sur Render.com et le frontend (React) sur GitHub Pages

---

## ⚙️ Stack technique

- **Node.js** – Environnement d’exécution JavaScript
- **Express** – Framework minimaliste pour créer le serveur
- **Sequelize** – ORM pour faciliter les requêtes SQL
- **SQLite** – Base de données légère, locale
- **TypeScript** – Pour le typage et la robustesse
- **Swagger** – Pour la documentation interactive de l’API
- **Dotenv** – Pour sécuriser les variables d’environnement

---

## 🔌 Endpoints disponibles

| Méthode | URL                | Description                      |
|---------|--------------------|----------------------------------|
| GET     | `/jokes`           | Récupère toutes les blagues      |
| GET     | `/jokes/:id`       | Récupère une blague par son ID   |
| GET     | `/jokes/random`    | Récupère une blague aléatoire    |
| POST    | `/jokes`           | Ajoute une nouvelle blague       |

---

## 🧪 Lancer le projet en local

1. **Cloner le Repo**  
git clone https://github.com/AlexandraPASTOR/Project-CDA-API

2. **Installer les dépendances**  
npm install

3. **Configurer le .env**  
SQLITE_STORAGE=./database/db.sqlite
PORT=3000

4. **Lancer le serveur**  
npx ts-node src/app.ts

5. **Tester la base**(optionnel)  
npx ts-node testDb.ts

---

## 🚀 Déploiement  

🔹 Backend déployé sur Render.com : https://project-cda-api.onrender.com

🔹 Frontend React disponible sur GitHub Pages

---

## ✨ À propos

Développé par Alexandra Pastor

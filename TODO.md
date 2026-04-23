# TODO - Déploiement Render (approuvé)

## ✅ Étapes terminées
- [x] Scan projet
- [x] Plan déploiement confirmé

## 🔄 En cours
1. [x] Modifier `render.yaml` (startCommand + vars DB_*)
2. [x] Modifier `src/config/database.js` (supprimer localhost fallback + log debug)
3. [x] Créer `.env.example`
4. [x] Push Git → Render redeploy (logs reçus)
5. [x] **CORRIGÉ** `startCommand` pointait vers `server.js` inexistant à la racine → corrigé en `node src/server.js`
6. [ ] **CRITIQUE** Ajouter vars DB_* sur Render Dashboard → https://dashboard.render.com → foot-server-api → Environment
7. [ ] Push Git → Render redeploy
8. [ ] Test `/api/health`

## ⏳ Après
- Supprimer logs debug
- Créer migrations pour prod

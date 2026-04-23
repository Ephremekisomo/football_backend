# TODO - Déploiement Render (approuvé)

## ✅ Étapes terminées
- [x] Scan projet
- [x] Plan déploiement confirmé

## 🔄 En cours
1. [x] Modifier `render.yaml` (startCommand + vars DB_*)
2. [x] Modifier `src/config/database.js` (supprimer localhost fallback + log debug)
3. [x] Créer `.env.example`
4. [ ] Push Git → Render redeploy
5. [ ] Ajouter vars DB_* sur Render Dashboard (Railway MySQL)
6. [ ] Test `/api/health`

## ⏳ Après
- Supprimer logs debug
- Créer migrations pour prod

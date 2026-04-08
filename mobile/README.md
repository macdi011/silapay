# SilaPay Mobile - Frontend React Native

Application mobile pour scanner les QR codes et valider les transactions SilaPay.

## Technologies utilisées
- **React Native** (Expo)
- **Axios** (Communication API)
- **Expo Barcode Scanner** (Scan de QR codes)

## Installation

1. Accédez au dossier mobile :
   ```bash
   cd mobile
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Configurez l'adresse IP de votre backend :
   Ouvrez `src/services/api.js` et modifiez `API_URL` par l'adresse IP locale de votre ordinateur (ex: `http://192.168.1.50:5000/api`).

4. Lancez l'application :
   ```bash
   npm start
   ```

5. Utilisez l'application Expo Go sur votre smartphone pour scanner le QR code affiché dans le terminal.

## Structure du projet
- `src/components/` : Composants UI réutilisables (Button, Card, Navbar).
- `src/screens/` : Écrans principaux (Dashboard, ScanQR).
- `src/services/` : Services pour les appels API (Axios).
- `src/styles/` : Fichiers de style.

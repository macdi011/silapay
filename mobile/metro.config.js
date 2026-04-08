const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ce paramètre peut aider à résoudre les problèmes d'externals sur Windows avec certaines versions de Node
config.resolver.unstable_enablePackageExports = true;

module.exports = config;

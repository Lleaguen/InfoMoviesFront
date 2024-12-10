// mocha.config.js
module.exports = {
  require: 'ts-node/register', // Permite ejecutar archivos .ts
  extension: ['ts'], // Extensiones de archivos a compilar
  spec: 'tests/**/*.test.ts', // Ruta de los archivos de prueba
  timeout: 2000, // Umbral de tiempo para los test
  ui: 'bdd', // Estilo de interfaz de Mocha
  colors: true, // Activar colores en la salida
};

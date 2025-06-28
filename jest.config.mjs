
export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '^styled-components$': '<rootDir>/node_modules/styled-components/dist/styled-components.cjs.js',
   
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  transform: {
    // Assegura que o babel-jest seja usado para arquivos JS/JSX
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

};
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|react-navigation|@react-navigation|@react-native-community|@react-native-picker|@react-native-async-storage))"
  ],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
};

module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js'],
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!<rootDir>/src/index.js'
  ],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
};

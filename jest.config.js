/** @type {import('jest').Config} */
module.exports = {
  verbose: false,
  automock: false,
  collectCoverage: false,
  collectCoverageFrom: [
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/**/*.d.ts',
    '<rootDir>/src/**/*.{ts,tsx,js,jsx}',
  ],
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/build'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testURL: 'http://localhost/',
  testEnvironment: 'jsdom',
};

module.exports = {
  verbose: true,
  automock: false,
  collectCoverage: true,
  collectCoverageFrom: [
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/**/*.d.ts',
    '<rootDir>/src/**/*.{ts,tsx,js,jsx}'
  ],
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testURL: 'http://localhost/',
  testEnvironment: 'jsdom'
}

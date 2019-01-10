module.exports = {
  verbose: true,
  automock: false,
  collectCoverage: true,
  collectCoverageFrom: [
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/**/*.d.ts',
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testURL: 'http://localhost/',
  testEnvironment: 'jsdom'
}

module.exports = {
    preset: "ts-jest",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testEnvironment: "node",
    testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!src/**/*.d.ts"],
    coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
    coverageReporters: ["json", "lcov", "text", "clover"],
};
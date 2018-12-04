module.exports = {
    rootDir: '..',
    "testResultsProcessor": "jest-junit",
    "verbose": true,
    "testURL": "http://localhost/",
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    },
    "setupTestFrameworkScriptFile": "<rootDir>/config/scripts/jest/setup.js",
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ],
    "testMatch": [
        "**/src/**/*.test.spec.js"
    ],
    "testPathIgnorePatterns": [
        "/node_modules/",
        "build"
    ]
};

module.exports = {
	testURL: 'http://localhost/',
	globals: {
		usingJSDOM: true,
		usingJest: true,
	},
	rootDir: __dirname,
	transform: {
		'^.+\\.js?$': '<rootDir>/jest.babel.transform.js',
	},
};

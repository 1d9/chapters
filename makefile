dist/index.js: $(wildcard src/**/*.js)
	node_modules/.bin/rollup -c
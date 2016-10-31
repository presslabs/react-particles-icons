dependecies:
	npm install -g yarn
	yarn

tests: dependecies
	npm run eslint

build: tests
	npm run build
	npm run docs

github-pages: dependencies
	ls -lah

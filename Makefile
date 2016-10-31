dependencies:
	npm install

build: dependencies
	npm run build
	npm run docs

github-pages: dependencies
	git add docs
	git commit -m "New version $CI_COMMIT"
	git push origin master

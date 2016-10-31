dependencies:
	npm install

build: dependencies
	npm run build
	npm run docs

github-pages: dependencies
	git config --global user.email "bot@presslabs.com"
	git config --global user.name "Igor Debot"
	git add docs
	echo -n "(autodoc) " > /tmp/COMMIT_MESSAGE ; git log -1 --pretty=%B >> /tmp/COMMIT_MESSAGE ; echo >> /tmp/COMMIT_MESSAGE ; echo "Commited-By: $$CI_BUILD_URL" >> /tmp/COMMIT_MESSAGE
	git commit -F /tmp/COMMIT_MESSAGE
	if [ -n "$(git status --porcelain)" ] ; then git add . ; git status ; git commit -F /tmp/COMMIT_MESSAGE ; git push origin master ; fi

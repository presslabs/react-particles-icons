dependencies:
	npm install

build: dependencies
	npm run build
	npm run docs

github-pages: dependencies
	git config --global user.email "bot@presslabs.com"
	git config --global user.name "Igor Debot"
	git clone https://github.com/Presslabs/react-particles-icons ./react-particles-icons
	cd react-particles-icons/ \
		&& git fetch origin \
		&& git checkout gh-pages \
		&& cp -R ../docs . \
		&& git add docs/ \
		&& echo -n "(autodoc) " > /tmp/COMMIT_MESSAGE ; git log -1 --pretty=%B >> /tmp/COMMIT_MESSAGE ; echo >> /tmp/COMMIT_MESSAGE ; echo "Commited-By: $$CI_BUILD_URL" >> /tmp/COMMIT_MESSAGE \
		&& git commit -F /tmp/COMMIT_MESSAGE \
		&& git remote show origin \
		&& git push -f origin gh-pages

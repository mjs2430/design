.PHONY: saratoga.min.css

saratoga.min.css:
	minify static/css/atoms.css static/css/molecules.css static/css/cards.css static/css/decks.css > $@

release: 
	@[ $(v) ] || ( echo ">> v is not set"; exit 1 )
	sed -E -i .bak 's/([0-9]+\.){2}([0-9]+)/$(v)/' package.json
	git add package.json
	git commit -m "updating package.json to $(v)"
	git push
	git tag $(v)
	git push origin $(v)

live: public
	rm -rf public/*
	hugo
	cd public && git add --all && git commit -m "Publishing to gh-pages" && git push

public:
	rm -rf public
	mkdir public
	git worktree prune
	rm -rf .git/worktree/public/
	git worktree add -B gh-pages public origin/gh-pages

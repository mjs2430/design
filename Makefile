.PHONY: saratoga.min.css

##
# Distribution folder
#

dist/%.css:
	sass static/css/$*/build.scss:$@

dist/saratoga.min.css:
	minify dist/atoms.css dist/molecules.css dist/cards.css dist/decks.css > $@

static/css/atoms.css:
	cat \
		static/css/atoms/typography.css \
		static/css/atoms/media.css \
		static/css/atoms/section.css \
		static/css/atoms/button.css > $@

static/css/molecules.css:
	cat \
		static/css/molecules/paper.css \
		static/css/molecules/package.css \
		static/css/molecules/impact.css \
		static/css/molecules/social-media.css \
		static/css/molecules/expander.css \
		static/css/molecules/utilities.css > $@

static/css/amp.sds.css: static/css/atoms.css static/css/molecules.css
	cat \
		static/css/atoms.css \
		static/css/molecules.css \
		static/css/cards/grid.css \
		static/css/cards/flex-row.css \
		static/css/cards/immersive.css \
		static/css/cards/story-body.css \
		static/css/cards/header.css \
		static/css/cards/series-nav.css \
		static/css/cards/related-stories.css \
		static/css/cards/author-card.css \
		static/css/cards/transparency.css \
		static/css/cards/read-next.css \
		static/css/cards/swg-promo.css > $@

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

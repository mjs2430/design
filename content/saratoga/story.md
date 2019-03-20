---
title: story
description: The main article body
level: deck
sample: /saratoga/sample/story/

---
The primary challenge with the story body is the design rule that media should bleed all the way to the edge of the screen on mobile and tablet devices, but be restricted to a maximum width as the screen gets larger. Additionally, different media or embeddable content will have different widths. 

A container-based approach to these rules requires multiple breakpoints and creates a couple of pressure points as the number of organisms increases. Code grows quickly with each addition, as all breakpoints for each change must be considered or written. Re-use suffers as elements get more and more isolated with deeply nested CSS rules.

To combat these issues, we looked at the story body itself instead of each possible element to determine the design rules. We came up with a small list of general ideas.

+ Text should be centered in the middle and no wider than 720px.
+ Everything except media should have 15px of space on the left and right.
+ Media should be allowed to go to 1140px wide to elevate value.
+ Media and story modules should have 30px of vertical space.
+ Advertising should have 50px of vertical space.
+ Subheads should be 600 weight and Sans Serif.

The last challenge was to tackle the idea that as dynamic content becomes more important to our designs, the structure would need to be able to adopt it without increasing the code base more than necessary. We needed a basic default setup that could be easily overloaded. We settled on a direct child approach, which could provide what we needed in the fewest lines of code.

#### EXAMPLE

This site is made with these rules, so this panel is one example. There is also a [sample story](/saratoga/sample/story/) that has content more representative of our articles. 

#### CSS
```css
.story-body {
  --headerFamily: "McClatchy Sans", sans-serif;
  --headerWeight: 600;
  --headerTransform: uppercase;
}

.story-body > * {
  max-width: 720px;
	padding: 0 15px;
	margin-right: auto;
  margin-left: auto;
}

.story-body > figure {
	max-width: 100%;
	margin: 30px 0;
	padding: 0;
}

.story-body img, .story-body figcaption {
	max-width: 1140px;
	margin: 0 auto;
}

.story-body .story-module {
  padding: 0 15px;
  margin: 30px auto;
}

.story-body .ad {
  margin: 50px auto;
}
```

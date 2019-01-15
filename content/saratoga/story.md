---
title: story
description: The main article body
level: organism
updated: true

---
The primary challenge with the story body is the design rule that media should bleed all the way to the edge of the screen on mobile and tablet devices, but be restricted to a maximum width as the screen gets larger. Additionally, different media or embeddable content will have different widths. 

A container-based approach to these rules requires multiple breakpoints and creates a couple of pressure points as the number of organisms increases. Code grows quickly with each addition, as all breakpoints for each change must be considered or written. Re-use suffers as elements get more and more isolated with deeply nested CSS rules.

To combat these issues, we looked at the story body itself instead of each possible element to determine the design rules. We came up with a small list of general ideas.

1. Text should be centered in the middle and no wider than 720px.
2. Everything except media should have 15px of space on the left and right.
3. Text should have 1em of vertical space.
4. Media should be allowed to go to 1140px wide to elevate value.
4. Media and story modules should have 30px of vertical space.
5. Advertising should have 50px of vertical space.
6. Subheads should be 600 weight and Sans Serif.

The last challenge was to tackle the idea that as dynamic content becomes more important to our designs, the structure would need to be able to adopt it without increasing the code base more than necessary. We needed a basic default setup that could be easily overloaded. We settled on a direct child approach, which could provide what we needed in the fewest lines of code.

#### EXAMPLE

This site is made with these rules, so this panel is one example. There is also a [sample story](/saratoga/sample/) that has content more representative of our articles. 

#### CSS
```css
.story {
  padding: 15px 0 50px;
}

.story > * {
  max-width: 720px;
  padding-left: 15px;
  padding-right: 15px;
	margin-right: auto;
  margin-left: auto;
}

.story > h2, .story > h3, .story > h4, .story > h5, .story > h6 {
  font-weight: 600;
  font-family: "McClatchy Sans";
  text-transform: uppercase;
}

.story > figure {
  max-width: 1140px;
  padding: 0;
  margin: 30px auto;
}

@media (max-width: 1155px) {
  .story > figure figcaption {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.story .story-module {
  padding: 0 15px;
  margin: 30px auto;
}

.story .ad {
  padding: 0;
  margin: 50px auto;
}
```

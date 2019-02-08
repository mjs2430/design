---
title: "header"
description: "An expanded package for article headers."
level: "organism"
---

The `header` organism is based on the standard `package` molecule but increases the space between each direct child and centers the content on the device.

#### EXAMPLE
<header class="header">
  <h6 class="kicker"><a href="#">SECTION</a></h6>
  <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus lorem a</h1>
  <div class="bio">
    <div>
      <p class="byline">By <a href="#">John Doe</a> <span class="credit">SAMPLE NEWSPAPER</span></p>
      <time>AUG 13, 2018, UPDATED 4 MONTHS AGO</time>
    </div>
    {{< social-media >}}
  </div>
</header>

#### HTML
```html
<header class="header">
  <h6 class="kicker"><a href="#">SECTION</a></h6>
  <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus lorem a</h1>
  <div class="bio">
    <div class="package">
      <p class="byline">By <a href="#">John Doe</a> <span class="credit">SAMPLE NEWSPAPER</span></p>
      <time>AUG 13, 2018, UPDATED 4 MONTHS AGO</time>
    </div>
    <div class="social-media">
      ...
    </div>
  </div>
</header>
```

#### CSS 
```css
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
	padding: 30px 15px 15px;
}

.header a {
	color: inherit;
}

.header > * {
	margin: 15px 0 0;
}

.header .bio {
  display: flex;
	flex-direction: column;
	width: 100%;
}

@media (min-width: 500px) {
	.header .bio {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.header .bio > * {
		text-align: left;
	}
}
```

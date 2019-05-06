---
title: "flag"
description: "The top banner of the sites including the search panel and account popout"
menu: cards 
class: new
---

The flag goes at the top of all pages. In keeping with the changes in 1.11.3 raw SVG code is used in place of CSS classes for the icons. The search panel animation is included and can be toggled with a class on the flag itself. The account popout uses our standard expander molecule with a small amount of CSS to set the positioning.

There are a few other enhancements to the style guide to optimize this code.

**`.flex`**

The flex class will simply make an element have default flex row display and center all children. We use this pattern frequently, so splitting it into it's own utility makes sense.

**`.icons`**

Another pattern used frequently is a set of icons spaced 30px apart. This can be done using several package molecules in the HTML, but it can be unpredictable and puts an unnecessary burden on the HTML structure.

**`media breakpoint classes`**

We added very rudimentary utility classes to toggle visibility for three media breakpoints. The approach is mobile first, with classes to toggle display at larger breakpoints. Typically we like to keep these rules isolated to each card to keep structure semantic and safeguard against unintended future breaks, but in larger cards that's not optimal. Check out the top of the [decks.css](/css/decks.css) file for a reference.

#### EXAMPLE

*The flag is included in our [story deck](../decks/story/) and is better represented there.*

#### HTML

The HTML is separate, to a point, for account holders and anonymous readers. There is also a separate bottom navigation and corresponding class on the flag section to make the logo a little larger.

##### User is not logged into an account:

{{< highlight html >}}{{< flag >}}{{< /highlight >}}

##### User is logged in to an account:

{{< highlight html >}}{{< flag type="subscriber" >}}{{< /highlight >}}

##### Homepage, User is logged in to an account

{{< highlight html >}}{{< flag type="subscriber" page="homepage" >}}{{< /highlight >}}

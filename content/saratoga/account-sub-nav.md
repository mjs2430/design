---
title: "account sub nav (DSP)"
description: "The username, entitlements tag, sub nav and sign out molecule at the top of my account pages"
menu: "molecule"
---

The account sub nav molecule is used on the <a href="/saratoga/decks/my-account">my account page.</a> It is comprised of text atoms and the more-link atom and displayed in a flex-box.

##### Example

<div class="dsp">
    <section>
        <div class="account-sub-nav">
            <div>
                <small>unlimited digital access</small>
                <h1 class="serif">John Wick</h1>
                <a href="#" class="nav active">Profile</a>
                <a href="#" class="nav">Subscription</a>
            </div>
            <div>
                <a href="#" class="more-link">sign out</a>
            </div>
        </div>
    </section>
</div>

#### HTML
{{< highlight html >}}
<section>
    <div class="account-sub-nav">
        <div>
            <small>unlimited digital access</small>
            <h1 class="serif">John Wick</h1>
            <a href="#" class="nav active">Profile</a>
            <a href="#" class="nav">Subscription</a>
        </div>
        <div>
            <a href="#" class="more-link">sign out</a>
        </div>
    </div>
</section>
{{< /highlight >}}
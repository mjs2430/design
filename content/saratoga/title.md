---
title: "title (DSP)"
description: "The title molecule that displays on paywalls, purchase flows, confirmation pages, etc."
menu: "molecule"
---

The title displays center aligned on all breakpoints and pages, with the exception of the purchase flow, which is it displayed at 50% width on desktop when wrapped in a section with the class of .purchase flow.

##### Example
<div class="dsp example">
    <section>
         <div class="title">
          <h2 class="sans bold">Sign up</h2>
          <p class="summary">Use your email address or a social account. 
    <br>Already have an account? <a href="#" class="more-link inline">Sign in</a></p>
         </div>
    </section>
</div>

#### HTML
{{< highlight html >}}
    <section>
         <div class="title">
          <h2 class="sans bold">Sign up</h2>
          <p class="summary">Use your email address or a social account. 
          <br>Already have an account? <a href="#" class="more-link inline">Sign in</a>
          </p>
         </div>
    </section>
{{< /highlight >}}
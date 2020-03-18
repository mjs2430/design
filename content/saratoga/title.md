---
title: "title (DSP)"
description: "The title molecule that displays on paywalls, purchase flows, confirmation pages, etc."
menu: "molecule"
---

The title displays center aligned on all breakpoints and pages, with the exception of the purchase flow, where it is only displayed over the left half of the grid on larger breakpoints. For the purchase flow, make sure to wrap the div class='package small' within a container of div class='grid'

##### Example
<div class="dsp example">
    <section>
         <div class="package small">
          <h2 class="sans bold">Sign up</h2>
          <p class="summary">Use your email address or a social account.<br>
    Already have an account? <a href="#" class="more-link inline">Sign in</a></p>
         </div>
    </section>
</div>

#### HTML
{{< highlight html >}}
    <section>
         <div class="package small">
          <h2 class="sans bold">Sign up</h2>
          <p class="summary">Use your email address or a social account.<br>
    Already have an account? <a href="#" class="more-link inline">Sign in</a></p>
         </div>
    </section>
{{< /highlight >}}

#### Purchase Flow HTML
{{< highlight html >}}
    <section>
      <div class="grid">
         <div class="package small">
          <h2 class="sans bold">Sign up</h2>
          <p class="summary">Use your email address or a social account.<br>
    Already have an account? <a href="#" class="more-link inline">Sign in</a></p>
         </div>
      </div>
    </section>
{{< /highlight >}}
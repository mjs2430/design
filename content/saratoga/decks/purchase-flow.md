---
title: purchase flow
description: A sample purchase flow sign up page.
menu: decks
layout: deck
---
<main class="dsp">

<section class="purchase-flow">
    <div class="package">
       <div class="progress">
        <span class="active">1. Account</span>
        <span>2. Payment</span>
        <span>3. Review</span>
       </div>
    </div>
</section>

<section class="purchase-flow">
  <div class="grid">
     <div class="title">
      <h2 class="sans bold">Sign up</h2>
      <p class="summary">Use your email address or a social account. 
Already have an account? <a href="#" class="more-link inline">Sign in</a></p>
     </div>
    </div>
</section>

<section class="purchase-flow">
  <div class="grid">
        <div class="paper" style="order: 2;">
            <div class="package">
                <form> 
                    <div class="grid">
                        <div>
                            <label for="first-input">First Name</label>
                            <input type="text" id="first-input">
                        </div>
                        <div>
                            <label for="last-input">Last Name</label>
                            <input type="text" id="last-input">
                        </div>
                    </div>
                    <div>
                        <label for="email-input">Email address</label>
                        <input type="text" id="email-input">
                    </div>
                    <div>
                        <label for="password-input" onclick="changeType()" id="password-label">Password</label>
                        <small>Must be at least 7 characters long</small>
                        <input type="password" id="password-input">
                    </div>
                    <button id="button" type="submit" class="button disabled">submit</button>
                </form>
            </div>
        </div>
        <div class="card horizontal package small">
            <div>
                <span class="summary bold">Unlimited Digital Access</span>
                <small>$10.99 for 1 month, $15.99/month after.</small>
            </div>
            <small class="expander" onclick="this.classList.toggle('open')">Show details</small>
            <small class="stretch">Get access to everything on Miamiherald.com, our apps, the eEdition, and our stories platforms like Facebook Instant Articles and Google News.</small>
        </div>
        <div style="order: 3;">
            <div class="paper">
                <div class="package">
                   <button class="button social facebook">Sign in with Facebook</button>
                   <button class="button social google">Sign in with Google</button>
                   <button class="button social apple">Sign in with Apple</button>
                </div>
            </div>
            <p class="summary">I'm a print subscriber. <a href="#" class="more-link inline">Activate digital access</a></p>
        </div>

  </div>
</section>

</main>


<script>
//toggle password hide/show
  const el = document.querySelector('#password-label');
  function changeType() {
  let x = document.getElementById("password-input");
  if (x.type === "password") {
      x.type = "text";  
  } else {
    x.type = "password";
  }
el.classList.toggle('active');
}
//prevent form submit
  document.getElementById("button").addEventListener("click", function(event){
  event.preventDefault()
});
</script>
---
title: review order (DSP)
description: DSP review order card
menu: "cards"
---

The review order card uses the paper molecule, the package molecule.

#### Example
<div class="dsp" style="margin-bottom: 30px;">
    <section>
           <div class="review-order">
                <div class="paper">
                   <div class="flex-columns">
                        <small class="secure">secure transaction <i class="fas fa-lock"></i></small>
                        <div class="package small">
                          <button id="button" type="submit" class="button promo">Place order</button>                    
                        </div>
                    <div>
                        <div class="flex">
                            <span class="summary bold">Your Order</span>
                            <span class="summary bold">Due Today: $10.99</span>
                        </div>
                        <div class="package horizontal small">
                            <div>
                                <span class="summary">Unlimited Digital Access</span>
                                <small>$10.99 for 1 month, $15.99/month after.</small>
                            </div>
                            <small class="stretch">Get access to everything on Miamiherald.com, our apps, the eEdition, and our stories platforms like Facebook Instant Articles and Google News.</small>
                        </div>
                    </div>
                    <div>
                        <div class="flex">
                            <span class="summary bold">Account Info</span>
                        </div>
                        <div class="package horizontal small">
                            <div>
                                <span class="summary">John Wick</span><br>
                                <span class="summary">j.wick@email.com</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex">
                            <span class="summary bold">Payment Method</span>
                        </div>
                        <div class="package horizontal small">
                            <div>
                                <span class="summary">John Wick</span><br>
                                <span class="summary">****0000 | Exp. 12/23 <i class="fab fa-cc-visa" style="color: #1A1F71;"></i></span>
                                <a href="#" class="more-link primary">Edit Payment Method</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

#### HTML
{{< highlight html >}}
    <div class="paper">
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
                <div>
                     <label for="select">Choose an option</label>
                     <span class="button big expander" onclick="this.classList.toggle('open');">Order by</span>
                      <div class="options">
                        <a class="button big" href="#" data-name="Relevance">Relevance</a>
                        <a class="button big" href="#" data-name="Newest">Newest</a>
                        <a class="button big" href="#" data-name="Oldest">Oldest</a>
                      </div>
                </div>
                <button id="button" type="submit" class="button disabled">submit</button>
            </form>
        </div>
    </div>
{{< /highlight >}}


<script async src="/js/select.js"></script>

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
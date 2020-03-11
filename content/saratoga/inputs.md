---
title: "inputs"
description: "Form input styles"
menu: "atom"
---

Inputs are designed to be placed in a center-aligned form that is 100% of the parent width (max-width of 340px on desktop) using browser defaults and to have different states based on user interaction.

#### EXAMPLE

<div>
    <form style="max-width: 340px;">
      <label for="default-input">Default</label>
      <input type="text" id="default-input">
      <label for="focused-input">Focused</label>
      <input type="text" id="focused-input">
      <label for="hint-input">Hint</label>
      <small>This is a hint</small>     
      <input type="text" id="hint-input">
      <label for="error-input">Error</label>
      <small for="error-input">This is an error message</small>     
      <input type="text" id="error-input" class="is-invalid">
      <label for="password-input" onclick="changeType()" id="password-label">Password</label>
      <small>Must be at least 7 characters long</small>    
      <input type="password" id="password-input">   
      <button type="submit" class="button promo">submit</button>   
    </form>
</div> 
 
#### HTML

```html
<div>
    <form>
      <label for="default-input">Default</label>
      <small>This is a hint</small>           
      <input type="text" id="default-input">
    </form>
</div>
```

#### RULES

| Property | Value |
| --- | --- |
| Typeface | Noto Sans |
| Weight | 400 |
| Size | 1 em |
| Border | 1 pixel solid #989898 with a 2-pixel radius |

---

## SELECT

Custom selects use a combination of the [expander](../expander) molecule and link-based buttons instead of the native select element for forms. Because they are based on the expander, a toggle of the `open` class will show and remove the option list. Lastly, adding the class `selected` to any of options will make it bold. Different use cases will most likely require different javascript, but we have a [starter script](/js/select.js) for the purposes of this demo.

#### EXAMPLE

<div class="grid" style="grid-template-columns: 300px 1fr;">
{{< select >}}
</div>

<script async src="/js/select.js"></script>

#### HTML

{{< highlight html >}}{{< select >}}{{< /highlight >}}


<script>
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
</script>
---
title: "form elements"
description: "Native form element styles"
menu: "subscriptions"
---

Text inputs, text areas and select boxes are stackable and should always have label, input area, and a disclaimer or error message underneath. These elements should be included for spacing rules even when they are not used so that form elements don't jump around on validation.

#### EXAMPLE
{{< form-elements >}}

#### CSS
```css
.input .small {
  visibility: hidden;
  min-height: 1em;
  margin-bottom: 0;
}

.input .small.show {
  visibility: visible;
}

label {
  display: block;
  font: 400 14px/1.5em "McClatchy Sans", sans-serif;
}

input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #707070;
  border-radius: 2px;
  padding: 10px;
  font-size: 18px;
}
```

## RADIO BUTTONS AND CHECKBOXES

These elements have additional rules. The icons used are from the fontawesome set and have been pulled out from the full set for this guide to optimimze delivery.

#### EXAMPLE
<div class="package">
  <div>
    <input id="rewards" name="rewards" type="checkbox" checked>
    <label for="rewards"><span>Sign me up for <a class="blue" href="#">Miami Herald Rewards</a></span></label>
  </div>
  <div>
    <input id="terms" name="terms" type="checkbox">
    <label for="terms"><span>I agree to the <a class="blue" href="#">Terms of Service</a></span></label>
  </div>
  <p class="small error">Please agree to the terms of service</p>
</div>

#### CSS
```css
input[type=checkbox], input[type=radio] {
  display: none;
}

input[type=checkbox] + label, input[type=radio] + label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

input[type=checkbox] + label:before {
  content: url('./icons/square.svg');
  width: 16px;
  margin-right: 10px;
}

input[type=checkbox]:checked + label:before {
  content: url('./icons/check-square.svg');
}

input[type=radio] + label:before {
  content: url('./icons/outline-circle.svg');
  width: 16px;
  margin-right: 10px;
}

input[type=radio]:checked + label:before {
  content: url('./icons/dot-circle.svg');
}
```

## SAVED CARDS

The saved card is a checkbox with a custom display. 

#### EXAMPLE
<div class="package">
  <div>
    <input type="checkbox" id="visa-1234" name="card">
    <label for="visa-1234" class="button ghost saved-card">
      <span class="icon visa">1234</span>
      <span class="expiration">12/22</span>
    </label>
  </div>
</div>

#### HTML
```html
<div class="package">
  <div>
    <input type="checkbox" id="visa-1234" name="card">
    <label for="visa-1234" class="button ghost saved-card">
      <span class="icon visa">1234</span>
      <span class="expiration">12/22</span>
    </label>
  </div>
</div>
```

#### CSS
```css
input[type=checkbox] + .saved-card {
  justify-content: space-between;
  max-width: 250px;
}

input[type=checkbox] + .saved-card:before {
  order: 3;
  content: '';
  margin-right: 0;
}

input[type=checkbox]:checked + .saved-card {
  background-color: #0066b3;
  color: white;
}

input[type=checkbox]:checked + .saved-card:before {
  content: url('./icons/check-circle.svg');
  filter: invert(1);
}

input[type=checkbox]:checked + .saved-card .icon:before {
  filter: invert(1);
}
```

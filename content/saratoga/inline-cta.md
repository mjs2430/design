--- 
title: "inline-cta"
description: "Inline call to action for story display."
menu: cards
---

The inline CTA should be used in the story body. Under the dynamic content rules, it will be moved on the page and the wording will change. To allow for maximum flexibility, it's a standard stack of atoms and follows the same rules as all other ads on the page.

#### EXAMPLE

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis ex ex, at blandit sapien suscipit eget. Maecenas gravida, erat vitae commodo semper, lorem sem molestie metus, quis faucibus tellus.

{{< inline-cta >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis ex ex, at blandit sapien suscipit eget. Maecenas gravida, erat vitae commodo semper, lorem sem molestie metus, quis faucibus tellus.

#### HTML
{{< highlight html >}}{{< inline-cta >}}{{< /highlight >}}

---

## Newsletter signup

The newsletter signup uses the same basic structure placing the classes on the form itself.

#### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis ex ex, at blandit sapien suscipit eget. Maecenas gravida, erat vitae commodo semper, lorem sem molestie metus, quis faucibus tellus.

{{< inline-cta type="newsletter" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis ex ex, at blandit sapien suscipit eget. Maecenas gravida, erat vitae commodo semper, lorem sem molestie metus, quis faucibus tellus.

#### HTML
{{< highlight html >}}
{{< inline-cta type="newsletter" >}}
{{< /highlight >}}

---

## CTA on section pages

The same structure can also be used on the section pages with some wrapping.  
*This example does not match our decks and should be used as a guide only.*

#### EXAMPLE

<div class="example grid">
  {{< card >}}
  <div>
    <div class="impact">
      {{< inline-cta >}}
    </div>
    <div class="impact">
      {{< inline-cta type="newsletter" >}}
    </div>
  </div>
</div>

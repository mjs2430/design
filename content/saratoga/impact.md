---
title: impact
description: Reverse impact on any element.
level: molecule

---
The impact molecule simply reverses the color scheme of any element, and has a couple of additional rules to deal with card and label descendants. 

#### Example
<div class="example grid">
  {{< digest >}}
  <div>{{< card class="impact" >}}</div>
</div>

#### HTML
{{< highlight html >}}{{< card class="impact" >}}{{< /highlight >}}

#### CSS
```css
.impact {
  background-color: #373737;
  color: white;
}

a.impact {
  color: white;
}

.impact * {
  color: white;
  border-color: white;
}

.impact .card {
  background-color: transparent;
  box-shadow: none;
}

.impact .label > * {
  background-color: white;
  color: #222;
}
```

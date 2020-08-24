---
title: "typography"
description: "EDS typography"
menu: atoms

---

All CSS for default typography is found in the base templates. All text is given a default color of `#222222`. There are helper classes to add for `.bold`, `.serif`, `.white`, `.blue` and `.light-blue`.

<div class="note">
Note: <code>.serif</code> should only be used for editorial content, such as story headlines, and <code>.light-blue</code> should only be used for text links on a dark gray background.
</div>
### Our fonts

<span style="font-family: 'McClatchy Sans Web', Tahoma, sans-serif;font-size: 24px;line-height: 32px;">McClatchy Sans Web</span><br>
<span style="font-family: 'McClatchy Serif Web', 'Times New Roman', serif;font-size: 24px;line-height: 32px;">McClatchy Serif Web</span>

---

### Default Typography

Most of these classes are meant to be assigned to `td` or `span` tags. Avoid using tags such as `h1`, `p` or `div`, as these HTML elements render inconsistently across email clients and devices.

#### .h1
`.h1` is typically used near the beginning of an email and not more than once.
<br><br>
##### EXAMPLE
<span style="font-family: 'McClatchy Sans Web', Tahoma, sans-serif;font-size:36px;font-weight:600;line-height:40px;">This is a primary headline</span>
<br><br>
##### SPECIFICATIONS

Property | Value
--- | ---
Font Stack | 'McClatchy Sans Web', Tahoma, sans-serif;
Font Size | 36px
Line Height | 40px
Font Weight | 600
Text Transform | None
---

#### .h2
`.h2` is used for subheadings throughout an email.
<br><br>
##### EXAMPLE
<span style="font-family: 'McClatchy Sans Web', Tahoma, sans-serif;font-size:20px;font-weight:600;line-height:24px;text-transform:uppercase;">This is a secondary headline</span>
<br><br>
##### SPECIFICATIONS

Property | Value
--- | ---
Font Stack | 'McClatchy Sans Web', Tahoma, sans-serif;
Font Size | 20px
Line Height | 24px
Font Weight | 600
Text Transform | uppercase
---

#### .h3
`.h3` is used as a label for smaller headings and is frequently paired with `.small`.
<br><br>
##### EXAMPLE
<span style="font-family: 'McClatchy Sans Web', Tahoma, sans-serif;font-size:18px;font-weight:600;line-height:24px;text-transform:uppercase;">This is a tertiary headline</span>
<br><br>
##### SPECIFICATIONS

Property | Value
--- | ---
Font Stack | 'McClatchy Sans Web', Tahoma, sans-serif;
Font Size | 18px
Line Height | 24px
Font Weight | 600
Text Transform | uppercase
---


#### .h4
`.h4` is used as an alternate for `.h3`, typically for editorial content, such as story headlines. It is identical in size and weight to `.h3` but is serif and not uppercase.
<br><br>
##### EXAMPLE
<span style="font-family: 'McClatchy Serif Web', 'Times New Roman', serif;font-size:18px;font-weight:600;line-height:24px;text-transform:none;">This is an editorial email headline</span>
<br><br>
##### SPECIFICATIONS

Property | Value
--- | ---
Font Stack | 'McClatchy Serif Web', 'Times New Roman', serif;
Font Size | 18px
Line Height | 24px
Font Weight | 600
Text Transform | None
---


#### .p
`.p` is used for body copy throughout an email.
<br><br>
##### EXAMPLE
<span style="font-family: 'McClatchy Sans Web', Tahoma, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-transform:none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
<br><br>
##### SPECIFICATIONS

Property | Value
--- | ---
Font Stack | 'McClatchy Sans Web', Tahoma, sans-serif;
Font Size | 16px
Line Height | 24px
Font Weight | 400
Text Transform | None
---


### .small
`.small`  is used for smaller body copy.
<br><br>
#### EXAMPLE
<span style="font-family: 'McClatchy Sans Web', Tahoma, sans-serif;font-size:14px;font-weight:400;line-height:20px;text-transform:none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
<br><br>
#### SPECIFICATIONS

Property | Value
--- | ---
Font Stack | 'McClatchy Sans Web', Tahoma, sans-serif;
Font Size | 14px
Line Height | 20px*
Font Weight | 400
Text Transform | None

<span style="font-size:14px;">*This is not a multiple of 8, but it is the best option in this case. Sometimes rules are meant to be broken.</span>


---


### Text Links
Use one of the color helper classes with `a` tags for text links: `.blue`, `.light-blue`, `.white`. The only exception is in the footer or for fine print, where links are underlined but kept the same color as the surrounding text.
<br><br>
#### EXAMPLE
<a href="#" style="color: #31409f;">Text link</a>

---

### Footer Copy/Fine Print
The CSS for this text is not included in the base template because it is already present in the content blocks for items that use it in Adobe Campaign. If for any reason this style is needed elsewhere in a design, it will need to be added.
<br><br>
#### EXAMPLE
<span style="font-family: 'McClatchy Sans Web', Tahoma, Arial, sans-serif;font-weight: 400;color: #525252;font-size: 11px;line-height: 16px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
<br><br>
#### SPECIFICATIONS

Property | Value
--- | ---
Font Stack | 'McClatchy Sans Web', Tahoma, sans-serif;
Font Size | 11px
Line Height | 16px
Font Weight | 400
Color | #525252

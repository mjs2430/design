---
title: "typography"
description: "the EDS typography system"
menu: atoms

--- 

All CSS for default typography is found in the base templates. All text is given a default color of `#222222`. There are helper classes to add for `.bold`, `.serif`, `.white` and `.blue`. Note: `.serif` should only be used for editorial content, such as story headlines.
<br><br>
#### Our fonts

McClatchy Sans Web <br>
McClatchy Serif Web

##### CSS (Minified) - Already included in base templates
```css
/*----------FONTS----------*/
@font-face{font-family:'McClatchy Sans Web';font-style:normal;font-weight:400;src:url(https://media.mcclatchy.com/email-assets/global/fonts/mcclatchy-sans-web-regular.woff)}@font-face{font-family:'McClatchy Sans Web';src:url(https://media.mcclatchy.com/email-assets/global/fonts/mcclatchy-sans-web-demi.woff);font-weight:600;font-style:normal}@font-face{font-family:'McClatchy Serif Web';font-style:normal;font-weight:400;src:url(https://media.mcclatchy.com/email-assets/global/fonts/mcclatchy-serif-web-regular.woff)}@font-face{font-family:'McClatchy Serif Web';src:url(https://media.mcclatchy.com/email-assets/global/fonts/mcclatchy-serif-web-demi.woff);font-weight:600;font-style:normal}
```
---

### H1
`<h1>` is typically used near the beginning of an email and not more than once.
<br><br>
#### EXAMPLE
<span style="font-family: 'McClatchy Sans Web', Tahoma, sans-serif;font-size:36px;font-weight:600;line-height:40px;">This is a primary headline</span>
<br><br>
#### SPECIFICATIONS

Property | Value
--- | ---
Font Stack | 'McClatchy Sans Web', Tahoma, sans-serif;
Font Size | 36px
Line Height | 40px
Font Weight | 600
Text Transform | None
---

### H2
`<h2>` is used for subheadings throughout an email.
<br><br>
#### EXAMPLE
<span style="font-family: 'McClatchy Sans Web', Tahoma, sans-serif;font-size:22px;font-weight:600;line-height:24px;text-transform:uppercase;">This is a secondary headline</span>
<br><br>
#### SPECIFICATIONS

Property | Value
--- | ---
Font Stack | 'McClatchy Sans Web', Tahoma, sans-serif;
Font Size | 22px
Line Height | 24px
Font Weight | 600
Text Transform | UPPERCASE
---

### H3
`<h3>` is used as a label for smaller headings.
<br><br>
#### EXAMPLE
<span style="font-family: 'McClatchy Sans Web', Tahoma, sans-serif;font-size:18px;font-weight:600;line-height:24px;text-transform:uppercase;">This is a tertiary headline</span>
<br><br>
#### SPECIFICATIONS

Property | Value
--- | ---
Font Stack | 'McClatchy Sans Web', Tahoma, sans-serif;
Font Size | 18px
Line Height | 24px
Font Weight | 600
Text Transform | UPPERCASE
---


### H4
`<h4>` is used as an alternate for `<h3>`, typically for editorial content, such as story headlines. It is identical in size and weight to `<h3>` but is serif and not uppercase.
<br><br>
#### EXAMPLE
<span style="font-family: 'McClatchy Serif Web', 'Times New Roman', serif;font-size:18px;font-weight:600;line-height:24px;text-transform:none;">This is an editorial email headline</span>
<br><br>
#### SPECIFICATIONS

Property | Value
--- | ---
Font Stack | 'McClatchy Serif Web', 'Times New Roman', serif;
Font Size | 18px
Line Height | 24px
Font Weight | 600
Text Transform | None
---


### .p
`.p` is used for body copy throughout an email. It is a class that should be assigned to table cells instead of using the `<p>` tag. This avoids issues with browsers and clients treating `<p>` margins and spacing differently.
<br><br>
#### EXAMPLE
<span style="font-family: 'McClatchy Sans Web', Tahoma, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-transform:none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
<br><br>
#### SPECIFICATIONS

Property | Value
--- | ---
Font Stack | 'McClatchy Sans Web', Tahoma, sans-serif;
Font Size | 16px
Line Height | 24px
Font Weight | 400
Text Transform | None
---


### .small
`.small`  is used for smaller body copy and is usually paired with `<h3>` or `<h4>`.
<br><br>
#### EXAMPLE
<span style="font-family: 'McClatchy Sans Web', Tahoma, sans-serif;font-size:14px;font-weight:400;line-height:20px;text-transform:none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
<br><br>
#### SPECIFICATIONS

Property | Value
--- | ---
Font Stack | 'McClatchy Sans Web', Tahoma, sans-serif;
Font Size | 14px
Line Height | 20px*
Font Weight | 400
Text Transform | None

<span style="font-family: 'McClatchy Sans Web', Tahoma, sans-serif;font-size:14px;font-weight:400;line-height:20px;text-transform:none;">*This is not a multiple of 8, but it is the best option in this case. The text needs to be smaller than .p, but the 24px line height on .p is too large for a 14px font size, and reducing to a 16px line height is too tight. It also isn't an option to make the text much smaller, because it's best practice to not go smaller than 13px with text size in email (except in the footer). Two lines of .small with 20px line height is a multiple of 8 so it's not a major disruption in the grid and still flows with the established vertical rhythm.
</span>


---


### .link-blue and .link-white
These are classes for text links. Blue is for use on a white/light gray background and white is for a dark gray/SB background.
<br><br>
#### EXAMPLE
<a href="javascript:void(0)" style="font-family: 'McClatchy Sans Web', Tahoma, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-transform:none;color:#31409f;border-bottom:1px solid #31409f;text-decoration: none;">Lorem ipsum dolor sit amet</a>
<br><br>
#### SPECIFICATIONS

Property | Value
--- | ---
Color | #31409f or #ffffff
Text Decoration | None
Border | border-bottom: 1px solid #31409f or #ffffff;
---


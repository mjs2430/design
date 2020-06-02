---
title: "spacing"
description: "the EDS spacing system"
menu: atoms

--- 

The `.card` class adds 24px spacing on all sides and is the primary class applied to the main `<td>` for every row. To put padding before, after or beside individual elements within a card or if a custom template requires special spacing, there are 3 sets of classes to use. Padding can be added to the just the top, bottom or sides and can be 8, 16 or 24 px. Note: Outlook Desktop Windows ignores padding applied to images, so if an image needs spacing, apply the padding class to the element that the image needs spacing from instead of the image itself.

#### CSS

```css
/*spacing*/
.card {padding: 24px;}
.pt24 {padding-top: 24px;}
.ps24 {padding-right: 24px;padding-left: 24px;}
.pb24 {padding-bottom: 24px;}
.pt16 {padding-top: 16px;}
.ps16 {padding-right: 16px;padding-left: 16px;}
.pb16 {padding-bottom: 16px;}
.pt8 {padding-top: 8px;}
.ps8 {padding-right: 8px;padding-left: 8px;}
.pb8 {padding-bottom: 8px;}
```
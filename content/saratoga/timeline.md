---
title: "timeline"
description: "Used in live updates and for static timelines."
level: "card"
---

The timeline organism is a stack of events styled for chronological display. In the live updates implementation, all events should be shown at all times. When using the timeline as a story telling enhancement to a normal story, it should be combined with an expander molecule to hide what's not completely necessary to the story on initial load. This will change from story to story.

#### Example
{{< timeline type="story" >}}

#### HTML
{{< highlight html >}}{{< timeline type="story" >}}{{< /highlight >}}

#### CSS
```css
.timeline-event {
	border-left: 1px solid #707070;
}

.timeline-event:before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 18px;
	height: 18px;
	box-sizing: border-box;
	background-color: #707070;
	border: 4px solid white;
	border-radius: 50%;
	transform: translate(-9.5px, 12px);
}
```

## LIVE UPDATES VERSION

The live updates version doesn't use the expander molecule since the primary purpose of the page is to show these events. The same structure works without this addition.

#### LIVE UPDATES EXAMPLE
{{< timeline >}}

#### LIVE UPDATES HTML
{{< highlight html >}}{{< timeline >}}{{< /highlight >}}

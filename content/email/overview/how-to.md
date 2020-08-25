---
title: "How to Use the EDS"
description: "how to use the EDS guide"
menu: overview

---

This guide has descriptions and code snippets of common atoms and other elements used in the system, as well as explanations for all the default CSS included in the framework. Use a framework as a starting point and add content in a `table` created for each row in the framework.

All of the CSS is written using a `style` tag in the `head` and must be inlined before use. Mailchimp makes one of the best [inliner] (http://templates.mailchimp.com/resources/inline-css/) tools; however it does convert some of the Adobe Campaign `<% %>` codes (depending on where they are in the email) into `&lt;% %&gt;`, which doesn't break anything, but looks messy. It can easily be switched back with find-and-replace after inlining to keep things neat.

The EDS is not limited to the default CSS included in the framework; it is meant to be used as a starting point. If an element is needed that does not already exist, it can be added as long as it follows the style guide structure and rules.

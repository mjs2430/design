---
title: "How to Use the EDS"
description: "how to use the EDS guide"
menu: overview

---

This guide has descriptions and code snippets of common atoms and other elements used in the system, as well as explanations for all the default CSS included in the base templates. Use a base template as a starting point and add the content in a `table` created for each row in the base template.

All of the CSS is written using a `style` tag in the `head` and must be inlined before use. Mailchimp makes a great [inliner] (http://templates.mailchimp.com/resources/inline-css/) tool; however it does convert some of the Adobe Campaign `<% %>` codes (depending on where they are in the email) into `&lt;% %&gt;`, which can be switched back with find-and-replace after inlining to keep things neat.

The EDS is not limited to the default CSS included in the base templates; it is meant to be used as a starting point. If an element is needed that does not already exist, it can be added as long as it follows the style guide structure and rules.

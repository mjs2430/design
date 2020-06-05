---
title: "campaign shortcodes"
description: "shortcodes to use in campaign to pull in dynamic information or data or images"
menu: atoms

--- 
Campaign Shortcodes are placed in our emails to pull in full modules, user information, dynamic data, logos, and more.
<br><br>
### HEADER
`<%@ include view='mccDynamicHeader' %>` <br>
<br>
### FOOTERS
`<%@ include view='mccDynamicFooterLeftAligned' %>` <br>
`<%@ include view='mccDynamicFooterFlexibleWidth' %>` <br>
`<%@ include view='mccFooterNoSocial' %>` <br>
<br>
### TERMS OF SERVICE
`<%@ include view='tos_combo_2019_10' %>` <br>
`<%@ include view='tos_digital_2019_10' %>` <br>
<br>
### CUSTOMER SERVICE
`<%= recipient.siteBrand.customerServiceEmail %>` <br>
`<%= recipient.siteBrand.customerServicePh1 %>` <br>
`https://<%= recipient.siteBrand.customerServicePage %>` <br>
<br>
### PUB LINKS
`https://<%= recipient.siteBrand.publicationUrl %>` <br>
`https://<%= recipient.siteBrand.eeditionVanity %>` <br>
`https://<%= recipient.siteBrand.subActivation %>` <br>
`https://<%= recipient.siteBrand.termsServiceLink %>` <br>
<br>
### PROPERTY NAME
`<%= recipient.siteBrand.paperName %>`  (Official Property Name; has "The" if part of official name) <br>
`<%= recipient.siteBrand.lowerThePropertyName %>` (has "the" or "The" for use in a sentence)<br>
`<%= recipient.siteBrand.upperThePropertyName %>` (has "The" for use at the beginning of a sentence) <br>
`<%= recipient.siteBrand.propertyName %>` (no "the" or "The" for use as a compound adjective)<br>
<br>
### SOCIAL
`http://www.facebook.com/<%= recipient.siteBrand.connectFacebookUrl %>` <br>
`http://www.twitter.com/<%= recipient.siteBrand.connectTwitterUrl %>` <br>
`https://www.instagram.com/<%= recipient.siteBrand.connectInstagramUrl %>` <br>
<br>
### APP
`https://<%= recipient.siteBrand.googlePlayApp %>` <br>
`https://<%= recipient.siteBrand.iosApp %>` <br>
<br>
### PERSONALIZATION
`<%= recipient.firstName %>` <br>
`<%= recipient.lastName %>` <br>
`<%= recipient.account %>` <br>
`<%= recipient.PaidContact.tempStopDate %>` <br>
<br>
### IMAGES
`<%= recipient.siteBrand.overrideLogo %>` <br>
<br>
### ACCOUNT
`https://<%= recipient.siteBrand.accountPage %>` <br>
`https://<%= recipient.siteBrand.prefPageLink %>` <br>
<br>
### NIE
`https://<%= recipient.siteBrand.nieDonationURL %>` <br>

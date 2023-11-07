# Docusaurus docs for [TomatenKuchen](https://tomatenkuchen.com) & Manage Bot

Deployed using Cloudflare Pages on https://docs.tomatenkuchen.com.

# Todo
- custom bots übersetzen
- autorole einstellung für rollenabkürzung
- giveaway giveawayExtraEntryMode:
	- stack: "Default entry (1) and entries of all roles are added together",
	- highestRole: "Only the highest role of a user which has an extra entry is used as entry count",
	- highestEntry: "Only the highest entry count of a users roles is used as entry count"
- giveaway extra entries pro rolle 0-50
- moderation:
	- autoModExplainer
	- invitesAllowedChannels
	- deleteInvites
	- blockMarkdownHeaders
	- disableDMsForever
	- disableInvitesForever
	- autoDehoist
	- automodCapsPercentage
	- PN nachrichten für mute warn kick ban
- levelPoints100Chars: "Wie viele Levelpunkte Nutzer für jeweils 100 gesendete Zeichen erhalten. 0 zum Deaktivieren (-> standardmäßig ein Punkt pro Nachricht)
	default: 0,
	min: 0,
	max: 100,
- level (de)aktiviert
- ticket ticketMode & ticketInactiveRemind & ticketAutoClose & ticketNotifyAuthor, ggf extra seite
- ticket de kategorie ist falsch, vllt ordnername?
- kategoriename ai ist in de nicht übersetzt
- welcome/leave inviter var geht
- welcome/leave welcomeDeleteJoin & leaveDeleteRejoin
- suggest:
	- suggestionReviewChannel
	- suggestionMode reaktion/button
	- suggestionCooldown
	- requireSuggestReason
	- suggestDMAuthor standard: ja
- autoThreadChannels

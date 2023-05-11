# Docs for [TomatenKuchen](https://tomatenkuchen.eu)
Deployed using Cloudflare Pages on [docs.tomatenkuchen.eu](https://docs.tomatenkuchen.eu)

Todo:
- `{members} {members.humans} {members.bots} {emojis} {stickers} {roles} {boosts} {channels} {voicechannels} {textchannels} {categories}<br>{leaderboard} {boosters} {afk} {todo} {birthday}` autoupdate
- counting
	```json
		{
			channel: "",
			start: 1,
			step: 1,
			resetOnWrong: false,
			resetOnDelete: false,
			resetOnEdit: false,
			allowChat: true,
			useWebhooks: false,
			useReactions: false,
			failRole: "",
			failRoleRemove: "0"
		}
	```
- mc release feed
- afk + rolle
- mcupdate beschreibung/name/nachricht, `{ONLINE} {MAX} {VERSION} {IP} {PORT}` args
- starboard starboardExcludedChannels starboardEmoji starboardStars starboardSelf starboardChannel

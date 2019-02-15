export type FeedReader = {
	id: string;
	name: string;
	link: (feed: string) => string;
	favicon: string;
};

export const FeedReaders: FeedReader[] = [
	{
		id: "feedly",
		name: "Feedly",
		link: feed => `https://feedly.com/i/subscription/feed/${encodeURI(feed)}`,
		favicon: "feedly.svg",
	},
	{
		id: "theoldreader",
		name: "The Old Reader",
		link: feed =>
			`https://theoldreader.com/feeds/subscribe?url=${encodeURI(feed)}`,
		favicon: "theoldreader.png",
	},
	{
		id: "inoreader",
		name: "Inoreader",
		link: feed => `http://www.inoreader.com/feed/${encodeURI(feed)}`,
		favicon: "inoreader.ico",
	},
	{
		id: "newsblur",
		name: "News Blur",
		link: feed => `http://www.newsblur.com/?url=${encodeURI(feed)}`,
		favicon: "newsblur.png",
	},
	{
		id: "netvibes",
		name: "Netvibes",
		link: feed =>
			`https://www.netvibes.com/subscribe.php?url=${encodeURI(feed)}`,
		favicon: "netvibes.png",
	},
	{
		id: "bazqux",
		name: "BazQux",
		link: feed => `https://bazqux.com/add?url=${encodeURI(feed)}`,
		favicon: "bazqux.ico",
	},
	{
		id: "feedbin",
		name: "Feedbin",
		link: feed => `https://feedbin.me/?subscribe=${encodeURI(feed)}`,
		favicon: "feedbin.ico",
	},
	{
		id: "g2reader",
		name: "G2Reader",
		link: feed => `https://g2reader.com/?add&q=${encodeURI(feed)}`,
		favicon: "g2reader.ico",
	},
	{
		id: "commafeed",
		name: "CommaFeed",
		link: feed =>
			`https://www.commafeed.com/rest/feed/subscribe?url=${encodeURI(feed)}`,
		favicon: "commafeed.ico",
	},
	{
		id: "nooshub",
		name: "Nooshub",
		link: feed => `https://www.nooshub.com/me/feeds/new?url=${encodeURI(feed)}`,
		favicon: "nooshub.ico",
	},
];

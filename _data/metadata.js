let data = {
	title: "eleventeen v" + process.env.npm_package_version,
	url: "https://eleventeen.blog",
	language: "en",
	description: "Rainbow Eleventy blog",
	author: {
		name: "Juanita Appleseed",
		email: "juanita@example.com",
		url: "https://example.org",
	},
	siteimage: "https://o.famebot.com/file/famebot/eleventeen.png",
	mono: true,
	eleventeenv: process.env.npm_package_version,
	elevenv: process.env.ELEVENTY_VERSION,
};

export default data;
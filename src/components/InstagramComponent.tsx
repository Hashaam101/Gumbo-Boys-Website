import React, { useState, useEffect, useRef } from "react";
import InstagramGrid from "./InstagramGrid";
import InstagramCarousel from "./InstagramCarousel";

interface InstagramPost {
	id: string;
	title: string;
	image: string;
	url: string;
	description?: string | string[];
}

const InstagramFeed: React.FC<{ posts: InstagramPost[] }> = ({ posts }) => {
	const [windowWidth, setWindowWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 1200,
	);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="">
			<div className="lg:container mx-auto px-4">
				<h1 className="text-h3 sm:text-h2 w-full text-center mb-[20px]">
					Instagram Feed
				</h1>

				{windowWidth > 650 ? (
					<InstagramGrid posts={posts} />
				) : (
					<InstagramCarousel posts={posts} />
				)}
			</div>
		</div>
	);
};

const InstagramComponent = () => {

	const Posts: InstagramPost[] = [
		{
			id: "1",
			title: "gumboboys",
			image: "/Images/insta/1.jpg",
			url: "https://www.instagram.com/p/CoxuT_VSiGV/",
			description: "Tomorrow we’ll have them Crawfish ⚜️🦞 🦞🦞🦞⚜️Today we got the Full Spread ‼️Gumbo, Po’boys, Platters, Beignets and many more.Pull in anytime…We’re Open Monday through Saturday Noon to 9pm.",
		},
		{
			id: "2",
			title: "gumboboys",
			image: "/Images/insta/2.jpg",
			url: "https://www.instagram.com/p/CLcV_PPgGBN/",
			description: "Cajun Egg Rolls dropping. We will be available at noon today for delivery on @ubereats and @doordash or pickup. Free delivery for orders through IG or telephone in DTLA/Echo Park area. Open noon til that pot gone! Thank y’all! 🙏🐊🐊🙏",
		},
		{
			id: "3",
			title: "gumboboys",
			image: "/Images/insta/3.jpg",
			url: "https://www.instagram.com/p/CpI9vNTSk9i/",
			description: "Them Red Beans n’ Rice with that cornbread. Some things go so well together it should be forever. We’ll keep pushing that pair as long as time allows us.It’s almost like cake n ice cream if you get our drift‼️ Similar textures and fun.I wrote a poem about Red Beans in the first grade",
		},
		{
			id: "4",
			title: "gumboboys",
			image: "/Images/insta/4.jpg",
			url: "https://www.instagram.com/p/CpDOeqrrC-u/",
			description: "“House Sauce” -House Remoulade made fresh daily.We use it to pair with all of our fried items. We also use it on all of our Po’boys.It goes good on pretty much everything. We wouldn’t judge if you even took a lil sip out the bottle‼️",
		},
		{
			id: "5",
			title: "gumboboys",
			image: "/Images/insta/5.jpg",
			url: "https://www.instagram.com/p/B2pVfSkAYxV/",
			description: "Red Beans & Rice aren’t just for Monday’s anymore @ubereats Our beans are soaked for 24 hours, pressure cooked, seasoned to perfection, and smothered with Andouille Sausage, Tasso, and Turkey Necks‼️ #redbeansandrice #gumboboys #ubereats",
		},
		{
			id: "6",
			title: "gumboboys",
			image: "/Images/insta/6.jpg",
			url: "https://www.instagram.com/p/CxJ7l6Kr2KK/?img_index=1",
			description: "Yummy Louisiana dishes @gumboboys 😋 I didn't try but they have fried alligator 😶 if you want something unique. 📸Sweep the kitchen gumbo📸Shrimp n' Grits📸Hot sausage poboy📸Shrimp plate📸Hush puppies📸Cornbread📸Banana foster",
		},
	];

	return <InstagramFeed posts={Posts} />;
};

export default InstagramComponent;

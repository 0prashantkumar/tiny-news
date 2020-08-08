const articles = [
	{
		source: { id: null, name: "Hindustan Times" },
		author: "hindustantimes.com | Edited by Sohini Sarkar",
		title:
			"After logging highest rainfall of the season, Mumbai braces for more; 16 NDRF teams deployed - Hindustan Times",
		description:
			"The city recorded 331.08 mm rainfall, followed by 101.9 mm in the eastern suburbs and 76.03 mm in the western suburbs. Mumbai also saw strong winds at a speed of 106 km per hour while in other districts it was 70 to 80 kmph of nearly cyclonic intensity.",
		url:
			"https://www.hindustantimes.com/india-news/after-logging-highest-rainfall-of-the-season-mumbai-braces-for-more-16-ndrf-teams-deployed/story-FAwsLCgODZrlZZkCCdrbgP.html",
		urlToImage:
			"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/08/06/Pictures/_13a00e54-d7d5-11ea-8122-d3bbe1b049d5.jpg",
		publishedAt: "2020-08-06T12:21:00Z",
		content:
			"With Mumbai receiving the highest rainfall of the season in the span of a few hours on Wednesday and Thursday, the Maharashtra government swung into action and deployed 16 teams of the National Disas… [+3004 chars]",
	},
	{
		source: { id: null, name: "Firstpost" },
		author: null,
		title:
			"On NASA's Curiosity rover's eight anniversary, here are some of its top findings on Mars - Firstpost",
		description:
			"The car-sized rover created by NASA has travelled a total of 23.06km on the Red Planet while providing us with several images and important data.",
		url:
			"https://www.firstpost.com/tech/science/on-nasas-curiosity-rovers-eight-anniversary-here-are-some-of-its-top-findings-on-mars-8679331.html",
		urlToImage:
			"https://images.firstpost.com/wp-content/uploads/2019/01/PIA22960_hires.jpg",
		publishedAt: "2020-08-06T12:17:43Z",
		content:
			"FP TrendingAug 06, 2020 17:47:43 IST\r\nFollowing its launch in November 2011, Curiosity Rover had reached Mars on 5 August 2012 and became NASA's fourth rover on the planet. Its landing site is one of… [+3046 chars]",
	},
	{
		source: { id: null, name: "Hindustan Times" },
		author: "hindustantimes.com",
		title:
			"England vs Pakistan Live Score, 1st Test Day 2: Shan, Shadab take Pakistan to 187/5 at Lunch - Hindustan Times",
		description:
			"England vs Pakistan Live Score, 1st Test, Day 2: Follow updates of Eng vs Pak 1st Test Day 2 in Manchester.",
		url:
			"https://www.hindustantimes.com/cricket/england-vs-pakistan-live-cricket-score-1st-test-day-2-eng-vs-pak-test-match-at-old-trafford/story-csvekr2zczRnyyqXseuX9M.html",
		urlToImage:
			"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/08/06/Pictures/first-test-england-v-pakistan_cd37b304-d7d9-11ea-a06f-e722baeaa470.jpg",
		publishedAt: "2020-08-06T12:01:00Z",
		content:
			"England vs Pakistan Live Score, 1st Test, Day 2: Shadab Khan and Shan Masood restart after Lunch. Chris Woakes dismissed Mohammad Rizwan as the batsman edged it to keeper. Pakistan are five wickets d… [+4302 chars]",
	},
	{
		source: { id: "the-times-of-india", name: "The Times of India" },
		author: "TIMESOFINDIA.COM",
		title:
			"Vodafone Idea Q1 loss widens to Rs 25,460 crore - Times of India",
		description:
			"India Business News: Telecom operator Vodafone Idea on Thursday posted a maasive Rs 25,460 crore loss for the first quarter ended June 2020 due to provisions for statutory",
		url:
			"https://timesofindia.indiatimes.com/business/india-business/vodafone-idea-q1-loss-widens-to-rs-25460-crore/articleshow/77393252.cms",
		urlToImage:
			"https://static.toiimg.com/thumb/msid-77393233,width-1070,height-580,imgsize-156817,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
		publishedAt: "2020-08-06T11:55:00Z",
		content: null,
	},
	{
		source: { id: null, name: "NDTV News" },
		author: null,
		title:
			"Document Admitting Chinese Intrusions Vanishes From Defence Ministry Site - NDTV",
		description:
			"China intruded into Indian territory in eastern Ladakh in early May, the Defence Ministry acknowledged in a document showing on the news section of its website since Tuesday. Two days after it was put up on the Ministry of Defence website, the page is missing.",
		url:
			"https://www.ndtv.com/india-news/india-china-chinese-aggression-in-ladakh-began-on-may-5-says-defence-ministry-document-2275060",
		urlToImage:
			"https://c.ndtvimg.com/2020-07/dmq2ooq_ladakh_650x400_08_July_20.jpg",
		publishedAt: "2020-08-06T11:39:00Z",
		content:
			"India-China Standoff: A violent face-off between Indian and Chinese soldiers happened at Galwan in June\r\nNew Delhi: China intruded into Indian territory in eastern Ladakh in early May, the Defence Mi… [+3626 chars]",
	},
	{
		source: { id: "the-times-of-india", name: "The Times of India" },
		author: "TIMESOFINDIA.COM",
		title:
			"Johnson & Johnson develops first antidepressant nasal spray for actively suicidal people; here is how it works - Times of India",
		description:
			"Keeping the pandemic’s widespread impact on people’s mental health in mind, Johnson & Johnson has developed an antidepressant nasal spray for actively suicidal people.",
		url:
			"https://timesofindia.indiatimes.com/life-style/health-fitness/de-stress/johnson-johnson-develops-first-antidepressant-nasal-spray-for-actively-suicidal-people-here-is-how-it-works/photostory/77390474.cms",
		urlToImage: "https://static.toiimg.com/photo/77390483.cms",
		publishedAt: "2020-08-06T11:30:00Z",
		content:
			"According to a report in Bloomberg, the nasal spray ‘Spravato’ has already been used by 6000 people with treatment-resistant depression after receiving regulatory approvals in March 2019. Spravato wi… [+416 chars]",
	},
	{
		source: { id: null, name: "Hindustan Times" },
		author: "Hindustan Times",
		title:
			"Sameer Sharma had shared moving note on mental health after Sushant Singh Rajput’s death: ‘A pain so... - Hindustan Times",
		description:
			"Actor Sameer Sharma had written a long note about mental health a few days after Suhant Singh Rajput’s death. Sameer was found dead at his home on Thursday.",
		url:
			"https://www.hindustantimes.com/bollywood/sameer-sharma-had-shared-moving-note-on-mental-health-after-sushant-singh-rajput-s-death-a-pain-so-unbearable-yet-inexplicable/story-urX0XByJTmOTXM7wRSQJTO.html",
		urlToImage:
			"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/08/06/Pictures/_1bdecf46-d7c2-11ea-a162-aa5ffaaa8aa4.jpg",
		publishedAt: "2020-08-06T10:55:00Z",
		content:
			"Actor Sameer Sharma, who was found dead at his home on Thursday at the age of 44, had shared excerpts from a book to spread awareness about depression post the death of actor Sushant Singh Rajput. Sa… [+2174 chars]",
	},
	{
		source: { id: "the-times-of-india", name: "The Times of India" },
		author: "PTI",
		title:
			"It's official: Vivo will not be IPL title sponsors this year, says BCCI - Times of India",
		description:
			"Cricket News: The BCCI on Thursday suspended the IPL title sponsorship deal with Chinese mobile phone company Vivo for the event's upcoming edition amid soaring Sin",
		url:
			"https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/its-official-vivo-will-not-be-ipl-title-sponsors-this-year-says-bcci/articleshow/77390968.cms",
		urlToImage:
			"https://static.toiimg.com/thumb/msid-77390955,width-1070,height-580,imgsize-195642,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
		publishedAt: "2020-08-06T10:31:00Z",
		content: null,
	},
	{
		source: { id: null, name: "Hindustan Times" },
		author: "HT Correspondent",
		title:
			"India rejects Pakistan’s criticism of Ram Mandir in Ayodhya - Hindustan Times",
		description:
			"Pakistan’s foreign ministry had on Wednesday condemned the building of the temple and described the judgement by India’s Supreme Court (SC) that paved the way for the construction as “flawed”.",
		url:
			"https://www.hindustantimes.com/india-news/india-rejects-pakistan-s-criticism-of-ram-mandir-in-ayodhya/story-mBHI5NjxnxWx8mZ5MmjFUP.html",
		urlToImage:
			"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/08/06/Pictures/_ba168cb4-d7cf-11ea-8122-d3bbe1b049d5.jpg",
		publishedAt: "2020-08-06T10:29:00Z",
		content:
			"New Delhi on Thursday rejected Islamabad’s condemnation of the construction of the Ram Mandir at Ayodhya, with the ministry of external affairs (MEA) saying Pakistan should not interfere in India’s i… [+2620 chars]",
	},
	{
		source: { id: null, name: "The Indian Express" },
		author: "Karanveer Singh Arora",
		title:
			"OnePlus Nord: 5 things to know before you buy - The Indian Express",
		description:
			"Here are the top 5 things you need to know about the new OnePlus Nord before you decide to buy.",
		url:
			"https://indianexpress.com/article/technology/mobile-tabs/top-5-things-to-know-about-oneplus-nord-6542175/",
		urlToImage:
			"https://images.indianexpress.com/2020/08/OnePlus-Nord-feature.jpg?w=759",
		publishedAt: "2020-08-06T10:23:43Z",
		content:
			"During the sale, customers can get an additional 10 per cent discount on purchasing the device with an HDFC card. Apart from this, they can also opt for a no-cost EMI scheme. (Express Photo: Nandagop… [+4292 chars]",
	},
	{
		source: { id: null, name: "The Indian Express" },
		author: "Harikishan Sharma",
		title:
			"Hard taskmaster with a congenial style: Meet Manoj Sinha, the new L-G of J&K - The Indian Express",
		description:
			"Manoj Sinha, an engineer with a reputation for quick decision-making and delivering on time, is a three-time Lok Sabha MP and former Union Minister.",
		url:
			"https://indianexpress.com/article/explained/hard-taskmaster-with-a-congenial-style-meet-manoj-sinha-the-new-l-g-of-jk-6542375/",
		urlToImage:
			"https://images.indianexpress.com/2020/08/manoj-sinha-explained-politics-759.jpg?w=759",
		publishedAt: "2020-08-06T10:12:01Z",
		content:
			"Written by Harikishan Sharma\r\n, Edited by Explained Desk | New Delhi | \r\nPublished: August 6, 2020 3:42:01 pm\r\nIn 2014, Manoj Sinha was elected to Lok Sabha for a third term, and joined Modis Council… [+3043 chars]",
	},
	{
		source: { id: null, name: "India TV News" },
		author: "India TV Tech Desk",
		title:
			"PUBG Mobile 1.0 Beta update released: Erangel 2.0, new features and more - India TV News",
		description:
			"With the new PUBG Mobile 1.0 beta update, Tencent Games have finally introduced the much-awaited Erangel 2.0 map.",
		url:
			"https://www.indiatvnews.com/technology/news-pubg-mobile-1-0-beta-update-released-for-android-ios-erangel-2-0-640021",
		urlToImage:
			"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/08/pubg-mobile-1596708500.jpg",
		publishedAt: "2020-08-06T10:09:32Z",
		content:
			"Image Source : PIXABAYPUBG Mobile 1.0 Beta update will start rolling out soon.\r\nPUBG Mobile has been in the news lately but not for all the right reasons. In order to keep the hype up among the commu… [+1671 chars]",
	},
	{
		source: { id: null, name: "Hindustan Times" },
		author: "Associated Press | Posted by Niyati Singh",
		title:
			"French President Macron arrives in Beirut to show support after blast - Hindustan Times",
		description:
			"France and other countries have send emergency aid and search-and-rescue teams.",
		url:
			"https://www.hindustantimes.com/world-news/french-president-macron-arrives-in-lebanon-s-beirut-to-show-support-after-blast/story-1Y8A2atFI1sAnvqOv2uOpJ.html",
		urlToImage:
			"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/08/06/Pictures/french-president-macron-meets-anastasiades-counterpart-cyprus_dbe2afde-d7c6-11ea-8122-d3bbe1b049d5.jpg",
		publishedAt: "2020-08-06T09:33:00Z",
		content:
			"French President Emmanuel Macron has arrived in Beirut to express support for Lebanon in the wake of a massive explosion that tore through the capital earlier this week. France and other countries ha… [+1895 chars]",
	},
	{
		source: { id: null, name: "NDTV News" },
		author: null,
		title:
			"Relief For Now For Ashok Gehlot In High Court On 6 MLAs Key For Majority - NDTV",
		description:
			"The Bahujan Samaj Party's appeal seeking a temporary freeze on the merger of its six former legislators with Rajasthan's Congress government, has been dismissed by the High Court, which left the decision to the single bench hearing the case. The decision, exp…",
		url:
			"https://www.ndtv.com/india-news/rajasthan-breather-for-ashok-gehlot-high-court-sends-case-on-6-ex-bsp-mlas-merger-with-congress-back-to-single-bench-2275189",
		urlToImage:
			"https://c.ndtvimg.com/2020-07/1mjuvjlk_ashok-gehlot-raj-bhawan-pti-_625x300_24_July_20.jpg",
		publishedAt: "2020-08-06T09:08:18Z",
		content:
			'<li>"Whatever decision comes on the August 11, we can always go in for appeal before August 14, " said the counsel for Rajasthan assembly Speaker CP Joshi. The assembly session will begin on August 1… [+2204 chars]',
	},
	{
		source: { id: null, name: "Essentially Sports" },
		author: null,
		title:
			'"Mistakes Are Normal" - Rafael Nadal Comes Out in Defense of Novak Djokovic - Essentially Sports',
		description:
			"Rafael Nadal has just defended Novak Djokovic's Adria Tour which led to many players being infected with the coronavirus. Check out what he said.",
		url:
			"http://www.essentiallysports.com/mistakes-are-normal-rafael-nadal-comes-out-in-defense-of-novak-djokovic-atp-tennis-news/",
		urlToImage:
			"https://image-cdn.essentiallysports.com/wp-content/uploads/20200806140720/nadal-djokovic-ap.jpg",
		publishedAt: "2020-08-06T08:52:15Z",
		content:
			"The Adria Tour was an exhibition event that was started by Novak Djokovic. Fan certainly enjoyed watching the event but it sadly had some negative effects. Many players who took part in the event inc… [+1637 chars]",
	},
	{
		source: { id: "the-times-of-india", name: "The Times of India" },
		author: "Siddharth Prabhakar",
		title:
			"Beirut blast impact: Customs reports storage of 740 tonne of ammonium nitrate in Chennai - Times of India",
		description:
			"CHENNAI: As much as 740 tonne of ammonium nitrate, classified as a special category explosive substance, is stored at a container freight station (CFS.",
		url:
			"https://timesofindia.indiatimes.com/city/chennai/beirut-blast-impact-customs-reports-storage-of-740-tonne-of-ammonium-nitrate-in-chennai/articleshow/77389508.cms",
		urlToImage:
			"https://static.toiimg.com/thumb/msid-77389489,width-1070,height-580,imgsize-134776,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
		publishedAt: "2020-08-06T08:33:00Z",
		content: null,
	},
	{
		source: { id: "al-jazeera-english", name: "Al Jazeera English" },
		author: "Al Jazeera",
		title:
			"UN discusses Kashmir for third time since India ended autonomy - Al Jazeera English",
		description:
			"The UN's most powerful body did not take any action or issue a statement after the virtual meeting behind closed doors.",
		url:
			"https://www.aljazeera.com/news/2020/08/discusses-kashmir-time-india-ended-autonomy-200806065413635.html",
		urlToImage:
			"https://www.aljazeera.com/mritems/Images/2020/7/28/b2e59217539f413f9de519862f43175f_18.jpg",
		publishedAt: "2020-08-06T08:19:00Z",
		content:
			"The UN Security Council discussed disputed Kashmir at Pakistan's request on Wednesday for the third time since India's Hindu nationalist government decided to end the Muslim-majority region's semi-au… [+5328 chars]",
	},
	{
		source: { id: null, name: "Firstpost" },
		author: null,
		title:
			"Tick-borne virus spreads across East China, infecting 60 and killing seven so far - Firstpost",
		description:
			"SFTS Virus is not a new virus and China has isolated pathogen of the virus in 2011, and it belongs to the Bunyavirus category.",
		url:
			"https://www.firstpost.com/tech/science/tick-borne-virus-spreads-across-east-china-infecting-60-and-killing-seven-so-far-8677501.html",
		urlToImage:
			"https://images.firstpost.com/wp-content/uploads/2020/02/Father-and-his-son-wear-face-mask-to-prevent-infections-in-Hong-Kong-3-Feb-2020_Miguel-Candela-Poblacion_Getty.jpg",
		publishedAt: "2020-08-06T08:04:26Z",
		content:
			"Press Trust of IndiaAug 06, 2020 13:34:26 IST\r\nA new infectious disease caused by a tick-borne virus has killed seven people and infected 60 others in China, official media here reported on Wednesday… [+1597 chars]",
	},
	{
		source: { id: null, name: "NDTV News" },
		author: "Jagmeet Singh",
		title:
			"Samsung Galaxy Note 20, Samsung Galaxy Note 20 Ultra Price in India Announced, Pre-Bookings Open - Gadgets 360",
		description:
			"Samsung Galaxy Note 20 and Samsung Galaxy Note 20 Ultra 5G price details in India have been revealed officially. Pre-bookings for both the Galaxy Note 20 and Galaxy Note 20 Ultra 5G have also been started in the country.",
		url:
			"https://gadgets.ndtv.com/mobiles/news/samsung-note-20-ultra-price-in-india-rs-77999-104999-galaxy-5g-pre-booking-offers-2275131",
		urlToImage:
			"https://i.gadgets360cdn.com/large/samsung_galaxy_note_20_mystic_green_image_1596700244837.jpg",
		publishedAt: "2020-08-06T07:55:38Z",
		content:
			"Samsung Galaxy Note 20 and Galaxy Note 20 Ultra 5G India price details have been officially revealed. Pre-bookings for both the Galaxy Note 20 and the Galaxy Note 20 Ultra 5G are also open in the cou… [+2579 chars]",
	},
	{
		source: { id: "the-times-of-india", name: "The Times of India" },
		author: "Amit Kumar",
		title:
			"My favourite IPL moment was taking Virat Kohli's wicket last season, says Sunrisers Hyderabad pacer Khale - Times of India",
		description:
			"Cricket News: After Bhuvneshwar Kumar sent Parthiv Patel back in the opening over, Khaleel Ahmed was given the new ball from the other end by Kane Williamson. And,",
		url:
			"https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/my-favourite-ipl-moment-was-taking-virat-kohlis-wicket-last-season-says-sunrisers-hyderabad-pacer-khaleel-ahmed/articleshow/77388695.cms",
		urlToImage:
			"https://static.toiimg.com/thumb/msid-77388750,width-1070,height-580,imgsize-651598,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
		publishedAt: "2020-08-06T07:55:00Z",
		content: null,
	},
];
export default articles;

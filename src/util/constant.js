import {
  Smartphone,
  Users,
  Code,
  Cpu,
  Bot,
  Database,
  Cloud,
  Box,
  Gamepad2,
  Network,
  MemoryStick,
  BrainCircuit,
} from "lucide-react";
import file from "../assets/images/png/file.png";
import graph from "../assets/images/png/graph.png";
import rocket from "../assets/images/png/rocket.png";
import start from "../assets/images/png/start.png";
import integrity from "../assets/images/png/integrity.png";
import quality from "../assets/images/png/quality.png";
import success from "../assets/images/png/success.png";
import Infinite from "../assets/images/png/Infinite.png";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";
//portfolio
import nanoflow from "../assets/portfolio/nanoflow.png";
import padipal from "../assets/portfolio/padipal.png";
import cryptopadie from "../assets/portfolio/cryptopadie.png";

import { CgWebsite } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import {
  MdChatBubbleOutline,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import {
  FaAppStoreIos,
  FaFacebook,
  FaFileContract,
  FaInstagram,
  FaLinkedin,
  FaRobot,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiEthereum, SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaL, FaXTwitter } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import { RiLockPasswordLine } from "react-icons/ri";

// industries
import financial from "../assets/images/industries/Financial Services.webp";
import healthcare from "../assets/images/industries/Healthcare.webp";
import manufacturing from "../assets/images/industries/Manufacturing.webp";
import energy from "../assets/images/industries/Energy.webp";
import retail from "../assets/images/industries/Retail.webp";
import realestate from "../assets/images/industries/Real Estate.webp";
import food from "../assets/images/industries/Food and Beverage.webp";
import transportation from "../assets/images/industries/Transportation.webp";
import communication from "../assets/images/industries/Communication.webp";
import electronics from "../assets/images/industries/Consumer Electronics.webp";
import aerospace from "../assets/images/industries/Aerospace and Defense.webp";
import chemicals from "../assets/images/industries/Chemicals.webp";
import mining from "../assets/images/industries/Mining.webp";
import agriculture from "../assets/images/industries/Agriculture.webp";
import construction from "../assets/images/industries/Construction.webp";
import hospitality from "../assets/images/industries/Hospitality.webp";
import entertainment from "../assets/images/industries/Entertainment.webp";
import consulting from "../assets/images/industries/Consulting.webp";
import legal from "../assets/images/industries/Legal.webp";

export const companyDetails = {
  name: "CoFindinLeads",
  email: "Support@cofindinleads.com",
  phone: "+91-7996767333",
  address:
    "Salarpuria Symbiosis, Ground floor Bannerghatta Road Arekere Village, Bengaluru, Karnataka 560076",
  socialLinks: [
    {
      href: "https://www.facebook.com/share/p/1AhwFR8kso/",
      icon: FaFacebook,
    },
    {
      href: "https://www.instagram.com/cofindinleads/profilecard/?igsh=MWkzenM0enhlejNwZg==",
      icon: FaInstagram,
    },
    {
      href: "https://x.com/Cofindinleads?t=6FZKiH6GeEtH-9EC2ILOrQ&s=09",
      icon: FaXTwitter,
    },
    {
      href: "https://www.linkedin.com/company/106121125/",
      icon: FaLinkedin,
    },
    {
      href: "https://youtube.com/@cofindinleads?si=FgMwOoORMmWE8Qwv",
      icon: FaYoutube,
    },
  ],
  whatsapp: "https://wa.me/919996767333",
};

export const services = [
  {
    title: "Mobile App Development",
    link: "/app-development",
    // link: "mobile-app-development",
    description:
      "Design and deploy robust mobile apps tailored for both iOS and Android, optimized for performance and scalability.",
    icon: Smartphone,
    bgColor: "bg-blue-500",
  },
  {
    title: "UX/UI Design",
    link: "/services/ux-ui-design",
    description:
      "Deliver visually compelling and user-centric designs that elevate digital experiences across devices.",
    icon: Users,
    bgColor: "bg-gray-900",
  },
  {
    title: "AR & VR Development",
    link: "/services/ar-vr-development",
    description:
      "Build immersive augmented and virtual reality solutions for next-gen storytelling, training, and interaction.",
    icon: Box,
    bgColor: "bg-gray-900",
  },
  {
    title: "Full Stack Web Development",
    link: "/web-development",
    description:
      "Engineer high-performing websites and applications using modern front-end and back-end technologies.",
    icon: Code,
    bgColor: "bg-gray-900",
  },
  {
    title: "AI Calling Agency",
    link: "/services/ai-calling-agency",
    description:
      "Revolutionize customer engagement with intelligent voice agents capable of natural, 24/7 conversations.",
    icon: Cpu,
    bgColor: "bg-gray-900",
  },
  {
    title: "Chatbot Development",
    link: "/services/chatbot-development",
    description:
      "Deploy smart chatbots that automate support, enhance engagement, and adapt across platforms.",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "Machine Learning Development",
    link: "/services/ml-development",
    description:
      "Leverage machine learning to automate processes, uncover predictive insights, and optimize data-driven decision-making.",
    icon: MemoryStick,
    bgColor: "bg-gray-900",
  },
  {
    title: "Robot Process Automation",
    link: "/services/robot-process-automation",
    description:
      "Optimize workflows with bots that handle repetitive digital tasks with speed and precision.",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "Data Science & Analytics",
    link: "/services/data-science-analytics",
    description:
      "Turn complex data into clear decisions with custom analytics, modeling, and visualization solutions.",
    icon: Database,
    bgColor: "bg-gray-900",
  },
  {
    title: "Blockchain Development",
    link: "/blockchain-development",
    description:
      "Engineer secure, decentralized applications leveraging blockchain, smart contracts, and Web3 protocols.",
    icon: Cloud,
    bgColor: "bg-gray-900",
  },
  {
    title: "Game Development",
    link: "/services/game-development",
    description:
      "Craft captivating game experiences using innovative mechanics, rich storytelling, and cross-platform support.",
    icon: Gamepad2,
    bgColor: "bg-gray-900",
  },
  {
    title: "IoT Development",
    link: "/services/iot-development",
    description:
      "Create intelligent IoT ecosystems with real-time connectivity, monitoring, and automation at scale.",
    icon: Network,
    bgColor: "bg-gray-900",
  },
  {
    title: "AI Development",
    link: "/ai-development",
    description:
      "Build intelligent systems with advanced AI capabilities, including reasoning, natural language understanding, and autonomous decision-making.",
    icon: BrainCircuit,
    bgColor: "bg-indigo-900",
  },
];

export const whyChooseUs = [
  "Expertise in Emerging Technologies: Our team is skilled in the latest technologies and trends to ensure that your solutions are always ahead of the curve.",
  "Customized Solutions: We don’t believe in one-size-fits-all. Our services are tailored to meet your specific business challenges.",
  "End-to-End Support: From initial consultation to post-launch maintenance, we support you at every step of the development process.",
  "Commitment to Quality: We focus on delivering high-quality solutions that are secure, scalable, and built to last.",
  "Customer-Centric Approach: Your satisfaction is our priority. We work closely with you to understand your needs and deliver the best possible solutions.",
];

export const testimonials = [
  {
    quote:
      "Partnering with CoFindinLeads for our mobile app development was one of the best decisions we made. Their team not only created an app that meets all our needs but also ensured that the user experience was smooth and engaging. The feedback from our customers has been overwhelmingly positive!",
    author: "Jane D., Product Manager at RetailTech",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "We turned to CoFindinLeads to help us revamp our e-commerce website, and we couldn’t be happier with the results. The team truly understood our vision, and they built a site that’s both beautiful and fully functional. Since the launch, we’ve seen a significant uptick in both traffic and sales.",
    author: "John S., CEO at TrendyFashion Co",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "We were initially skeptical about integrating blockchain into our business, but CoFindinLeads walked us through the process. Their team crafted a secure, reliable blockchain solution that has drastically improved our operational efficiency and lowered costs. We’re now reaping the rewards of their innovative approach.",
    author: "Michael T., CTO at FinSec Innovations",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "The AR/VR solution that CoFindinLeads developed for us has completely transformed our employee training process. The immersive experience has resulted in better engagement, faster learning, and higher productivity. We can’t thank them enough for their creative and technical expertise.",
    author: "Amanda W., HR Director at GlobalTraining Solutions",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Working with CoFindinLeads to bring our game concept to life was an amazing experience. Their game developers not only focused on creating an immersive experience but also on crafting an engaging storyline and smooth gameplay. Our game has been a big hit with users, and we owe much of that success to their team.",
    author: "Lucas F., Head of Game Development at Pixel Ventures",
    rating: 5,
    gridClass: "col-span-1",
  },
];

export const highlights = [
  {
    id: 1,
    icon: file,
    title: "Intelligent Solutions for Every Stage",
    description:
      "From bold startups to established enterprises, CoFindinLeads delivers adaptable AI solutions that scale with your vision—enhancing growth, agility, and automation.",
  },
  {
    id: 2,
    icon: graph,
    title: "Harnessing the Quantum Edge",
    description:
      "We fuse quantum computing with advanced AI to unlock faster, smarter decision-making—driving innovation through next-level algorithms and multidimensional computing.",
  },
  {
    id: 3,
    icon: rocket,
    title: "Smarter Automation & Insightful Analytics",
    description:
      "Boost your operations with AI-powered systems that automate tasks, analyze vast data streams, and provide predictive intelligence for confident strategic moves.",
  },
  {
    id: 4,
    icon: start,
    title: "Redefining the Future of Intelligence",
    description:
      "At CoFindinLeads, we go beyond traditional AI—merging machine learning with universal intelligence to craft limitless digital experiences and possibilities.",
  },
];

export const faqs = [
  {
    question: "What is CoFindinLeads?",
    answer: `• CoFindinLeads is a next-gen AI platform combining quantum computing, intelligent automation, and immersive storytelling tools.
• It empowers individuals and businesses to explore advanced AI use cases, craft adaptive narratives, and co-create digital ecosystems.`,
  },
  {
    question: "How does CoFindinLeads work?",
    answer: `• It operates on a modular AI architecture supported by quantum logic and real-time data analysis.
• Users can deploy AI agents, train custom intelligence models, and navigate interactive environments driven by dynamic input.`,
  },
  {
    question: "What are the core features of CoFindinLeads?",
    answer: `• Custom AI Companions – Design intelligent agents tailored to your needs.
• Interactive Knowledge Portals – Engage with evolving, context-aware learning hubs.
• Real-Time Decision Engines – Use quantum-backed AI for advanced analytics and predictions.
• Cross-Domain Integration – Seamlessly connect with APIs, platforms, and tools for enterprise or creative applications.`,
  },
  {
    question: "Who can benefit from using CoFindinLeads?",
    answer: `• Innovators & Startups – Looking to leverage AI for product or service innovation.
• Enterprises – Seeking automation, insight, and scalable intelligence solutions.
• Researchers & Developers – Exploring quantum models and experimental frameworks.
• Creatives & Designers – Building intelligent experiences, worlds, or characters.`,
  },
  {
    question: "How does CoFindinLeads drive innovation?",
    answer: `• Fosters creative problem-solving through AI-assisted ideation tools.
• Encourages collaboration via shared AI networks and idea ecosystems.
• Enhances user experiences with adaptive content and predictive intelligence.`,
  },
  {
    question: "Is there a community around CoFindinLeads?",
    answer: `• Yes, users can connect through discussion hubs, collaborate on AI projects, and share their creations.
• Regular meetups, hackathons, and AI symposia keep the network active and evolving.`,
  },
  {
    question: "How do I get started?",
    answer: `• Sign up through the CoFindinLeads platform.
• Choose a use case (business, research, creative).
• Start exploring tools, training AI agents, or joining existing initiatives.`,
  },
  {
    question: "What pricing plans are available?",
    answer: `• Free Tier – Basic access to AI tools, templates, and public models.
• Pro Tier – Includes enhanced analytics, private AI environments, and early feature access.
• Enterprise – Tailored solutions, dedicated support, and full integration services.`,
  },
  {
    question: "How secure is my data on CoFindinLeads?",
    answer: `• All data is encrypted and protected with quantum-resilient protocols.
• Users have full control over privacy settings and access permissions.
• Optional decentralized storage is available for enhanced data sovereignty.`,
  },
  {
    question: "Can I create and publish my own AI content?",
    answer: `• Absolutely. Users can build intelligent apps, characters, or tools and share them within the platform or externally.
• Monetization options and co-creation tools are available for approved creators.`,
  },
  {
    question: "How does CoFindinLeads support future tech standards?",
    answer: `• Integrates Web 5.0 protocols, decentralized ID, and AI-optimized edge computing.
• Designed to evolve with emerging tech—ensuring long-term relevance and adaptability.`,
  },
  {
    question: "Where can I get help or support?",
    answer: `• Visit the Help Center for guides, tutorials, and forums.
• Use live chat or email support for real-time assistance.
• Join our community to get feedback, share insights, and collaborate.`,
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Innovation",
    description:
      "We believe in the power of new ideas and constantly look for creative ways to use technology to solve problems and deliver value.",
  },
  {
    id: 1,
    icon: quality,
    title: "Collaboration",
    description:
      "Working together is key. By fostering strong partnerships with our clients, we create solutions that align with their vision and objectives.",
  },
  {
    id: 1,
    icon: success,
    title: "Integrity",
    description:
      "We are committed to doing business the right way, with transparency, honesty, and a dedication to building trust with every client.",
  },
  {
    id: 1,
    icon: Infinite,
    title: "Excellence",
    description:
      "We always strive for the best. From the quality of our work to the level of service we provide, we hold ourselves to the highest standards.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "We envision a future where AI, quantum intelligence, and digital consciousness merge to transform the way businesses and individuals interact with technology. By creating seamless bridges between physical and digital realities, we aim to redefine what’s possible in innovation, communication, and growth on a planetary and interstellar scale.",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is simple – to provide businesses with the tools they need to succeed by harnessing the power of cutting-edge technology. We partner with you to understand your objectives and challenges, then create solutions that not only meet those needs but also set you up for long-term success. We’re driven by the belief that technology, when used strategically, can help you achieve more, faster, and with greater impact.",
  },
  {
    title: "Our Journey",
    description:
      "From our origins as a collective of dreamers, engineers, and futurists, CoFindinLeads has grown into a quantum-era tech pioneer. Our journey spans continents and cosmos, helping enterprises navigate the future through advanced AI, interdimensional innovation, and collaborative intelligence. We continue to expand the boundaries of possibility through every partnership we build.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-Commerce Web Applications",
    img: CgWebsite,
    description:
      "We build future-ready e-commerce platforms with integrated AI features such as product recommendations, intelligent search, and automated inventory handling — designed to scale effortlessly and drive consistent growth.",
  },
  {
    id: 2,
    title: "Community & Networking Web Apps",
    img: GoFileMedia,
    description:
      "We create dynamic online communities with real-time feeds, AI-based user suggestions, and content personalization to increase engagement and foster meaningful connections.",
  },
  {
    id: 3,
    title: "Landing Pages & Microsites",
    img: TfiLayoutMediaRightAlt,
    description:
      "Launch sleek, purpose-driven microsites and landing pages with optimized CTAs, analytics integration, and AI-enhanced user journey mapping to convert your visitors into loyal customers.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: MdOutlineDashboardCustomize,
    description:
      "From dashboards to data-driven platforms, we engineer fully customized web solutions equipped with AI automation, tailored workflows, and modern interfaces to match your exact operational needs.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS Applications",
    img: FaAppStoreIos,
    description:
      "We develop cutting-edge iOS apps with native performance, sleek UIs, and intelligent features such as voice recognition, behavior prediction, and user-personalized journeys using the latest Apple technologies.",
  },
  {
    id: 2,
    title: "Android Solutions",
    img: IoLogoAndroid,
    description:
      "Delivering powerful Android apps that scale with your business. We integrate AI for automation, predictive UX, and seamless interactions — all while ensuring strong performance and security.",
  },
  {
    id: 3,
    title: "Cross-Platform Flutter Apps",
    img: SiFlutter,
    description:
      "Using Flutter, we create consistent and responsive experiences across Android and iOS. With embedded AI components, our apps adapt to user behavior, optimize performance, and boost retention.",
  },
  {
    id: 4,
    title: "Hybrid Mobile Apps",
    img: TbDeviceMobileCode,
    description:
      "Crafting hybrid apps that feel native but run everywhere. Our AI-driven hybrid development focuses on agility, smart offline functionality, and cross-platform synchronization to deliver value fast.",
  },
];

// ai development services
export const aiDevelopmentServices = [
  {
    id: 1,
    title: "AI-Powered Chatbots",
    img: MdChatBubbleOutline,
    description:
      "We design intelligent chatbots powered by NLP and machine learning to automate support, qualify leads, and offer personalized conversations across web and mobile platforms.",
  },
  {
    id: 2,
    title: "Predictive Analytics Solutions",
    img: BsGraphUpArrow,
    description:
      "Leverage AI-driven data modeling and forecasting to unlock actionable insights. Our predictive systems help you anticipate trends, optimize operations, and stay ahead of the curve.",
  },
  {
    id: 3,
    title: "Computer Vision Applications",
    img: AiOutlineCamera,
    description:
      "We build advanced computer vision models for facial recognition, object detection, quality inspection, and more — enabling machines to interpret visual data like never before.",
  },
  {
    id: 4,
    title: "AI Automation & Integration",
    img: FaRobot,
    description:
      "From automating repetitive tasks to enhancing workflows with intelligent decision-making, we integrate AI seamlessly into your existing tech stack to improve efficiency and reduce costs.",
  },
];

// blockchain development services
export const blockchainDevelopmentServices = [
  {
    id: 1,
    title: "Smart Contract Development",
    img: FaFileContract,
    description:
      "We create secure, efficient, and tamper-proof smart contracts on platforms like Ethereum and Solana — perfect for automating transactions and agreements without intermediaries.",
  },
  {
    id: 2,
    title: "Decentralized Applications (dApps)",
    img: SiEthereum,
    description:
      "Build powerful, scalable dApps that harness the potential of decentralized ecosystems. From DeFi to NFT platforms, we engineer intuitive and user-centric solutions.",
  },
  {
    id: 3,
    title: "Blockchain Consulting & Architecture",
    img: GiNetworkBars,
    description:
      "We offer strategic guidance, architecture design, and implementation roadmaps to help your business unlock blockchain's potential and choose the right technology stack.",
  },
  {
    id: 4,
    title: "Private & Consortium Blockchains",
    img: RiLockPasswordLine,
    description:
      "Implement permissioned blockchain networks tailored to your enterprise needs — with customizable consensus mechanisms, robust access control, and seamless integrations.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: financial,
    title: "Financial Services",
    description:
      "Modernizing finance with AI-driven fraud detection, smart contracts, and decentralized financial ecosystems.",
  },
  {
    id: 2,
    img: healthcare,
    title: "Healthcare",
    description:
      "Transforming patient care through AI diagnostics, telemedicine, and personalized genomic treatments.",
  },
  {
    id: 3,
    img: manufacturing,
    title: "Manufacturing",
    description:
      "Empowering smart factories with AI automation, digital twins, and predictive maintenance systems.",
  },
  {
    id: 4,
    img: energy,
    title: "Energy",
    description:
      "Advancing clean energy with AI-optimized grids, decentralized solar, and sustainable power innovations.",
  },
  {
    id: 5,
    img: retail,
    title: "Retail",
    description:
      "Reinventing shopping with immersive tech, personalized AI experiences, and blockchain-based transactions.",
  },
  {
    id: 6,
    img: realestate,
    title: "Real Estate",
    description:
      "Redefining property through virtual real estate, smart contracts, and AI-driven valuation systems.",
  },
  {
    id: 7,
    img: food,
    title: "Food and Beverage",
    description:
      "Innovating food systems with smart agriculture, lab-grown alternatives, and blockchain for traceability.",
  },
  {
    id: 8,
    img: transportation,
    title: "Transportation",
    description:
      "Accelerating mobility with autonomous vehicles, AI-powered logistics, and smart infrastructure.",
  },
  {
    id: 9,
    img: communication,
    title: "Communication",
    description:
      "Revolutionizing connection with AI translators, decentralized communication tools, and quantum networks.",
  },
  {
    id: 10,
    img: electronics,
    title: "Consumer Electronics",
    description:
      "Shaping the future with AI-integrated devices, wearable tech, and ambient intelligence.",
  },
  {
    id: 11,
    img: aerospace,
    title: "Aerospace and Defense",
    description:
      "Enhancing aerospace innovation with autonomous systems, space tech, and AI-driven defense strategies.",
  },
  {
    id: 12,
    img: chemicals,
    title: "Chemicals",
    description:
      "Transforming materials science with AI-based molecular design, green chemistry, and smart compounds.",
  },
  {
    id: 13,
    img: mining,
    title: "Mining",
    description:
      "Modernizing mining with autonomous machinery, AI for exploration, and eco-conscious extraction.",
  },
  {
    id: 14,
    img: agriculture,
    title: "Agriculture",
    description:
      "Boosting yield with precision farming, smart irrigation, and AI crop management systems.",
  },
  {
    id: 15,
    img: construction,
    title: "Construction",
    description:
      "Building smart with robotic automation, 3D printing, and real-time AI project analytics.",
  },
  {
    id: 16,
    img: hospitality,
    title: "Hospitality",
    description:
      "Elevating guest experience with AI concierges, smart hotel tech, and immersive booking tools.",
  },
  {
    id: 17,
    img: entertainment,
    title: "Entertainment",
    description:
      "Creating immersive experiences with AI-generated media, virtual concerts, and gamified storytelling.",
  },
  {
    id: 18,
    img: consulting,
    title: "Consulting",
    description:
      "Enhancing insights with predictive analytics, AI strategy modeling, and automation in advisory services.",
  },
  {
    id: 19,
    img: legal,
    title: "Legal",
    description:
      "Reforming law with AI contract analysis, legal bots, and decentralized dispute resolution systems.",
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const blockchainPortfolio = [
  {
    id: 1,
    img: nanoflow,
    title: "Nanoflow",
    link: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
  },
  {
    id: 2,
    img: padipal,
    title: "Padipal",
    link: "https://padiepal.com",
  },
  {
    id: 3,
    img: cryptopadie,
    title: "Cryptopadie",
    link: "https://cryptopadie.com/",
  },
];

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import RemoveFromQueueIcon from "@mui/icons-material/RemoveFromQueue";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MediationIcon from "@mui/icons-material/Mediation";
import InventoryIcon from "@mui/icons-material/Inventory";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CampaignIcon from "@mui/icons-material/Campaign";
import MovingIcon from "@mui/icons-material/Moving";
import PublicIcon from "@mui/icons-material/Public";
import EditIcon from "@mui/icons-material/Edit";
import StarIcon from "@mui/icons-material/Star";
import BoltIcon from "@mui/icons-material/Bolt";

import NavbarCustom from "./NavbarCustom";
import Logo from "~/assets/logo.svg";

function Header() {
    const navbars = [
        {
            id: 0,
            title: "Features",
            navDescription: "Explore the features that help your team succeed",
            navLeftItem: [
                {
                    id: 0,
                    title: "Views",
                    icon: AutoAwesomeIcon,
                    description: "View your team’s projects from every angle.",
                },
                {
                    id: 1,
                    title: "Automation",
                    icon: SmartToyIcon,
                    description: "Automate tasks and workflows with Butler automation.",
                },
                {
                    id: 2,
                    title: "Power-Ups",
                    icon: MovingIcon,
                    description: "Power up your teams by linking their favorite tools with Trello plugins.",
                },
                {
                    id: 3,
                    title: "Templates",
                    icon: RemoveFromQueueIcon,
                    description:
                        "Give your team a blueprint for success with easy-to-use templates from industry leaders and the Trello community.",
                },
                {
                    id: 4,
                    title: "Integrations",
                    icon: MediationIcon,
                    description:
                        "Find the apps your team is already using or discover new ways to get work done in Trello.",
                },
            ],
            navRightItem: {
                title: "Meet Trello",
                description:
                    "Trello makes it easy for your team to get work done. No matter the project, workflow, or type of team, Trello can help keep things organized. It’s simple –  sign-up, create a board, and you’re off! Productivity awaits.",
            },
        },
        {
            id: 1,
            title: "Solutions",
            navDescription: "Take a page out of these pre-built Trello playbooks designed for all teams",
            navLeftItem: [
                {
                    id: 0,
                    title: "Marketing teams",
                    icon: CampaignIcon,
                    description:
                        "Whether launching a new product, campaign, or creating content, Trello helps marketing teams succeed.",
                },
                {
                    id: 1,
                    title: "Product management",
                    icon: InventoryIcon,
                    description:
                        "Use Trello’s management boards and roadmap features to simplify complex projects and processes.",
                },
                {
                    id: 2,
                    title: "Engineering teams",
                    icon: EngineeringIcon,
                    description:
                        "Ship more code, faster, and give your developers the freedom to be more agile with Trello.",
                },
                {
                    id: 3,
                    title: "Design teams",
                    icon: EditIcon,
                    description:
                        "Empower your design teams by using Trello to streamline creative requests and promote more fluid cross-team collaboration.",
                },
                {
                    id: 4,
                    title: "Startups",
                    icon: ShoppingBagIcon,
                    description:
                        "From hitting revenue goals to managing workflows, small businesses thrive with Trello.",
                },
                {
                    id: 5,
                    title: "Remote teams",
                    icon: PublicIcon,
                    description:
                        "Keep your remote team connected and motivated, no matter where they’re located around the world.",
                },
            ],
        },
        {
            id: 2,
            title: "Plans",
            navLeftItem: [
                {
                    id: 0,
                    title: "Standard",
                    icon: LightbulbIcon,
                    description: "For teams that need to manage more work and scale collaboration.",
                },
                {
                    id: 1,
                    title: "Premium",
                    icon: StarIcon,
                    description:
                        "Best for teams up to 100 that need to track multiple projects and visualize work in a variety of ways.",
                },
                {
                    id: 2,
                    title: "Enterprise",
                    icon: ApartmentIcon,
                    description: "Everything your enterprise teams and admins need to manage projects.",
                },
                {
                    id: 3,
                    title: "Free plan",
                    icon: BoltIcon,
                    description: "For individuals or small teams looking to keep work organized.",
                },
            ],
            navRightItem: {
                title: "Compare plans & pricing",
                description:
                    "Whether you’re a team of 2 or 2,000, Trello’s flexible pricing model means you only pay for what you need.",
            },
        },
        {
            id: 3,
            title: "Resources",
            navDescription: "Learn & connect",
            navLeftItem: [
                {
                    id: 0,
                    title: "Trello guide",
                    description:
                        "Our easy to follow workflow guide will take you from project set-up to Trello expert in no time.",
                },
                {
                    id: 1,
                    title: "Remote work guide",
                    description: "The complete guide to setting up your team for remote work success.",
                },
                {
                    id: 2,
                    title: "Webinars",
                    description: "Enjoy our free Trello webinars and become a productivity professional.",
                },
                {
                    id: 3,
                    title: "Customer stories",
                    description: "See how businesses have adopted Trello as a vital part of their workflow.",
                },
                {
                    id: 4,
                    title: "Developers",
                    description: "The sky's the limit in what you can deliver to Trello users in your Power-Up!",
                },
                {
                    id: 5,
                    title: "Help resources",
                    description: "Need help? Articles and FAQs to get you unstuck.",
                },
            ],
            navRightItem: {
                title: "Latest from the Trello blog",
            },
        },
    ];

    const listNavbar = navbars.map((navbar) => (
        <NavbarCustom
            key={navbar.id}
            title={navbar.title}
            navDescription={navbar.navDescription}
            navLeftItem={navbar.navLeftItem}
            navRightItem={navbar.navRightItem}
        />
    ));

    return (
        <header className="h-0 fixed left-0 right-0 top-0 z-[100]">
            <Box
                sx={{
                    ":hover": {
                        backgroundColor: "rgb(255, 255, 255)",
                        boxShadow: "rgba(9, 30, 66, 0.15) 0px 0.5rem 1rem 0px",
                    },
                }}
                className="bg-white shadown-lg fixed top-0 w-full z-100"
            >
                <Box className="flex h-[60px] max-w-[1320px] items-stretch mx-0 my-auto">
                    <Link href="#" className="p-4 flex items-center self-stretch">
                        <img src={Logo} alt="" />
                    </Link>
                    <Box className="flex relative">{listNavbar}</Box>
                    <Box className="flex items-stretch ml-auto">
                        <Link
                            sx={{
                                padding: "0.5rem 1.5rem",
                            }}
                            href="#"
                            className="no-underline flex items-center self-stretch text-lg h-full text-blue-950"
                        >
                            Log in
                        </Link>
                        <Link
                            sx={{
                                padding: "0.5rem 1.5rem",
                                backgroundColor: "rgb(0, 101, 255)",
                            }}
                            href="#"
                            className="text-white no-underline flex items-center self-stretch text-lg h-full hover:bg-blue-900"
                        >
                            Get Trello for free
                        </Link>
                    </Box>
                </Box>
            </Box>
        </header>
    );
}

export default Header;

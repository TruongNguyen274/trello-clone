import { useState } from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import Carousel_Image_Boards from "~/assets/Carousel_Image_Boards_2x.webp";
import Carousel_Image_Lists from "~/assets/Carousel_Image_Lists_2x.webp";
import Carousel_Image_Cards from "~/assets/Carousel_Image_Cards_2x.webp";

import "./index.css";

const courseImage = [
    {
        id: 0,
        image: Carousel_Image_Boards,
    },
    {
        id: 1,
        image: Carousel_Image_Lists,
    },
    {
        id: 2,
        image: Carousel_Image_Cards,
    },
];

const buttons = [
    {
        id: 0,
        title: "Boards",
        description: `Trello boards keep tasks organized and work moving forward. In a
                        glance, see everything from “things to do” to “aww yeah, we did it!”`,
    },
    {
        id: 1,
        title: "Lists",
        description: `The different stages of a task. Start as simple as To Do, Doing
                        or Done—or build a workflow custom fit to your team’s needs.
                        There’s no wrong way to Trello.`,
    },
    {
        id: 2,
        title: "Cards",
        description: `Cards represent tasks and ideas and hold all the information to
                        get the job done. As you make progress, move cards across lists
                        to show their status.`,
    },
];

function Slide() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function showImage(index) {
        setCurrentIndex(index);
    }

    return (
        <>
            <Box
                sx={{
                    background:
                        "linear-gradient(0deg, rgb(230, 252, 255), rgb(255, 255, 255)) 0% 0% / auto repeat scroll padding-box border-box rgb(178, 212, 255)",
                    color: "rgb(9, 30, 66)",
                    backgroundBlendMode: "normal",
                }}
            >
                <Box className="w-full max-w-[1140px] px-4 mx-auto">
                    <Box className="flex justify-start items-start flex-wrap -mx-4">
                        <Box className="p-4 relative scroll-mt-[72px] w-7/12 flex-[0_0_auto] order-1 text-left block">
                            <Box>
                                <Typography variant="body2" className="text-base font-medium uppercase mt-0 mb-2">
                                    Trello 101
                                </Typography>
                                <Typography
                                    variant="h2"
                                    className="pb-4 font-medium mt-0 mb-2"
                                    sx={{ lineHeight: "1.33333", fontSize: "2.25rem" }}
                                >
                                    A productivity powerhouse
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" className="mb-0 text-xl">
                                    Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a
                                    clear view of who’s doing what and what needs to get done. Learn more in our{" "}
                                    <Link
                                        href="#"
                                        sx={{ color: "rgb(0, 82, 204)", textDecorationColor: "rgb(0, 82, 204)" }}
                                    >
                                        guide for getting started
                                    </Link>
                                    .
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="scroll-mt-[72px]">
                    <Box className="w-full max-w-[1140px] px-4 mx-auto">
                        <Box className="flex flex-wrap items-stretch justify-start -mx-4">
                            <Box className="scroll-mt-[72px] w-full mb-0 text-center relative px-4 pt-4 pb-20">
                                <Box className="flex flex-wrap items-stretch justify-start -mx-4 mb-0">
                                    <Box className="py-0 px-4 relative scroll-mt-[72px] text-center block flex-[0_0_auto] w-1/3 order-1">
                                        <Box className="px-4">
                                            <Box className="flex flex-col justify-between gap-4">
                                                {buttons.map((button) => (
                                                    <button
                                                        key={button.id}
                                                        className={
                                                            currentIndex === button.id ? "button-active" : "button"
                                                        }
                                                        onClick={() => showImage(button.id)}
                                                    >
                                                        <Box>
                                                            <Typography
                                                                variant="h3"
                                                                className="text-base font-medium mb-2"
                                                            >
                                                                {button.title}
                                                            </Typography>
                                                            <Typography variant="body2" className="text-base">
                                                                {button.description}
                                                            </Typography>
                                                        </Box>
                                                    </button>
                                                ))}
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="p-4 mt-0 relative scroll-mt-[72px] text-center block flex-[0_0_auto] w-2/3 order-1">
                                        <Box className="flex flex-col gap-6 mb-0">
                                            <Box className="overflow-hidden mb-0">
                                                <Box
                                                    className="flex items-stretch mb-0 transition ease-out duration-300 delay-0 ml-0 gap-4"
                                                    style={{ transform: `translateX(-${currentIndex * 744}px)` }}
                                                >
                                                    {courseImage.map((couse, index) => (
                                                        <img key={index} className="w-full" src={couse.image} />
                                                    ))}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Slide;

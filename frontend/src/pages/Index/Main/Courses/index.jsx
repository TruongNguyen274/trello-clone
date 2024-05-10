import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import CourseData from "./data";
import { useState } from "react";

const iconStyle = {
    backgroundColor: "rgb(255, 255, 255)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    borderColor: "rgb(255, 255, 255)",
    borderRadius: "0.5rem",
    borderStyle: "solid",
    borderWidth: "8px",
    height: "3rem",
    width: "3rem",
    left: "1rem",
    position: "absolute",
    top: "-1.5rem",
};

function Courses() {
    const [current, setCurrent] = useState(0);

    function firstCourse() {
        if (current == 0) {
            setCurrent(current + 0.1);
            setTimeout(() => {
                setCurrent(0);
            }, 1000);
        } else {
            setCurrent(0);
        }
    }

    function lastCourse() {
        if (current == 6) {
            setCurrent(CourseData.length + 0.1);
            setTimeout(() => {
                setCurrent(CourseData.length);
            }, 1000);
        } else {
            setCurrent(CourseData.length);
        }
    }

    return (
        <>
            <Box className="max-w-[1140px] mx-auto px-4 pt-12 w-full bg-white">
                <Box className="relative scroll-mt-[72px] text-left w-full order-1 p-4 -mx-4">
                    <Typography variant="body2" className="font-medium mb-2 mt-0 text-base uppercase">
                        Trello in action
                    </Typography>
                    <Typography variant="h2" className="font-medium pb-4 text-4xl leading-snug">
                        Workflows for any project, big or small
                    </Typography>
                </Box>
            </Box>
            <Box className="pd-8">
                <Box className="max-w-[1140px] mx-auto px-4 w-full">
                    <Box className="flex justify-end items-center gap-6">
                        <Button
                            sx={{
                                "&:hover svg path": {
                                    stroke: "rgb(0, 184, 217)",
                                },
                            }}
                            className="p-0 flex justify-center rounded-full min-w-[30px]"
                            onClick={() => firstCourse()}
                        >
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="rgb(244, 245, 247)"
                                data-metatip="true"
                            >
                                <rect width="30" height="30" rx="15"></rect>
                                <path
                                    d="M16.7167 8.21674L10.2168 14.7167L16.5001 20.9999"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="rgb(122, 134, 154)"
                                ></path>
                            </svg>
                        </Button>
                        <Button
                            sx={{
                                "&:hover svg path": {
                                    stroke: "rgb(0, 184, 217)",
                                },
                            }}
                            className="p-0 flex justify-center rounded-full min-w-[30px]"
                            onClick={() => lastCourse()}
                        >
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="rgb(244, 245, 247)">
                                <rect
                                    x="30"
                                    y="30"
                                    width="30"
                                    height="30"
                                    rx="15"
                                    transform="rotate(-180 30 30)"
                                ></rect>
                                <path
                                    d="M13.2833 21.7833L19.7832 15.2833L13.4999 9.00007"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="rgb(122, 134, 154)"
                                ></path>
                            </svg>
                        </Button>
                    </Box>
                </Box>
                <Box className="overflow-x-hidden">
                    <Box className="max-w-[1140px] mx-auto px-4 w-full">
                        <Box
                            sx={{
                                width: `calc(100% + 2rem)`,
                                transition: "0.6s ease-out 0s",
                                transform: `translateX(-${current * 190}px)`,
                            }}
                            className="flex justify-start items-start -mr-4 flex-nowrap pb-4"
                        >
                            {CourseData.map((course) => (
                                <Box
                                    key={course.id}
                                    className="p-4 relative scroll-mt-[72px] text-center block flex-[0_0_auto] w-1/3"
                                >
                                    <Box
                                        sx={{
                                            boxShadow: "rgba(9, 30, 66, 0.15) 0px 0.5rem 1rem 0px",
                                            "&:hover": {
                                                boxShadow: "rgba(9, 30, 66, 0.25) 0px 0.5rem 1rem 0px",
                                            },
                                        }}
                                        className="m-0 rounded-lg block h-64 w-auto text-left whitespace-normal"
                                    >
                                        <Box
                                            sx={{
                                                height: "3rem",
                                                background: `${course.color}`,
                                                borderTopLeftRadius: "0.5rem",
                                                borderTopRightRadius: "0.5rem",
                                            }}
                                        ></Box>
                                        <Box className="px-6 pt-9 pb-6 relative">
                                            <Box
                                                style={{
                                                    ...iconStyle,
                                                    backgroundImage: `url(${course.icon})`,
                                                }}
                                            ></Box>
                                            <Typography variant="h6" className="mb-2">
                                                {course.title}
                                            </Typography>
                                            <Typography variant="body1" className="mt-2">
                                                {course.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box className="max-w-[1140px] mx-auto px-4 pt-12 w-full bg-white">
                    <Box className="flex flex-wrap -mx-4 items-start justify-start">
                        <Box className="p-4 relative text-left pb-20 flex-[0_0_auto] block w-3/4">
                            <Typography variant="h6" sx={{ color: "#091e42" }} className="mb-0">
                                No need to start from scratch. Jump-start your workflow with a proven playbook designed
                                for different teams. Customize it to make it yours.
                            </Typography>
                        </Box>
                        <Box className="p-4 relative text-right pb-20 flex-[0_0_auto] block w-1/4">
                            <Link
                                sx={{
                                    border: "1px solid rgb(0, 101, 255)",
                                    borderRadius: "0.3rem",
                                }}
                                src="#"
                                className="inline-flex items-center text-center font-normal p-[0.7rem_1rem_0.8rem] no-underline bg-white cursor-pointer"
                            >
                                Explore all Use Cases
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Courses;

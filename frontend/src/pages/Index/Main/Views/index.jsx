import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import ViewsBackground from "~/assets/ViewsBackground_Right_Narrow.svg";
import Timeline from "~/assets/Timeline.webp";
import "./style.css";

function Views() {
    return (
        <>
            <Box
                sx={{
                    background: `url(${ViewsBackground}) left center / contain no-repeat scroll padding-box border-box, url(${ViewsBackground}) right center / contain no-repeat scroll padding-box border-box, linear-gradient(240deg, rgb(0, 184, 217), rgb(0, 101, 255)) 0% 0% / auto repeat scroll padding-box border-box rgb(0, 101, 255)`,
                    backgroundBlendMode: "normal, normal, normal",
                    color: "rgb(255, 255, 255)",
                }}
            >
                <Box className="max-w-[1140px] mx-auto px-4 w-full">
                    <Box className="flex flex-wrap justify-start items-center -mx-4">
                        <Box className="block flex-[0_0_auto] w-full mb-0 py-12 px-4 relative text-center">
                            <Box>
                                <Typography variant="h2" className="font-medium text-4xl mb-2">
                                    See work in a whole new way
                                </Typography>
                                <Typography variant="body1" className="mb-6 text-xl">
                                    View your team’s projects from every angle and bring a fresh perspective to the task
                                    at hand.
                                </Typography>
                            </Box>
                            <Box>
                                <Link
                                    sx={{
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        display: "inline-flex",
                                        textAlign: "center",
                                        transition: "all 250ms ease-out 0s",
                                        backgroundColor: "rgb(255, 255, 255)",
                                        border: "1px solid rgb(0, 101, 255)",
                                        alignItems: "center",
                                        borderRadius: "0.3rem",
                                        fontSize: "1rem",
                                        padding: "0.7rem 1rem 0.8rem",
                                        color: "rgb(23, 43, 77) !important",
                                    }}
                                    href="#"
                                >
                                    Discover all Trello views
                                </Link>
                            </Box>
                        </Box>
                        <Box className="w-full mb-0 p-4 pb-12 relative text-center">
                            <Box className="board">
                                <Box className="w-[55%]">
                                    <img className="w-full" src={Timeline} />
                                </Box>
                                <Box className="w-[45%] px-8 mb-0">
                                    <Box className="flex items-center gap-4 mb-6">
                                        <Box></Box>
                                        <Typography variant="h3" className="font-medium text-base uppercase m-0">
                                            Hit deadlines every time
                                        </Typography>
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

export default Views;

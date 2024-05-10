import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import CollageImage from "~/assets/TrelloUICollage_4x.webp";
import WhiteWaveBg from "~/assets/white-wave-bg.svg";

function Banner() {
    return (
        <>
            <Box
                sx={{
                    background: `url(${WhiteWaveBg}) center bottom -0.5px / 100% 14% no-repeat scroll padding-box border-box, linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180)) 0% 0% / auto repeat scroll padding-box border-box rgb(82, 67, 170)`,
                }}
                className="overflow-x-hidden bg-blend-normal text-white scroll-mt-[72px]"
            >
                <Box className="max-w-[1140px] mx-auto px-4 w-full">
                    <Box className="flex flex-wrap items-center justify-start mx-[-1rem]">
                        <Box className="w-1/2 mb-0 py-32 px-4 block flex-[0_0_auto] scroll-mt-[72px] relative text-left">
                            <Box>
                                <Box>
                                    <Typography variant="h1" className="text-5xl leading-tight font-medium mb-2 mt-0">
                                        Trello brings all your tasks, teammates, and tools together
                                    </Typography>
                                    <Typography variant="body2" className="mb-6 text-xl">
                                        Keep everything in the same place—even if your team isn’t.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="h-2"></Box>
                            <Box component="form" noValidate autoComplete="off" className="flex gap-4 justify-start">
                                <TextField
                                    sx={{
                                        "#outlined-password-input": {
                                            padding: "0.7rem 0.75rem 0.8rem",
                                            border: "1px solid rgb(223, 225, 230)",
                                            transition: "all 250ms ease-out 0s",
                                            borderRadius: "4px",
                                            backgroundColor: "white",
                                        },
                                    }}
                                    id="outlined-password-input"
                                    className="rounded-md w-80 max-w-72 text-xs"
                                    type="email"
                                    placeholder="Email"
                                />
                                <Box className="inline-block">
                                    <Button
                                        variant="contained"
                                        sx={{
                                            padding: "0.9rem 1rem 0.8rem",
                                            backgroundColor: "rgb(0, 101, 255)",
                                            border: "1px solid rgb(0, 101, 255)",
                                            borderRadius: "0.3rem",
                                            fontSize: "1rem",
                                            lineHeight: "1.25",
                                            ":hover": {
                                                backgroundColor: "rgb(7, 71, 166)",
                                                borderColor: "rgb(7, 71, 166)",
                                            },
                                        }}
                                        className="text-white"
                                    >
                                        Sign up - it’s free!
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="w-7/12 ml-[-16.6667%] left-[16.6667%] block flex-[0_0_auto] p-4 my-0 pb-0 pt-32 relative text-center scroll-mt-[72px] z-1">
                            <img className="w-full" src={CollageImage} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Banner;

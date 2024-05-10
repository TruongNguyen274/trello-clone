import { useState } from "react";

import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Typography } from "@mui/material";

const NavbarCustom = (props) => {
    const { title, navDescription, navLeftItem, navRightItem } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                className="pt-5 px-4 pb-4 flex items-center self-stretch text-base normal-case gap-1 hover:bg-white"
                aria-haspopup="true"
                aria-controls={open ? "basic-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                {title}
                <KeyboardArrowDownIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
                sx={{
                    ".MuiMenu-paper": {
                        height: "450px",
                        overflow: "hidden",
                    },
                    ".css-6hp17o-MuiList-root-MuiMenu-list": {
                        padding: 0,
                    },
                }}
            >
                <Box sx={{ display: "block", height: "450px" }}>
                    <Box sx={{ display: "flex", width: "100%" }}>
                        <Box
                            sx={{
                                width: `calc(200px + 50vw)`,
                                boxShadow: "rgba(9, 30, 66, 0.15) 0px 1.5rem 1rem -1rem inset",
                                fontSize: "1rem",
                                padding: "2rem 0px 4.75rem",
                            }}
                        >
                            <Box
                                sx={{
                                    margin: "0px 47.5px 0px auto",
                                    padding: "0px 2rem 0px 1rem",
                                    width: "720px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    gap: "1rem",
                                }}
                            >
                                {navDescription && (
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            borderBottom: "1px solid rgb(223, 225, 230)",
                                            color: "rgb(23, 43, 77)",
                                            fontSize: "1rem",
                                            paddingBottom: "1rem",
                                            width: "100%",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {navDescription}
                                    </Typography>
                                )}
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        margin: "0px -1rem",
                                        gap: "1rem 0px",
                                    }}
                                >
                                    {navLeftItem.map((navbar) => (
                                        <Link
                                            sx={{
                                                width: "33.3333%",
                                                display: "block",
                                                padding: "1rem",
                                                textAlign: "left",
                                                textDecoration: "none",
                                            }}
                                            key={navbar.id}
                                            onClick={handleClose}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    lineHeight: "1rem",
                                                    paddingBottom: "0.6rem",
                                                    alignItems: "center",
                                                }}
                                            >
                                                {navbar.icon && (
                                                    <Box sx={{ padding: "0.14rem 0.71rem 0px 0.15rem" }}>
                                                        <navbar.icon />
                                                    </Box>
                                                )}
                                                {navbar.title && <Typography variant="p">{navbar.title}</Typography>}
                                            </Box>
                                            {navbar.description && (
                                                <Box>
                                                    <Typography
                                                        sx={{
                                                            color: "rgb(80, 95, 121)",
                                                            fontSize: "0.75rem",
                                                            lineHeight: "1rem",
                                                            margin: "0px !important",
                                                        }}
                                                        variant="p"
                                                    >
                                                        {navbar.description}
                                                    </Typography>
                                                </Box>
                                            )}
                                        </Link>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: `calc(-200px + 50vw)`,
                                height: "450px",
                                boxShadow: "rgba(9, 30, 66, 0.15) 0px 1.5rem 1rem -1rem inset",
                                fontSize: "1rem",
                                padding: "2rem 0px 4.75rem",
                                backgroundColor: "rgba(234, 230, 255, 0.4)",
                            }}
                        >
                            <Box
                                sx={{
                                    width: `340px`,
                                    fontSize: "0.75rem",
                                    margin: `0px auto 0px calc(47.5px - 1rem)`,
                                    color: "rgb(80, 95, 121)",
                                }}
                            >
                                <Box sx={{ display: "flex", flexDirection: "column", margin: "-1rem" }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            aliginItem: "center",
                                            gap: "1rem",
                                            padding: "1rem",
                                            textAlign: "left",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        <Box>
                                            <Box
                                                sx={{
                                                    width: `100%`,
                                                }}
                                            >
                                                {navRightItem && navRightItem.title && (
                                                    <Typography
                                                        sx={{
                                                            borderBottom: "1px solid rgb(223, 225, 230)",
                                                            color: "rgb(23, 43, 77)",
                                                            fontSize: "1rem",
                                                            paddingBottom: "1rem",
                                                            width: "100%",
                                                            fontWeight: 500,
                                                            borderBottomColor: "rgb(153, 141, 217)",
                                                            marginBottom: "1rem",
                                                        }}
                                                        variant="h3"
                                                    >
                                                        {navRightItem.title}
                                                    </Typography>
                                                )}
                                            </Box>
                                            <Box sx={{ color: "rgb(80, 95, 121)", fontSize: "0.75rem" }}>
                                                {navRightItem && navRightItem.description && (
                                                    <Typography
                                                        sx={{
                                                            marinBottom: "0.5rem",
                                                        }}
                                                        variant="p"
                                                    >
                                                        {navRightItem.description}
                                                    </Typography>
                                                )}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Menu>
        </div>
    );
};

export default NavbarCustom;

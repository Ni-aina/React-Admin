import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import "react-pro-sidebar/dist/css/styles.css";

import { 
    HomeOutlined,
    PeopleOutlined,
    ContactsOutlined,
    ReceiptOutlined,
    PersonOutlined,
    CalendarTodayOutlined,
    HelpOutlineOutlined,
    BarChartOutlined,
    PieChartOutlineOutlined,
    TimelineOutlined,
    MenuOutlined,
    MapOutlined
 } 
 from "@mui/icons-material";

const Sidebar = ()=> {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`            
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important"
                }
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={()=> setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlined/> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box 
                                display="flex" 
                                justifyContent="space-between" 
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography
                                    variant="h3"
                                    color={colors.grey[100]}
                                >
                                    ADMINIS
                                </Typography>
                                <IconButton>
                                    <MenuOutlined/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {/* USER */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img 
                                    alt="profile-user" 
                                    width="100px"
                                    height="100px"
                                    src={`${process.env.PUBLIC_URL}/assets/user.jpg`} 
                                    style={{ cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography 
                                    variant="h2" 
                                    color={colors.grey[100]} 
                                    fontWeight="bold" 
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Nï Aina
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}
                                >
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Menu>
            </ProSidebar>
        </Box>
    );
}

export default Sidebar;
import { useTheme, Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";

const FAQ = ()=> {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title="FAQ" subTitle="Frequently Asked Questions Page"/>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        An important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Pariatur distinctio numquam reiciendis, 
                        reprehenderit veniam cupiditate fugit officiis vel rerum ex quos. 
                        Non voluptas autem tempore, ex consectetur officiis repudiandae sequi?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        Another important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Pariatur distinctio numquam reiciendis, 
                        reprehenderit veniam cupiditate fugit officiis vel rerum ex quos. 
                        Non voluptas autem tempore, ex consectetur officiis repudiandae sequi?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        Your favorite question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Pariatur distinctio numquam reiciendis, 
                        reprehenderit veniam cupiditate fugit officiis vel rerum ex quos. 
                        Non voluptas autem tempore, ex consectetur officiis repudiandae sequi?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        Some random question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Pariatur distinctio numquam reiciendis, 
                        reprehenderit veniam cupiditate fugit officiis vel rerum ex quos. 
                        Non voluptas autem tempore, ex consectetur officiis repudiandae sequi?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        The last question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Pariatur distinctio numquam reiciendis, 
                        reprehenderit veniam cupiditate fugit officiis vel rerum ex quos. 
                        Non voluptas autem tempore, ex consectetur officiis repudiandae sequi?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default FAQ;
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import moneybee1 from "../../assets/moneybee1.png";
import crypto2 from "../../assets/crypto2.png";
import brainflix2 from "../../assets/brainflix2.png";
import bandsite1 from "../../assets/bandsite1.png";
import github from "../../assets/github.png";
import "./CustomizedAccordions.scss";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderTop: `1px solid white`,
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(226, 199, 14, 0.8)"
      : "rgba(27, 152, 224, 1)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="accordion">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography color="white">
            <span className="accordion__project">MoneyBee</span>
          </Typography>
        </AccordionSummary>{" "}
        <AccordionDetails>
          <Typography>
            A mobile designed web app that gamifies the personal finance
            learning process, aimed at equipping high school and college
            students with financial literacy. Created with React, Node.js, SCSS,
            React Router, CORS, Express. <br />
            <a href="https://github.com/BBaCode/moneybee">
              <img className="accordion__github" alt="github" src={github} />
            </a>
          </Typography>
          <div className="accordion__photo-container">
            <img className="accordion__photo" alt="moneybee" src={moneybee1} />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography color="white">
            <span className="accordion__project">CryptoSearch</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fully Responsive, lightweight cryptocurrency look-up web app that
            allows the user to choose from a variety ofd cryptocurrencies and
            get live stats across trading volumes, pricepoints, descriptions and
            more. Created with React, SCSS, CoinPaprika API, Axios,
            React-Select. <br />
            <a href="https://github.com/BBaCode/cryptosearch">
              <img className="accordion__github" alt="github" src={github} />
            </a>
          </Typography>
          <div className="accordion__photo-container">
            <img className="accordion__photo" alt="crypto" src={crypto2} />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography color="white">
            <span className="accordion__project">BrainFlix</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A mock video streaming platform with fully responsive design that
            allows users to view, upload, edit and delete videos to the site.
            Built with React, SCSS, Node.js, Express, REST APIs.
            <br />
            <a href="https://github.com/BBaCode/brian-bassett-brainflix">
              <img className="accordion__github" alt="github" src={github} />
            </a>
          </Typography>
          <div className="accordion__photo-container">
            <img
              className="accordion__photo"
              alt="brainflix"
              src={brainflix2}
            />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="accordion__last"
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography color="white">
            <span className="accordion__project">Bandsite</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A fully responsive concert / ticket website that allows users to
            view show dates, upload comments and find information about a band
            all in one place. Built with Vanilla JavaScript and SCSS. <br />
            <a href="https://github.com/BBaCode/brian-bassett-bandsite">
              <img className="accordion__github" alt="github" src={github} />
            </a>
          </Typography>
          <div className="accordion__photo-container">
            <img className="accordion__photo" alt="bandsite" src={bandsite1} />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

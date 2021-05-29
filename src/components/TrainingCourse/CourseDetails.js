import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../TrainingCourse/CourseDetails.css";
const CourseDetails = (props) => {
  const { id, module, description } = props.singleCourse;
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "80%",
      margin: "0px auto",
      paddingTop: "15px",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    icon: {
      color: "black",
      "&:hover": {
        color: "black",
      },
    },
  }));
  const classes = useStyles();

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="main-box"
          // activeClassName="selected selectedBox"
        >
          <Typography className={classes.heading}>
            <h5>{module}</h5>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="descriptionStyle">
          <Typography>
            {description.map((liData) => (
              <>
                <li> {liData} </li> <br />
              </>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CourseDetails;
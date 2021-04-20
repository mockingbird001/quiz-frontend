import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import FilterNoneIcon from "@material-ui/icons/FilterNone";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "98%",
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);
const Index = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: "10px", width: "89px", height: "48px" }}>
          CANCEL
        </Button>
        <Button style={{ width: "180px", height: "48px" }}>SAVE</Button>
      </div>
      <div>
        <h6>Questionnaire Detail</h6>
        <TextField id="outlined-basic" label="Name*" variant="outlined" />
      </div>
      <div>
        <div>
          <h6>Question 1</h6>
          <TextField id="outlined-basic" label="Question*" variant="outlined" />
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <FormControlLabel control={<Checkbox name="checkedA" />} label="" />
          <TextField
            id="outlined-basic"
            label="Description*"
            variant="outlined"
          />
          <div>
            <DeleteOutlinedIcon />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <FormControlLabel control={<Checkbox name="checkedA" />} label="" />
          <TextField
            id="outlined-basic"
            label="Description*"
            variant="outlined"
          />
          <div>
            <DeleteOutlinedIcon />
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <Button> + ADD CHOICE</Button>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <FilterNoneIcon style={{ marginTop: "20px" }} />
          <h6>DUPLICATE</h6>
          <DeleteOutlinedIcon
            style={{ marginTop: "20px", marginLeft: "15px" }}
          />
          <h6>DELETE</h6>
        </div>
      </div>
      <div>
        <div>
          <h6>Question 2</h6>
          <TextField id="outlined-basic" label="Question*" variant="outlined" />
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <FormControlLabel control={<Checkbox name="checkedA" />} label="" />
          <TextField
            id="outlined-basic"
            label="Description*"
            variant="outlined"
          />
          <div>
            <DeleteOutlinedIcon />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <FormControlLabel control={<Checkbox name="checkedA" />} label="" />
          <TextField
            id="outlined-basic"
            label="Description*"
            variant="outlined"
          />
          <div>
            <DeleteOutlinedIcon />
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <Button> + ADD CHOICE</Button>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <FilterNoneIcon style={{ marginTop: "20px" }} />
          <h6>DUPLICATE</h6>
          <DeleteOutlinedIcon
            style={{ marginTop: "20px", marginLeft: "15px" }}
          />
          <h6>DELETE</h6>
        </div>
        <div>
          <Button
            style={{
              width: "1344px",
              height: "48px",
              left: "24px",
              top: "24px",
            }}
          >
            + ADD QUESTION
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Index;

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
        width: "85%",
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          background: "#FFFFFF",
        }}
      >
        <Button
          style={{
            marginRight: "10px",
            width: "89px",
            height: "48px",
            border: "1px solid #FF5C00",
            boxSizing: "border-box",
            borderRadius: "8px",
            color: "#FF5C00",
          }}
        >
          CANCEL
        </Button>
        <Button
          style={{
            width: "180px",
            height: "48px",
            background: "#FF5C00",
            borderRadius: "8px",
            color: "#FFFFFF",
          }}
        >
          SAVE
        </Button>
      </div>
      <div
        style={{
          width: "1392px",
          height: "144px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 8px rgba(8,29,31,0.1)",
          borderRadius: "8px 8px 0px 0px",
        }}
      >
        <h6>Questionnaire Detail</h6>
        <TextField
          id="outlined-basic"
          label="Name*"
          variant="outlined"
          style={{
            width: "1344px",
            height: "48px",
          }}
        />
      </div>
      <div
        style={{
          width: "1392px",
          height: "421px",
          top: "145px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 8px rgba(8,29,31,0.1)",
        }}
      >
        <div>
          <h6>Question 1</h6>
          <TextField
            id="outlined-basic"
            label="Question*"
            variant="outlined"
            style={{ width: "1344px", height: "48px" }}
          />
        </div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <FormControlLabel control={<Checkbox name="checkedA" />} label="" />
          <TextField
            id="outlined-basic"
            label="Description*"
            variant="outlined"
            style={{ width: "1200px", height: "64px", left: "5px" }}
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
            style={{ width: "1200px", height: "64px", left: "5px" }}
          />
          <div>
            <DeleteOutlinedIcon />
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <Button style={{ color: "#FF5C00" }}> + ADD CHOICE</Button>
        </div>
        <div
          style={{
            width: "1344px",
            height: "1px",
            bottom: "48px",
            background: "#C2C9D1",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            marginTop: "10px",
            width: "215px",
            height: "24px",
          }}
        >
          <FilterNoneIcon style={{ marginTop: "20px" }} />
          <h6>DUPLICATE</h6>
          <DeleteOutlinedIcon
            style={{ marginTop: "20px", marginLeft: "15px" }}
          />
          <h6>DELETE</h6>
        </div>
      </div>
      <div
        style={{
          width: "1392px",
          height: "421px",
          top: "145px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 8px rgba(8,29,31,0.1)",
        }}
      >
        <div>
          <h6>Question 2</h6>
          <TextField
            id="outlined-basic"
            label="Question*"
            variant="outlined"
            style={{ width: "1344px", height: "48px" }}
          />
        </div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <FormControlLabel control={<Checkbox name="checkedA" />} label="" />
          <TextField
            id="outlined-basic"
            label="Description*"
            variant="outlined"
            style={{ width: "1200px", height: "64px", left: "5px" }}
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
            style={{ width: "1200px", height: "64px", left: "5px" }}
          />
          <div>
            <DeleteOutlinedIcon />
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <Button style={{ color: "#FF5C00" }}> + ADD CHOICE</Button>
        </div>
        <div
          style={{
            width: "1344px",
            height: "1px",
            bottom: "48px",
            background: "#C2C9D1",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            marginTop: "10px",
            width: "215px",
            height: "24px",
          }}
        >
          <FilterNoneIcon style={{ marginTop: "20px" }} />
          <h6>DUPLICATE</h6>
          <DeleteOutlinedIcon
            style={{ marginTop: "20px", marginLeft: "15px" }}
          />
          <h6>DELETE</h6>
        </div>
      </div>
      <div>
        <Button
          style={{
            width: "1344px",
            height: "48px",
            left: "24px",
            top: "24px",
            background: "#FFFFFF",
            border: "1px solid #FF5C00",
            boxSizing: "border-box",
            borderRadius: "8px",
            color: "#FF5C00",
          }}
        >
          + ADD QUESTION
        </Button>
      </div>
    </form>
  );
};

export default Index;

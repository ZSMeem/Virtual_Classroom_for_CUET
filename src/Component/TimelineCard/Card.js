import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import MoreIcon from "@mui/icons-material/More";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function TimeLineCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card sx={{ margin: "auto", width: "80%" }}>
      <CardHeader
        sx={{ textAlign: "left" }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <>
            <IconButton
              aria-label="settings"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
             
            </Menu>
          </>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

      <CardContent>
        <Typography
          sx={{ textAlign: "left" }}
          variant="body2"
          color="text.secondary"
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardContent></CardContent>
      <CardActions sx={{justifyContent:"space-between" }}>
        <Button size="small">
          {" "}
          <CommentIcon sx={{ marginRight: "5px" }} /> Comments 9
        </Button>
        <Button size="small"sx={{}}>
          {" "}
          <MoreIcon sx={{ marginRight: "5px" }} />
          See More
        </Button>
      </CardActions>
    </Card>
  );
}

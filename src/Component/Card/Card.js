import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import SubjectIcon from "@mui/icons-material/Subject";
import "./Card.css";
import { useNavigate } from "react-router-dom";
export default function MCard({c}) {
  console.log("class = =",c);
  const color = c.color;

  const style = {
    backgroundColor: color,
    minWidth: 300,
    maxWidth: 500,
    boxShadow: "-8px 8px 13px 0px rgba(0,0,0,0.75)",
    transition: "transform 1s ease-in-out",
  };

  const imglink = c.link;
  const nevigate = useNavigate();
  const handleClassRoom=()=>{
    localStorage.setItem("classId",c.id);
    localStorage.setItem("classCover",c.link);
    localStorage.setItem("classSubject",c.subject);
    localStorage.setItem("classSection",c.section);
    localStorage.setItem("classCoursecode",c.courseCode);
    localStorage.setItem("classCode",c.code);
    nevigate('/NewsFeed')
  }

  return (
    <div className="Card1">
      <Card sx={style} onM>
        <CardActionArea>
          <div className="Card">
            <CardMedia
              component="img"
              height="140"
              image={imglink}
              alt={c.title}
            />
          </div>
          <CardContent onClick={()=>handleClassRoom(c)}>
            <Typography gutterBottom variant="h5" component="div">
              <SubjectIcon /> {c.courseCode}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {c.subject}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Section: {c.section}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

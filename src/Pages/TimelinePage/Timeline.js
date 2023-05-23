import styles from "./card.module.css";
import GroupOrientation from "../../Component/ButtonGroup/ButtonGroup";
import TimelineCard from "../../Component/TimelineCard/Card";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Paper from "@mui/material/Paper";
import BrushIcon from "@mui/icons-material/Brush";

const Backgroundimage =
  "https://images.unsplash.com/photo-1674231313303-ab9bd1196390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80";

export default function Timeline(props) {
  return (
    <div className={styles.purapage}>
      <div className={styles.baamside}>
        <Button sx={{ marginTop: "20px",textTransform:"none", position:"sticky" ,top:"26px" }} color="primary">
          <ArrowBackIcon />
          <h5 style={{ marginLeft: "3px", paddingTop: "7px" }}>Back</h5>
        </Button>
      </div>
      <div className={styles.majerside}>
        <div className={styles.uporerside} style={{}}>
          <Paper
            sx={{
              height: "100%",
              width: "100%",
              backgroundImage: `url(${Backgroundimage})`,
              
            }}
            elevation={3}
          >
            <div
              style={{
                height: "100%",
                display: "grid",
                gridTemplateColumns: "35px auto auto 25px",
                gridTemplateRows: "15px auto 15px 50px 50px 15px",
              }}
            >
              <div style={{ gridColumn: "3/4", gridRow: "2/3" }}>
                <Button sx={{float:"right"}}variant="contained">
                  <BrushIcon /> Customize
                </Button>
              </div>
              <h3 style={{ textAlign:"left",gridColumn: "2/4", gridRow: "4/5" }}>
                <span style={{color:"white"}}>CSE-321</span>
              </h3>
              <h3 style={{  textAlign:"left",gridColumn: "2/4", gridRow: "5/6" }}>
                <span style={{color:"white"}}>Material Science</span>
              </h3>
            </div>
          </Paper>
        </div>
        <div className={styles.vitorerside}>
          <TimelineCard />
          <TimelineCard />
          <TimelineCard />
        </div>
      </div>
      <div className={styles.daanside}>
        <GroupOrientation />
      </div>
    </div>
  );
}

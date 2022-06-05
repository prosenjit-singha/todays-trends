import React from "react";
import useStyles from "./styles";
import { Grid, Grow, Typography } from "@material-ui/core";

const homePageCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const CommandList = () => {
  const classes = useStyles();
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {homePageCards.map((card, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.infoCard}
            key={i}
          >
            <div
              className={classes.card}
              style={{ backgroundColor: card.color }}
            >
              <Typography variant="h5">{card.title}</Typography>
              {homePageCards ? (
                <Typography variant="h6">
                  <strong>{card.title.split(" ")[2]}</strong>
                  <br />
                  {card.info}
                </Typography>
              ) : null}
              <Typography variant="h6">
                Try saying: <br /> <i>{card.text}</i>
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default CommandList;

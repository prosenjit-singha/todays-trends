import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";

import useStyles from "./style";
import classNames from 'classnames';

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i, activeArticle,
}) => {
  const classes = useStyles();
  return (
    <Card className={ activeArticle === i ? classes.activeCard : classes.card}>
      <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={urlToImage} />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutturBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Read More
        </Button>
        {/* <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography> */}
      </CardActions>
    </Card>
  );
};

export default NewsCard;

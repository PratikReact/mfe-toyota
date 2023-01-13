import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import card from "../../public/assets/img/live-from-space.jpg";

export default function ActionAreaCard() {
  const newsFeeds = [
    {
      title: "Business",
      discription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species",
    },
    {
      title: "Politics",
      discription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species",
    },
    {
      title: "Economic",
      discription:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species",
    },
  ];
  return (
    <React.Fragment>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Latest updates"
        />
        <CardContent>
          {newsFeeds.map((news) => {
            return (
              <Card style={{ marginBottom: 15 }} key={news.title}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      <CardMedia
                        component="img"
                        height="90"
                        width="90"
                        image={card}
                        alt="green iguana"
                      />
                    </Avatar>
                  }
                  title={news.title}
                  subheader={news.discription}
                />
              </Card>
            );
          })}
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

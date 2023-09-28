import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Belogradchik from "./belogradchik.jpg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function Dashboard() {
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = useState(false)

  const handleFav = () => {
    if (active){
        setActive(false)
    }else{
        setActive(true)
    }
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Apo Seksa"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          src={Belogradchik}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Белоградчѝшките скали са скални форми в Западния Предбалкан, в
            южното подножие на Белоградчишкия венец, около Белоградчик и селата
            Боровица, Чифлик и Праужда в област Видин и село Белотинци, област
            Монтана. Обявени са за природна забележителност през 1949 г.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={handleFav} aria-label="add to favorites">
            <FavoriteIcon color={active ? 'success' : 'action'} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Белоградчишките скали представляват система от скални групи и
              единични скални разкрития. Разположени са по дължината на
              Белоградчишкия разлом в Западния Предбалкан на протежение 30 km с
              ширина до 3-5 km, включена между връх Ведерник, намиращ се в
              планинския рид Ведерник, и околностите на село Белотинци. Това са
              естествени скални образувания, на места до 200 m високи, формирани
              в течение на стотици милиони години. Съставени са от утаечни скали
              от пясък и различни, често големи, скални късове, покрити от
              варовити утайки.
            </Typography>
            <Typography paragraph>
              Ерозията на водата, вятърът и колебанията на температурата са
              моделирали различни скални фигури, наподобяващи митични същества,
              човешки силуети, животни и птици. Червеникавият им цвят е получен
              от железните оксиди и хидрокисиди, допълнително оцветяване на
              скалите придават сивите и кремави варовици. Зъбери, отвесни скални
              стени, пропасти, скални колони ограждат естествени крепости,
              използвани от хората през вековете. В пясъчника и варовика са
              образувани над 100 пещери. Растителността по скалите е слабо
              развита. Срещат се следните видове висши растения: скална ауриния,
              полегнала песъчарка, северно изтривниче, еленова камбанка, келяв
              габър, полски рожец, стенна двуредка, стенна рупа, горска
              власатка, едроцветен тънконог, ресничеста бисерка, гребенест
              живовляк, обикновена хрущялка, бяла тлъстига, испанска тлъстига,
              мраморен дебелец, ванерово скалниче, люляк и др
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

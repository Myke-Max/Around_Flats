import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import {
  List,
  ListItem,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Box,
} from '@mui/material';

import useStyles from './useStyleMUI';

interface Props {
  activeItem: number | string | null;
  cards: {
    id: string;
    imgUrl: string;
    location: string;
    title: string;
    description: string;
    price: string;
  }[];
}

const FlatsList = ({ cards, activeItem }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <List>
      {cards?.map(({ imgUrl, location, id, description, price }) => {
        const activeCard = id === activeItem;
        return (
          <ListItem key={id}>
            <Card className={classes.card} elevation={activeCard ? 3 : 1}>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                image={imgUrl}
                alt="flats"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" color="common.black">
                  {price}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="p"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  {location}
                </Typography>
                <Box className={classes.descriptionBox}>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="p"
                    color="text.secondary"
                    sx={{ mt: 3 }}
                  >
                    {description}
                  </Typography>
                </Box>

                <CardActions>
                  <Link
                    component={RouterLink}
                    to={`/flats/${id}`}
                    className={classes.detailsButton}
                    color="primary"
                  >
                    Details
                  </Link>
                </CardActions>
              </CardContent>
            </Card>
          </ListItem>
        );
      })}
    </List>
  );
};

export default FlatsList;

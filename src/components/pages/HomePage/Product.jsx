import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { useHistory } from 'react-router-dom';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 350,
    boxShadow: '0px 6px 8px 10px #cce',
    transition: 'all .2s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.07)',
    },
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
}));

// eslint-disable-next-line react/prop-types
export default function Product({
  name = 'IPhone 12',
  price = '84000',
  imageUrl = 'https://picsum.photos/200/300',
  productId,
  setIsModalOpen,
}) {
  const classes = useStyles();

  const history = useHistory();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleClick = () => {
    history.push(`/${productId}`);
  };

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardHeader
        style={{ paddingBottom: 0 }}
        title={name}
        subheader="by Apple"
      />
      <CardMedia className={classes.media} image={imageUrl} title={name} />
      <CardContent style={{ paddingBottom: 0 }}>
        <Typography variant="h6" color="textSecondary" component="p">
          {price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          4.5/5
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{ paddingTop: 0 }}>
        <IconButton aria-label="add to favorites" onClick={handleAddToCart}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          aria-label="add-to-cart"
          style={{
            marginLeft: 70,
          }}
          onClick={handleAddToCart}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

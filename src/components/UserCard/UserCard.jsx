import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import './UserCard.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    color: 'rgba(0,0,0,.65)'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  actionButtons: {
    padding: '12px 8px',
    borderTop: '1px solid #e8e8e8',
    background: '#fafafa'
  },
  actionButton: {
      textAlign: 'center',
      borderRight: '1px solid #e8e8e8',
      '&:last-child': {
        borderRight: 'none'
      } 
  },
  actionIcon: {
    padding: '0px 12px'
  },
  likeIcon: {
    color: 'rgb(255, 0, 0)'
  },
  editIcon: {
    '&:hover':{
      color: '#1890ff'
    }
  },
  deleteIcon: {
    '&:hover': {
      color: '#1890ff'
    }
  }
}));



const UserCard = () => {
  const classes = useStyles();
  
  const [isLiked, setIsLiked] = useState(false);
  const [secondary, setSecondary] = React.useState(true);

  const handleLikeButton = (islike) => {
    console.log("I am in setlikeicon");
    setIsLiked(islike);
  }

  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  return (
    <Card className={classes.root}>
      {/* <CardMedia
        className={classes.media}
        image="https://avatars.dicebear.com/api/avataaars/sam.svg"
        title="Paella dish"
      /> */}
      <div className="userImage">
        <img src="https://avatars.dicebear.com/api/avataaars/sam.svg" alt=""/>
      </div>
      <CardContent>
         <div className="userDetailsContainer">
           <h3 className="userName">Abhishek Batra</h3>
           <div className="userDetails">
             <div className="userDetail"><span><MailOutlineIcon/> </span><span className="userDetailText">abhishekbatra001@gmail.com</span></div>
             <div className="userDetail"><span><PhoneIcon /></span><span className="userDetailText">9910828072</span></div>
             <div className="userDetail"><span><LanguageIcon /></span><span className="userDetailText">devabhishek.ai</span></div>
           </div>
         </div>
      </CardContent>
      <CardActions disableSpacing className={classes.actionButtons}>
        <Grid item xs={4} className={classes.actionButton}>
            <IconButton aria-label="add to favorites" onClick={()=>handleLikeButton(!isLiked)} className={clsx(classes.actionIcon, classes.likeIcon)}>
              {(isLiked)?<FavoriteIcon  />:
              <FavoriteBorderIcon />}
            </IconButton>
        </Grid>
        <Grid item xs={4} className={classes.actionButton}>
            <IconButton aria-label="share" className={clsx(classes.actionIcon, classes.editIcon)}>
                <EditIcon />
            </IconButton>
        </Grid>
        <Grid item xs={4} className={classes.actionButton}>
            <IconButton className={clsx(classes.actionIcon, classes.deleteIcon)}>
                <DeleteIcon />
            </IconButton>          
        </Grid>
      </CardActions>
    </Card>
  );
}

export default UserCard

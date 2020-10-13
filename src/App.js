import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
  App: {
    backgroundColor: "#f5f5f5"
  },
  
  appBar: {
    backgroundColor: "#ebfffb" 
  },
  
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url('https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },

  blogsContainer: {
    paddingTop: theme.spacing(3)
  },

  blogTitle: {
    fontWeight: 525,
    paddingBottom: theme.spacing(3)
  },

  blogGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  card:{
    maxWidth: "100%",
    
  }, 

  media: {
    height: 470,
    [theme.breakpoints.down("sm")]: {
      height: 300
    },
    [theme.breakpoints.down("xs")]: {
      height: 240
    }
  },

  cardActions:{
    display: "flex",
    margin: "0 5px",
    justifyContent: "space-between"
  },

  author:{
    display: "flex"
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.App}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar >
          <Typography variant="h5" color="primary">
            My Blog
          </Typography>
        </Toolbar>
      </AppBar>

      <Box className = {classes.hero}>
        <Box>React Blog</Box>
      </Box>
      
      <Container maxWidth = "lg" className = {classes.blogsContainer}>
        <Typography variant="h4" color="primary" className = {classes.blogTitle}>
          News
        </Typography>

        <Grid container spacing = {3} className={classes.blogGrid}>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1526920929362-5b26677c148c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="inherit" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Samuel Smith
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>

            </Card>
          </Grid>
            
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1537963447914-dbc04b81de27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="inherit" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Kyle Krein
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 12, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>

            </Card>
          </Grid>
          
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://3dnews.ru/assets/external/illustrations/2020/05/13/1010864/Mafia-DE_2.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Mafia: Definitive Edition
                  </Typography>
                  <Typography variant="body2" color="inherit" component="p">
                    Ремейк был выпущен для Microsoft Windows, PlayStation 4 и Xbox One 25 сентября 2020 года. 
                    Игра продаётся как в составе сборника Mafia: Trilogy, включающий в себя переиздания Mafia II 
                    и Mafia III, так и отдельно.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Samuel Smith
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 11, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>

            </Card>
          </Grid>

          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1265&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="inherit" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Kyle Krein
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 11, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>

            </Card>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default App;

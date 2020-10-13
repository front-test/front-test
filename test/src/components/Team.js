import React from 'react';
import { TeamWrapper, useStyles } from '../styles/Team.style';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IMG1 from '../assets/Group 1952@2x.png';
import IMG2 from '../assets/Group 1958@2x.png';
import IMG3 from '../assets/Group 1956@2x.png';

const Team = () => {
  const classes = useStyles();

  return (
    <TeamWrapper>
      <h2>
        What is the <br /> Speciality Of Us?
      </h2>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} md={4} lg={3}>
            <Card className={classes.card} elevation={4}>
              <CardMedia className={classes.cardMedia} image={IMG1} title="img1" />
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" component="h3">
                  Quick Response
                </Typography>
                <Typography variant="caption" color="textSecondary" component="p">
                  Mollit sit pariatur labore adipisicing velit pariatur non irure. Mollit sit pariatur labore
                  adipisicing velit pariatur non irure.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Card className={classes.card} elevation={4}>
              <CardMedia className={classes.cardMedia} image={IMG2} title="img2" />
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" component="h3">
                  Great Communication
                </Typography>
                <Typography variant="caption" color="textSecondary" component="p">
                  Mollit sit pariatur labore adipisicing velit pariatur non irure. Mollit sit pariatur labore
                  adipisicing velit pariatur non irure.{' '}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Card className={classes.card} elevation={4}>
              <CardMedia className={classes.cardMedia} image={IMG3} title="img3" />
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" component="h3">
                  Customer Satisfaction
                </Typography>
                <Typography variant="caption" color="textSecondary" component="p">
                  Mollit sit pariatur labore adipisicing velit pariatur non irure. Mollit sit pariatur labore
                  adipisicing velit pariatur non irure.{' '}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </TeamWrapper>
  );
};

export { Team };

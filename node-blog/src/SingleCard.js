import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function SingleCard(props) {

  return (
    <Card className="card">
      <CardContent>
        <Typography className="title">
          {props.user.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SingleCard;
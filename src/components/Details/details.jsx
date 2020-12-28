import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

const details = () => {
  return (
    <Card>
      <CardHeader title="Income" />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        <Doughnut data="DATA"></Doughnut>
      </CardContent>
    </Card>
  );
};

export default details;

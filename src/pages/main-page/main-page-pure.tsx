import React from 'react';
import {Grid, Card, Typography, CardContent, Container, CardHeader, Box} from "@material-ui/core";

interface Props {
  temperature?: {
    location: string;
    temperature: string;
    time: string;
  }
}
export const MainPagePure: React.FC<Props> = ({ temperature }) => (
  <Container maxWidth="sm" component="main">
    <Grid container style={{padding: 24}}>
      <div>
        <Typography gutterBottom component="h1">Temperatures from API:</Typography>
        {temperature && (
          <Card >
            <CardHeader
              title={temperature.location}
              titleTypographyProps={{ align: 'center' }}
              subheaderTypographyProps={{ align: 'center' }}
            />
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <Typography variant="h5" color="textPrimary">
                  Yr:&nbsp;
                </Typography>
                <Typography variant="h5" color={Number(temperature.temperature) > 0 ? 'secondary' : 'primary'}>
                  {temperature.temperature}°
                </Typography>
              </Box>
              <Typography variant="h6" color="textSecondary">
                {temperature.time}
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </Grid>
  </Container>
);

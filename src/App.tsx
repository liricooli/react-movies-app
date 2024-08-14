import {
  Container,
  TextField,
  Button,
  Grid,
} from '@mui/material';

import './App.css'

function App() {

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem', height: '100vh' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            fullWidth
            label="Search Movies"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={4} style={{ marginTop: '2rem' }}>
          <Grid item xs={12} sm={6} md={4} >
            Results...
          </Grid>
      </Grid>
    </Container>
  );
};

export default App

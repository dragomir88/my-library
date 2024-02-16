import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';

function App() {
  return (
    <Container maxWidth="lg"> {/* Adjust the maxWidth as needed */}
      <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            My Library
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={6}> {/* Adjust the sizes as needed */}
          <BookForm />
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <BookList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

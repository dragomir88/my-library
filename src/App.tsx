import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Fade } from '@mui/material';
import BookList from './components/BookList/BookList';
import Header from './components/Header/Header';
import AddBook from './components/AddBook/AddBook';

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [showAddBook, setShowAddBook] = useState(false);
  const [showBookList, setShowBookList] = useState(false);

  useEffect(() => {
    const headerTimer = setTimeout(() => setShowHeader(true), 300); 
    const addBookTimer = setTimeout(() => setShowAddBook(true), 600);
    const bookListTimer = setTimeout(() => setShowBookList(true), 900); 
    
    return () => {
      clearTimeout(headerTimer);
      clearTimeout(addBookTimer);
      clearTimeout(bookListTimer);
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} direction="column" justifyContent="center" style={{ minHeight: '100vh' }}>
        <Fade in={showHeader} timeout={500}>
          <Grid item xs={12}>
            <Header />
          </Grid>
        </Fade>
        <Fade in={showAddBook} timeout={500}>
          <Grid item container justifyContent="center" xs={12} md={8} lg={6}>
            <AddBook />
          </Grid>
        </Fade>
        <Fade in={showBookList} timeout={500}>
          <Grid item container justifyContent="center" xs={12} md={8} lg={6}>
            <BookList />
          </Grid>
        </Fade>
      </Grid>
    </Container>
  );
}

export default App;

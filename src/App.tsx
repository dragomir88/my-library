import BookForm from "./components/BookForm/BookForm"
import BookList from "./components/BookList/BookList"

 
function App() {
 
  return (
    <>
      <h1>My Library</h1>
      <p>
        Welcome to my library! This is a simple example of how to create a library using React and TypeScript.
      </p>
      <BookForm />
      <BookList />
      
    </>
  )
}

export default App

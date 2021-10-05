import { useState } from 'react';
import './App.css';
import { useSelector } from "react-redux"
import { useGetAllbooksQuery,useAddBookMutation } from './services/book'

function App() {
  const {getAllbooks,data, error, isLoading } = useGetAllbooksQuery()
  const [bookName,setBookName] = useState('')
  const [addBook, { isDataLoading }] = x()
  const [authorName,setAuthorName] = useState('')
  const handleAddBook = async(e) => {
    try {
      let data ={
        authorName,
        bookName,
        id: new Date().getTime().toString(),
      }
      await addBook(data)
    } catch(err) {
      console.log(err)
    }
  }
  
  return (
    <div className="App">
      <form>
        <div className="textFieldContainer">
          <div className="textFieldBox">
            <label>Book Name</label>
            <input type="text" name="bookName" value={bookName} onChange={(e)=>setBookName(e.target.value)} />
          </div>
          <div className="textFieldBox">
            <label>Author Name</label>
            <input type="text" name="authorName" value={authorName} onChange={(e)=>setAuthorName(e.target.value)} />
          </div>
        </div>
        <div  className="AddBookButtonBox">
          <button type="button" className="addbookBtn" onClick={(e)=>handleAddBook(e)}>Add Book</button>
        </div>
      </form>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.map((item)=>
       
          <h3 key={item.id}>{item.bookName}</h3>
          
        )
      ) : null}
    </div>
  );
}

export default App;

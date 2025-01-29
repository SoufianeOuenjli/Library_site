import React, { useState,useEffect } from 'react'
import Book from './Book'
import Search from './Search'
import Spell from './Spell'
import Character from './Character'

const Books = () => {
    const [books, setBooks] = useState([])
    const [searchedBook, setSearchedBook] = useState([])
    const [characters, setCharacters] = useState([])
    const [spells, setSpells] = useState([])
    const [categories, setCategories] = useState('1')
    const [searchTerm, setSearchTerm] = useState('')
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const responses = await Promise.all([
                    fetch('https://potterapi-fedeperin.vercel.app/en/books'),
                    fetch('https://potterapi-fedeperin.vercel.app/en/spells'),
                    fetch('https://potterapi-fedeperin.vercel.app/en/characters')
                ]);

                const [booksData, spellsData, charactersData] = await Promise.all(responses.map(response => response.json()));

                setBooks(booksData);
                setSearchedBook(booksData);
                setSpells(spellsData);
                setCharacters(charactersData);
                // console.log(booksData);
                // console.log(spellsData);
                // console.log(charactersData);

            } catch (error) {
                console.log('ERROR == ', error)
            }
        }

        fetchBooks();
    }, [])

    function searchingBooks(term) {
        if (term === '') {
            setSearchedBook(books); // Reset to all books if search term is empty
        } else {
            const filteredBooks = books.filter((book) => 
                book.title.toLowerCase().includes(term.toLowerCase())
            );
            setSearchedBook(filteredBooks);
        }
    }
    


  return (
    <>
        <div className="container py-5">
            <h1 className="text-center mb-4 text-dark fw-bold">📚 Book Collection</h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} categories={categories} setCategories={setCategories} searchingBooks={searchingBooks} />
            {categories === "1" ? (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {searchedBook.map((book) => (
                        <div className="col d-flex justify-content-center" key={book.id}>
                            <Book book={book} />
                        </div>
                    ))}
                </div>
            ) : categories === "2" ? (
                <div className="row row-cols-1 row-cols-md-3 g-4"> 
                    {spells.map((spell) => (
                        <div className="col d-flex justify-content-center" key={spell.id}>
                            <Spell spell={spell} />
                        </div>
                    ))}
                </div>
            ) : categories === "3" ? (
                <div className="row row-cols-1 row-cols-md-3 g-4"> 
                    {characters.map((character) => (
                        <div className="col d-flex justify-content-center" key={character.id}>
                        <Character character={character} />
                    </div>
                    ))}
                </div>
            ): null }           
        </div>
    </>
  )
}

export default Books
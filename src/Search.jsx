import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search({searchTerm, setSearchTerm, categories,setCategories, searchingBooks}) {
  
    return (
      <>
        <div className="input-group mb-4">
            <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></span>
            <select className="form-select col-2" aria-label="Default select example" onChange={(e)=>{setCategories(e.target.value)}}>
                <option value="">Select a category</option>
                <option value="1">Books</option>
                <option value="2">Spells</option>
                <option value="3">Characters</option>
            </select>
            <input type="text" onChange={(e)=>{setSearchTerm(e.target.value); searchingBooks(e.target.value)}} className="form-control" placeholder="Search for a book..." aria-label="Search" aria-describedby="basic-addon1" />
        </div>
      </>
    )
  }
  
  export default Search
  
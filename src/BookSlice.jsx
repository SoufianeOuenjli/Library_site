import {createSlice} from '@reduxjs/toolkit'

export const bookSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        setBooks: (state, action) => {console.log('action.payload');}
    }
})

export const {setBooks} = bookSlice.actions
export default bookSlice.reducer
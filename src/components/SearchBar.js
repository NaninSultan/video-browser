import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({ searchHandler }) => {

    const [keyword, setKeyword] = useState('');

    const submitHandler = (e) => {
        if (e.key === 'Enter') {
        searchHandler(keyword);
        }
    }

    return (
        <Paper elevation={6} style={{ padding: "25px" }}>
            <TextField
                fullWidth
                label="Search..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyPress={submitHandler}
            />
        </Paper>
    )

}

export default SearchBar;
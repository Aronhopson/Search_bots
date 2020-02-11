import React from 'react'

const SearchBots = ({SearchChange}) => {
    return (
        <div className="pa2">
            <input
            type="search"
            className="pa3 ba b--green bg-lightest-blue"
            placeholder="search"
            onChange={SearchChange}
            />
        </div>
    )
}

export default SearchBots

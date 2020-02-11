import React from 'react'

const Card = ({ name, email, id }) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?100*100`} />
            <div>{name}</div>
        </div>
    )
}

export default Card

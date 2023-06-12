import React from 'react'

function BookTripComponent() {
  return (
    <div>
        <h1>Book a trip</h1>

        <form>
            <label>Name:</label>
            <input type='text' id='name'></input>
            <br></br>
            <label>Date:</label>
            <input type='date'></input>
            <br></br>
            <label>From:</label>
            <input type='text' id='from'></input>
            <br></br>
            <label>To:</label>
            <input type='text' id='to'></input>
            <br></br>
            <button type='submit'>Book a trip</button>
        </form>
    </div>
  )
}

export default BookTripComponent
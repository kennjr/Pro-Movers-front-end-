import "../css/Booking-form.css";

const Book = () => {
  return (
    <>
      <div className="book">
        <form action="" className="book-form">
          <div className="book-form-title">
            <p>Book Your mover <br /></p> 
          </div>
          <div className="currentLocation-input">
            <input
              type="text"
              name="currentLocation"
              id="currentLocation"
              placeholder="currentLocation"
            />
          </div>
          <div className=" newLocation">
            <input
              type="text"
              name="newLocation"
              id="newLocation"
              placeholder="New location"
            />
          </div>
          <div className="mover">
            <input type="text" name="mover" id="mover" placeholder="mover" />
          </div>
          <div className="movingDate">
            <input
              type="date"
              name="movingDate"
              id="movingDate"
              placeholder="Your moving date"
            />
          </div>
          <div className=" package">
            <input
              type="text"
              name="package"
              id="package"
              placeholder="What we are moving for you"
            />
          </div>
          <div className="packageDescription">
            
            <textarea name="packageDescription" id="packageDescription" cols="30" rows="8" placeholder="Describe your package"></textarea>
          </div>

          <div className="Book">
            <button type="submit">Book</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Book;

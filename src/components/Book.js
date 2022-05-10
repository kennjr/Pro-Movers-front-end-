import "../css/Booking-form.css";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

const Book = ({onBook},props) => {
  
  const [currentLocation,setCurrentLocation]=useState('');
  const [newLocation,setNewLocation]=useState('');
  const [mover,setMover]=useState('');
  const [movingDate, setMovingDate] = useState("");
  const [Package,setPackage]=useState('');
  const [packageDescription,setPackageDescription]=useState('')

  useEffect(()=>{
    setMover(id);
  })

  const onSubmit= (e) =>{
    e.preventDefault()
    if(!currentLocation || !newLocation || !mover || !Package || !movingDate || !packageDescription){
      alert('please ensure to fill all fields')
      return
    }
   

    onBook({currentLocation,newLocation,mover,movingDate,Package,packageDescription})
        setCurrentLocation('');
        setNewLocation('');
        setMover('');
        setMovingDate('')
        setPackage('');
        setPackageDescription('')
  }
   const {id,name} = useParams();
  return (
    <>
      <div className="book">
        <form action="" className="book-form" onSubmit={onSubmit}>
          <div className="book-form-title">
            <p>
              Book Your mover <br />
             {/* {id} 
             {name} */}
            </p>
          </div>
          <div className="currentLocation-input">
            <input
              type="text"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              name="currentLocation"
              id="currentLocation"
              placeholder="current location"
            />
          </div>
          <div className=" newLocation">
            <input
              type="text"
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
              name="newLocation"
              id="newLocation"
              placeholder="New location"
            />
          </div>
          <div className="mover">
            <input
              type="text"
              name="mover"
              id="mover"
              placeholder="mover"
              value={name}
              onChange={(e) =>setMover(e.target.value)}
            />
          </div>
          <div className="movingDate">
            <input
              type="date"
              value={movingDate}
              onChange={(e) => setMovingDate(e.target.value)}
              name="movingDate"
              id="movingDate"
              placeholder="Your moving date"
            />
          </div>
          <div className=" Package">
            <input
              type="text"
              value={Package}
              onChange={(e) => setPackage(e.target.value)}
              name="Package"
              id="Package"
              placeholder="What we are moving for you"
            />
          </div>
          <div className="packageDescription">
            <textarea
              name="packageDescription"
              id="packageDescription"
              cols="30"
              rows="8"
              placeholder="Describe your package"
              value={packageDescription}
              onChange={(e) => setPackageDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="Book">
            <button type="submit" value="book">
              Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Book ;

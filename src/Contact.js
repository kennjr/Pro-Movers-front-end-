import React, { useState } from "react";




function Contact(){
  const [users, setUserInfo] = React.useState(null);
  React.useEffect(() => {
     getUsers()
  }, []);
    let getUsers =async()=>{
    let response= await fetch('https://api-promovers.herokuapp.com/users/')
    let data = await response.json()
    console.log (data)
    setUserInfo(data)
    }

  
   

  // const InputEvent = (event) => {
  //   const { name, value } = event.target;

  //   setData((preVal) => {
  //     return {
  //       ...preVal,
  //       [name]: value,
  //     };
  //   });
  // };

  // const formSubmit = (e) => {
  //   e.preventDefault();
  //   alert(
  //     `My name is ${data.fullname}. My mobile number is ${data.phone} and location is ${data.location}, Here is what I watn to say ${data.msg}`
  //   );
  // };

  return (
    <div>
      

    </div>
    // <>

    //                <div className="col-md-4 col-12 mx-auto">
    //                   <div className="card cardm profile">
    //                     <img className="imgg3" src={require('../src/images/box.jpg')} />
    //                     <p className="card-text ezee">
    //                         crabs.Ke
    //                       </p>
    //                       <div className="btn">
    //                       <button className="moverbutton" type="submit">
    //                         Mover
    //                     </button>

    //                     <button className="moverbutton" type="submit">
    //                         Logout
    //                     </button>
    //                       </div>
                        

    //                     <div className="card-body">
                          
    //                     </div>
    //                   </div>
    //                 </div>

    //                 <div className="col-md-4 col-12 mx-auto ">
    //                   <div className="card cardm bio">
    //                     <div className="card-body">
    //                       <p className="card-text biotext">
                          
    //                       </p>
    //                       <p>Don’t gain the world and <br></br>lose your soul.</p>

    //                     </div>
    //                   </div>
    //                 </div>

    //   <div className="container contact_div profileform">
    //     <div className="row">
    //       <div className="col-md-6 col-10 mx-auto">
    //         <form onSubmit={formSubmit}>
    //           <div class="mb-3">
    //             <label for="exampleFormControlInput1" class="form-label">
    //               FullName
    //             </label>
    //             <input
    //               type="text"
    //               class="form-control"
    //               id="exampleFormControlInput1"
    //               name="fullname"
    //               value={data.fullname}
    //               onChange={InputEvent}
    //               placeholder="Enter your name"
    //             />
    //           </div>
    //           <div class="mb-3">
    //             <label for="exampleFormControlInput1" class="form-label">
    //               Contact
    //             </label>
    //             <input
    //               type="number"
    //               class="form-control"
    //               id="exampleFormControlInput1"
    //               name="phone"
    //               value={data.phone}
    //               onChange={InputEvent}
    //               placeholder="mobile number"
    //             />
    //           </div>
    //           <div class="mb-3">
    //             <label for="exampleFormControlInput1" class="form-label">
    //               Location
    //             </label>
    //             <input
    //               type="text"
    //               class="form-control"
    //               id="exampleFormControlInput1"
    //               name="location"
    //               value={data.location}
    //               onChange={InputEvent}
    //               placeholder="Enter your current Location"
    //             />
    //           </div>


    //           <div class="mb-3">
    //             <label for="exampleFormControlInput1" class="form-label">
    //               Browse
    //             </label>
    //             <input
    //               type="image"
    //               class="form-control"
    //               id="exampleFormControlInput1"
    //               name="picture"
    //               value={data.image}
    //               onChange={InputEvent}
    //               placeholder="Profile Picture"
    //             />
    //           </div>

    //           {/* <div className="page">
    //             <div className= "container">
    //               <div className="img.holder">
    //                 <img src="{}" alt="" />
    //               </div>


    //             </div>

    //           </div> */}

    //           <div class="mb-3">
    //             <label for="exampleFormControlTextarea1" class="form-label">
    //               Bio
    //             </label>
    //             <textarea
    //               class="form-control"
    //               id="exampleFormControlTextarea1"
    //               rows="3"
    //               name="msg"
    //               value={data.msg}
    //               onChange={InputEvent}
    //             ></textarea>
    //           </div>

    //           <div class="col-12">
    //             <button className="button" type="submit">
    //               Update
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Contact;

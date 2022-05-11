// import React from "react";
// import axios from 'axios'

// class Landingpage{

//     constructor(props){
//         super(props)

//         this.state = {
//             posts:[]

//         }
//     }

//      componentDidMount(){
//          axios.get('https:/api-promovers.herokuapp.com/users/')
//          .then(response =>{
//              this.setState({
//                  posts: response.data

//              })
//          })
//      }

//      render(){
//          const {post} = this.state
//          return(
//              {posts.map(post => <div key={post.id}>{post.title}</div>)}
//          )
         
//      }
  
// }


import axios  from 'axios'
import React,{useState, useEffect} from 'react'
// import { HashLink as Link } from 'react-router-hash-link';



const baseURL = 'https://api-promovers.herokuapp.com/';
function UserList(){
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
  
    return(
    <div>
        <h1>My Profile</h1>
        <div style={{margin:50}}>
            <div>{users.full_name}</div>
            <div>{users.bio}</div>
      
         </div>
     </div>
    )
    
};
export default UserList;
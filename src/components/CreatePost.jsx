import axios from "axios";
import { useState } from "react";
import './CreatePost.css'

function CreatePost() {

 
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    username: "",
    phone: "",
    email: "",
  });

  const handleChange = (e)=>{
      

    setFormData((Formdata) => ({ ...Formdata, [e.target.name]: e.target.value }));
  }

  const handleSubmit =  async (e)=>{
    e.preventDefault();
try{
const response  = await axios.post('https://jsonplaceholder.typicode.com/users',formData)
console.log('post data', response);
}
catch(err){
console.log('error',err);
}
 setFormData({
      id: "",
    name: "",
    username: "",
    phone: "",
    email: "",
 })

  }



  return (
    <>
      <div className="form-container">
       <form  onSubmit={handleSubmit}>
         <input type="text" placeholder="Enter Your Id" onChange= {handleChange} name="id" value={formData.id} />
         <br/>
        <input type="text"  placeholder="Enter Your Name" onChange= {handleChange} name="name" value={formData.name} />  <br/>
        <input type="text"  placeholder="Enter Your  UserName" onChange= {handleChange} name="username" value={formData.username} />  <br/>
        <input type="Number"  placeholder="Enter Your PhoneNumber" onChange= {handleChange} name="phone" value={formData.phone}  />  <br/>
        <input type="Email"  placeholder="Enter Your Email" onChange= {handleChange} name="email" value={formData.email} />  <br/>
        <button type="submit">Submit</button>
       </form>
      </div>
    </>
  );
}

export default CreatePost;

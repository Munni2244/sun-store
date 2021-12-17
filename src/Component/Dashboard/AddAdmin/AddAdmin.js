import React, { useState } from 'react';
import Swal from 'sweetalert2';
import admin from '../../../Images/admin.png'

const AddAdmin = () => {
    const [email, setEmail] = useState('');

    const handleField = (e) => {
    setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user={email};
        fetch('https://blooming-meadow-50062.herokuapp.com/addAdmin',{
         method: "PUT",
         headers:{ "content-type": "application/json"},
         body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                Swal.fire(
                    'Good job!',
                    'Admin create Successfully!'
                )            }
        })
        

    }
    return (
        <div>
           
            <div  className="row user">
                
            <div className='col-12 col-lg-6 '>
           <img height='600px' src={admin} alt="" />
            </div>

            <div className='col-12 col-lg-6'>
            <div style={{ marginTop: '100px' }} className="col-12 col-lg-12 text-center">
                    <h1 className="mb-4">Please Add A Admin </h1>
                    <form onSubmit={handleSubmit} >

                        <div >
                            <input onBlur={handleField} name="email" type="email" style={{ width: '95%' }} className="mb-3 p-2 rounded-pill  field" id="exampleInputEmail1" placeholder="Email" />
                        </div>

                        <button type="submit" style={{ width: '60%', backgroundColor:'#000066' }} className=" p-2   rounded-pill mb-3 text-light">Submit</button>
                        <div>
                        </div>
                    </form>
                </div>

            </div>
          
        </div>
        </div>
    );
};

export default AddAdmin;
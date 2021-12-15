import React from 'react';
import { Link } from 'react-router-dom';
import admin from '../../../Images/admin.png'

const AddAdmin = () => {
    return (
        <div>
           
            <div  className="row user">
                
            <div className='col-12 col-lg-6 '>
           <img height='600px' src={admin} alt="" />
            </div>

            <div className='col-12 col-lg-6'>
            <div style={{marginTop:'150px'}} className="col-12 col-lg-12 text-center">
            <h1 className="mb-4">Make An Admin  <i class="fas fa-user-cog text-warning"></i></h1>
                <form >

                    <div >
                        <input name="email" type="email" style={{ width: '85%' }} className="mb-3 p-2 rounded-pill  field" id="exampleInputEmail1"  placeholder="Email" />
                    </div>

                    <br />
                    <button type="submit" style={{ width: '55%' , backgroundColor:'#000066' }} className=" p-2 text-light  rounded-pill mb-3">Submit</button>
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
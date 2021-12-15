import React from 'react';
import img from '../../../../Images/img17.jpg';
const MyOrders = () => {
    return (
        <div className="container ">
        <div className="text-center m-3">
        <h1>My orders</h1>
        </div>
        <div className="row ">
                    
                   <div  className="col-12 col-lg-6 col-md-12">
                        <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                        <div><img width="100%" height="150px" src={img} alt="" /></div>
                    </div>
                    <div className=" col-12 col-md-12 col-lg-6">
                       <div>
                       <span><small>Date: </small></span> <br />
                        <span>Products Name:</span>  <br />
                        <span><small>Products Price:</small></span> <br />
                        <span><small>Email:</small></span> <br />
                        <span><small className="text-danger"></small></span> <br />
                        <button  style={{border:'1px solid '}} className="btn btn-danger rounded-pill" >Cancel</button>
                       </div>
                    </div>
                    </div>
                   </div>
               
                    
               
           
        </div>
    </div>
    );
};

export default MyOrders;
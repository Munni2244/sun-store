import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Swal from 'sweetalert2';
import useAuth from '../../../../Hooks/useAuth';

const MyOrders = () => {
    const {user}=useAuth();
    const [myOrders, setMyOrders]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:4000/myOrders/${user?.email}`)
        .then(res=> res.json())
        .then(data=>setMyOrders(data))
    },[myOrders])

    const cancelOrder=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'

        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/orders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                        else {
                            Swal.fire(
                                'Delete Cancel'
                            )

                        }
                    })
            }
        })
    }

    return (
        <div className="container ">
        <div className="text-center m-3">
        <h1>My orders</h1>
        </div>
        <div className="row ">
                    
                 {
                     myOrders?.map(myOrder=> 
                        <div  key={myOrder._id}  className="col-12 col-lg-6 col-md-6 mt-3  p-2">
                        <div className="row ">
                        <div className="col-12 col-md-6 col-lg-6">
                        <div><img width="100%" height="150px" src={myOrder.img} alt="" /></div>
                    </div>
                    <div className=" col-12 col-md-12 col-lg-6">
                       <div  style={{borderRight:'1px solid gray'}}>
                        <span className='fw-bold'>Products Name:{myOrder.title}</span>  <br />
                        <span className='fw-bold'><small>Email: {myOrder.email}</small></span> <br />
                        <span><small>Date: {myOrder.date} </small></span> <br />
                        <span><small>Products Price: ${myOrder.price}</small></span> <br />
                        
                        <span className="text-danger fw-bold">{myOrder.status}</span> <br />
                      
                        <button  onClick={()=>cancelOrder(myOrder._id)}  style={{border:'1px solid ',backgroundColor:'#000099'}} className="btn  text-light rounded-pill" >Cancel Order</button>
                       </div>
                    </div>
                    </div>
                   </div>
                        )
                 }
               
                    
               
           
        </div>
    </div>
    );
};

export default MyOrders;
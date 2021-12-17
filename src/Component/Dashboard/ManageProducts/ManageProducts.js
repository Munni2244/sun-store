import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Swal from 'sweetalert2';
import img from '../../../Images/img13.jpg'

const ManageProducts = () => {
    const [manageProducts, setManageProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/products')
        .then(res=> res.json())
        .then(data=> setManageProducts(data))
    },[manageProducts])
  
    //remove products
    const RemoveProducts = (id) => {
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
                fetch(`http://localhost:4000/products/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
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
        <div>
             <div className='container'>
            <div style={{marginTop:'50px'}} className='row'>
                <h1 className='text-center m-5 fw-bold'>More Products Here</h1>
                {
                    manageProducts?.map(products=> 
                       
                        <div  key={products._id}  className='col-12 col-lg-4 col-md-6  mb-5'>
                        <div style={{ backgroundColor:"#000066"}} className=' text-center text-light p-4'> 
                            <img src={products.img} width="260px" height="260px" alt="" />
                            <div className='d-flex '>
                           <div>
                           <h5 className='ms-1 mt-2'>{products.name}</h5>
                          
                           </div>
                           <button onClick={()=> RemoveProducts(products._id)} style={{border:'1px solid white' ,height:'35px', borderRadius:'20px',marginLeft:'80px'}} className='btn  text-light mt-2'>Remove</button>
                            </div>
                        </div>
                    </div>
                        )
                }
                
            
            </div>
            </div>
        </div>
    );
};

export default ManageProducts;
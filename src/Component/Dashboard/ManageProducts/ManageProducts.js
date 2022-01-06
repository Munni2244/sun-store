import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAuth from '../../../Hooks/useAuth';

const ManageProducts = () => {
    const {loading}=useAuth();

    const [manageProducts, setManageProducts]=useState([]);
    useEffect(()=>{
        fetch('https://blooming-meadow-50062.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=> setManageProducts(data))
        AOS.init();

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
                fetch(`https://blooming-meadow-50062.herokuapp.com/products/${id}`, {
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

    if(loading){
        return(
            <div class="d-flex justify-content-center mt-4">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )
    }

    return (
        <div>
             <div className='container'>
            <div style={{marginTop:'50px'}} className='row'>
                <h1 className='text-center m-5 fw-bold'>More Products Here</h1>
                {
                    manageProducts?.map(products=> 
                       
                        <div  data-aos="flip-up"  key={products._id}  className='col-12 col-lg-4 col-md-6  mb-5'>
                        <div style={{ backgroundColor:"#000066"}} className=' text-center text-light '> 
                            <img src={products.img} width="100%" height="260px" alt="" />
                            <div className='d-flex m-2 p-2'>
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
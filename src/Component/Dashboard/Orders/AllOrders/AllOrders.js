import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Swal from 'sweetalert2';

const AllOrders = () => {
    const [allOrders, setAllOrders]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/allOrders')
        .then(res=> res.json())
        .then(data=> setAllOrders(data))
    },[allOrders])

    //cansel order
    const CancelBooking = (id) => {
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
    // 

    ///update Booking
    const ApproveBooking = (id) => {
        fetch(`http://localhost:4000/updateOrders/${id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
       
        <div >
        <div className="m-3">
            <h1 className="text-center text-danger mb-4">All Orders</h1>
            <div className="table-responsive">
                <table className="table  table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Reg Date:</th>
                            <th scope="col">Address</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {

                        allOrders?.map(orders =>
                            <tbody key={orders._id}>
                                <tr>
                                    <th scope="row">#</th>
                                    <td>{orders.name}</td>
                                    <td>{orders.email}</td>
                                    <td>{orders.title}</td>
                                    <td>{orders.date}</td>
                                    <td>{orders.address}</td>
                                    <td>{orders.price}</td>
                                    <td className='fw-bold'>{orders.status} 
                                    <button style={{backgroundColor:'#000099'}} onClick={() => ApproveBooking(orders._id)} className="btn rounded-pill text-light mx-2">Approve</button>

                                     <button   onClick={() => CancelBooking(orders._id)} className="btn btn-danger ms-1 rounded-pill">Cancel</button></td>

                                </tr>
                            </tbody>

                        )
                    }
                </table>
            </div>

        </div>
    </div>
    );
};

export default AllOrders;
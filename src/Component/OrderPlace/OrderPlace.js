import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import img from '../../Images/img21.jpg'
import Navigation from '../Home/Navigation/Navigation';

const OrderPlace = () => {
    const {orderId}=useParams();
    // const [orders, setOrders]=useState({});
    // useEffect(()=>{
    //     fetch(`./FakeData.json`)
    //     .then(res=> res.json())
    //     .then(data=> setOrders(data))
    // },[])


    return (
       
       <div>
           <Navigation></Navigation>
            <div className='container'>
            <div className='row'>
                <h1>order {orderId.length}</h1>
                <div className='col-12 col-lg-8 col-md-8'>
                    <div>
                        <img width="100%" height="500px" src={img} alt="" />
                        <h3>Name</h3>
                        <p>546</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat harum distinctio numquam debitis eveniet nesciunt itaque et quibusdam fuga, velit, iste commodi obcaecati vero doloribus. Fugit autem expedita aperiam explicabo.</p>
                    </div>

                </div>
                <div className='col-12 col-lg-4 col-md-4'>
                    <div className='text-center'>
                    <h1 className="mb-4 text-center fw-bold">Order Submit</h1>
                        <form >
                        <div >
                                <input name="name" type="text" style={{ width: '85%' }} className="mb-1 p-2 rounded-pill  field" placeholder=" Your Name" />
                            </div>

                            <br />
                            <div >
                                <input name="email" type="email" style={{ width: '85%' }} className="mb-1 p-2 rounded-pill  field" placeholder=" Your Image" />
                            </div>

                            <br />
                            
                            <div >
                                <input name="date" type="date" style={{ width: '85%' }} className="mb-1 p-2 rounded-pill  field" placeholder=" " />
                            </div>

                            <br />
                            <div >
                                <input name="address" type="text" style={{ width: '85%' }} className="mb-2 p-2 rounded-pill  field" placeholder=" Your Address" />
                            </div>

                            <br />
                            <button type="submit" style={{ width: '85%', backgroundColor: '#000066' }} className=" p-2 text-light  rounded-pill mb-3">Submit</button>
                            <div>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
       </div>
    );
};

export default OrderPlace;
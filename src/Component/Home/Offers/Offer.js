import React from 'react';

const Offer = () => {
    return (
        <div style={{marginTop:'80px' , }} className='container  '>
            <div className='row text-center text-secondary '>
                <div style={{borderRight:'1px solid gray'}} className='col-12 col-lg-4 col-md-6'>
                    <div>
                        <h1><i className="fas fa-shipping-fast text-dark"></i></h1>
                        <h3>Free Shipping</h3>
                        <p>Shipping in world order over 99%</p>
                    </div>
                </div>
                <div style={{borderRight:'1px solid gray'}} className='col-12 col-lg-4 col-md-6'>
                    <div>
                        <h1><i className="fas fa-gifts text-dark"></i></h1>
                        <h3>Special gift</h3>
                        <p>Give the perfect gift to loves one</p>
                    </div>
                </div>
                <div className='col-12 col-lg-4 col-md-6'>
                    <div>
                        <h1><i className="fas fa-money-check text-dark"></i></h1>
                        <h3>Cash Back</h3>
                        <p>Not Recieving item applied to reward</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;
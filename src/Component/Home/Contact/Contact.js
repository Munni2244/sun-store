import React from 'react';
import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Contact = () => {
    useEffect(()=>{
        AOS.init();

    },[])
    return (
        <div>
          <Navigation></Navigation>
            <div className="row user contact">
    
                <div  className='col-12 col-lg-6'>
                <div data-aos="zoom-in-down" style={{ marginTop: '100px' }} className="col-12 col-lg-12 text-center">
                        <h1 className="mb-4 text-light">Let's Stay In Touch <i class="fas fa-phone-slash text-info"></i></h1>
                        <form  action="https://formsubmit.co/munnikhatun51544@gmail.com" method="POST" >
    
                            
                                <input  name="name" type="text" style={{ width: '95%' }} className="mb-3 p-2 rounded-pill  fieldContact"  placeholder="Your Name" />
                            
                            
                                <textarea style={{ width: '95%' }} className="mb-3 p-2 rounded-pill text-light  fieldContact"  name="message" type="text" id="" cols="80" rows="5" placeholder='Message'></textarea>
                            
    
                            <button type="submit" style={{ width: '60%', backgroundColor:'#000066' }} className=" p-2   rounded-pill mb-3 text-light">Submit</button>
                        
                            
                        </form>
                    </div>
    
                </div>
              
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;
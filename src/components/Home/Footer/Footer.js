import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        
        <footer class="container mt-5">
        <div class="w-50 container-fluid padding">
            <div class="row text-center">
                <div class="col-md-6">
                <hr class="light"/>
                <h5>Our Address</h5>
                    <hr class="light"/>
                    <p>01717-XXXXXX</p>
                    <p>shahibur407@gmail.com</p>
                    <p>Mirpur</p>
                    <p>Dhaka Bangladesh</p>
            </div>
                <div class="col-md-6">
                    <hr class="light"/>
                    <h5>Our Hours</h5>
                    <hr class="light"/>
                    <p>Monday: 9am - 5pm</p>
                    <p>Satarday: 09am - 2pm</p>
                    <p>Friday: Closed</p>
                </div>
                <div class="col-12">
                    <hr class="light-100"/>
                    <p>&copy; shahibur shanto</p>
                </div>
            </div>
        </div>
    </footer>
        
    );
};

export default Footer;
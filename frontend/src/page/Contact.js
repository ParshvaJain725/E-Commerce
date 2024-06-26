import React from 'react'
import "../page/Contact.css"
import { Link } from 'react-router-dom'
import i1 from '../assest/pic1.png'
import i2 from '../assest/pic2.webp'
import i3 from '../assest/pic3.jpg'
const Contact = () => {
  return (
    <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
   <section class="review" id="review">

<h1 class="heading text-3xl text-center text-red-600 rounded-full">our customers <span>reviews</span></h1>

<div class="box-container">

    <div class="box">
        <img src={i1} alt=""/>
        <h3>Priya Patel</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
        <p>The Tasty Sweets are simply divine. Every bite of the cake was moist and delicious. A real treat!"</p>

    </div>
    <div class="box">
        <img src={i2} alt=""/>
        <h3>Rahul Gupta</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
        <p>Fruits and Vegetables is truly satisfying! They always hit the spot for me.</p>

    </div>
    <div class="box">
        <img src={i3} alt=""/>
        <h3>meera pandi</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
        <p> It's the ultimate comfort food to start your day with. Highly recommend!</p>

    </div>
</div>
</section>

<section class="order" id="order">

<h1 class="heading text-3xl"><span>Your</span> Review </h1>

<div className="row align-center justify-center text-center">
    <form action="mailto:yuvijain701@gmail.com">
        <div class="inputBox">
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="E-mail"/><br/>
        </div>
        <div class="inputBox">
            <input type="number" placeholder="Phone Number"/> <br/>
            <input type="text" placeholder="Food Name"/>
        </div>
        <textarea placeholder="Address" name="" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="Submit" class="btn0"/>
    </form>
</div>
</section>

<section class="footer">

<div class="container">
    <div class="footer-content">
        <h3>Contact Us</h3>
        <ul>
            <li>Email: yuvijain701@gmail.com</li>
            <li>Phone: +91 6355883892</li>
            <li>Address: K-107,Abode Valley,Potheri,near SRM University Chennai-603203</li>
        </ul>
    </div>
    <div class="footer-content">
        <h3>Quick Links</h3>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">our's special</a></li>
            <li><a href="/home">popular foods</a></li>
            <li><a href="/contact">customer reviews</a></li>
        </ul>
    </div>
    <div class="footer-content">
        <h3>Follow Us</h3>
        <ul class="social-icons">
            <li><a href="https://www.instagram.com/parshvaaa.jain/?igsh=MWJ5MHR6M25oamJicw%3D%3D&utm_source=qr"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/parshva-jain-507771239/"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://wa.me/+916355883892"><i class="fab fa-whatsapp"></i></a></li>
            <li><a href="https://github.com/ParshvaJain725"><i class="fab fa-github"></i></a></li>
         

        </ul>
    </div>
</div>


<h1 class="credit">
    created by <span><a href="https://github.com/ParshvaJain725">Parshva Jain</a></span> | all rights are reserved
</h1>
</section>

<a href="home" class="fas fa-angle-up" id="scroll-top"></a>
    </div>
  )
}

export default Contact
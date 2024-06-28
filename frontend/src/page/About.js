import React from 'react'
import "../page/About.css"
import i1 from '../assest/home-img.png'
import i2 from '../assest/s-img-1.jpg'
import i3 from '../assest/s-1.png'
import i4 from '../assest/s-img-2.jpg'
import i5 from '../assest/s-2.png'
import i6 from '../assest/s-img-3.jpg'
import i7 from '../assest/s-3.png'
import i8 from '../assest/s-img-4.jpg'
import i9 from '../assest/s-4.png'
import i10 from '../assest/s-img-5.jpg'
import i11 from '../assest/s-5.png'
import i12 from '../assest/s-img-6.jpg'
import i13 from '../assest/s-6.png'
import i14 from '../assest/p-1.jpg'
import i15 from '../assest/p-2.jpg'
import i16 from '../assest/p-3.jpg'
import i17 from '../assest/p-4.jpg'
import i18 from '../assest/p-5.jpg'
import i19 from '../assest/p-6.jpg'

const About = () => {
  return (
    <div>
    <section class="home" id="home">
    <div class="content">
        <h3>Tasty Cart</h3>
        <p>Welcome to Tasty Cart, where every meal is a culinary masterpiece delivered straight to your door.
            Explore a world of flavors with our diverse menu, curated from the finest ingredients and prepared by
            top chefs. Whether you're craving gourmet cuisine, comforting classics, or exotic dishes, SavorDelight
            promises a dining experience that's always fresh, delicious, and convenient. Order now and indulge in
            the delight of exceptional food, made just for you. Bon appétit!</p>
        <a href="/#order" class="btn">order now</a>
    </div>

    <div class="image">
        <img src={i1} alt=""/>
    </div>
</section>

<section class="speciality" id="speciality">

    <h1 class="heading"> our's <span>special</span> </h1>

    <div class="box-container">

        <div class="box">
            <img class="image" src={i2} alt=""/>
            <div class="content">
                <img src={i3} alt=""/>
                <h3>tasty burger</h3>
                <p><span>in our Tasty Burger, a perfect blend of succulent, premium beef, fresh, crisp vegetables,
                        and our signature sauce, all nestled in a perfectly toasted bun. Each bite promises a burst
                        of
                        mouthwatering flavors that will leave you craving more. Experience burger perfection
                        today!</span> </p>

            </div>
        </div>
        <div class="box">
            <img class="image" src={i4} alt=""/>
            <div class="content">
                <img src={i5} alt=""/>
                <h3>tasty pizza</h3>
                <p><span>Savor our Tasty Pizza, crafted with a crispy, golden crust, rich tomato sauce, and the
                        finest,
                        freshest toppings. Melted cheese and a perfect blend of herbs make every slice a delightful
                        experience. Enjoy a slice of pizza perfection!</span></p>

            </div>
        </div>
        <div class="box">
            <img class="image" src={i6} alt=""/>
            <div class="content">
                <img src={i7} alt=""/>
                <h3>cold ice-cream</h3>
                <p><span>Treat yourself to our Cold Ice Cream, a creamy, dreamy delight that melts in your mouth.
                        Choose
                        from a variety of rich, indulgent flavors, each crafted to perfection. Refreshingly cool and
                        irresistibly smooth, it's the perfect treat for any time of day.</span></p>

            </div>
        </div>
        <div class="box">
            <img class="image" src={i8} alt=""/>
            <div class="content">
                <img src={i9} alt=""/>
                <h3>cold drinks</h3>
                <p><span>Quench your thirst with our Cold Drinks, a refreshing selection of beverages that offer a
                        burst of cool, invigorating flavors. Whether you prefer classic sodas, sparkling waters, or
                        fruity refreshments, each sip is a delightful way to stay cool and refreshed. Enjoy the
                        chill!</span></p>

            </div>
        </div>
        <div class="box">
            <img class="image" src={i10} alt=""/>
            <div class="content">
                <img src={i11} alt=""/>
                <h3>tasty sweets</h3>
                <p><span>Delight in our Tasty Sweets, a heavenly assortment of desserts crafted to satisfy your
                        sweet tooth. From decadent cakes and pastries to creamy puddings and confections, each treat
                        is made with the finest ingredients for an indulgent experience. Enjoy the sweetness in
                        every bite!</span></p>

            </div>
        </div>
        <div class="box">
            <img class="image" src={i12} alt=""/>
            <div class="content">
                <img src={i13} alt=""/>
                <h3>tasty breakfast</h3>
                <p><span>Start your day right with our Tasty Breakfast, featuring a delicious array of morning
                        favorites. From fluffy pancakes and golden waffles to hearty omelets and fresh fruit bowls,
                        every dish is made to energize and satisfy. Enjoy a breakfast that's both delicious and
                        nourishing!</span></p>

            </div>
        </div>
    </div>
</section>

<section class="popular" id="popular">

    <h1 class="heading">ower <span>popular</span> foods</h1>

    <div class="box-container">

        <div class="box">
            <span class="price"> ₹150 - ₹450 </span>
            <img src={i14} alt="burger"/>
            <h3>tasty burger</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <a href="/#order" class="btn">order now</a>
        </div>

        <div class="box">
            <span class="price"> ₹500 - ₹2100 </span>
            <img src={i15} alt="cakes"/>
            <h3>tasty cakes</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <a href="/#order" class="btn">order now</a>
        </div>

        <div class="box">
            <span class="price"> ₹50 - ₹400 </span>
            <img src={i16} alt="sweets"/>
            <h3>tasty sweets</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <a href="/#order" class="btn">order now</a>
        </div>

        <div class="box">
            <span class="price"> ₹30 - ₹600 </span>
            <img src={i17} alt="cupcakes"/>
            <h3>tasty cupcakes</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <a href="/#order" class="btn">order now</a>
        </div>

        <div class="box">
            <span class="price"> ₹40 - ₹120 </span>
            <img src={i18} alt="drinks"/>
            <h3>cold drinks</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <a href="/#order" class="btn">order now</a>
        </div>

        <div class="box">
            <span class="price"> ₹35 - ₹380 </span>
            <img src={i19} alt="ice-cream"/>
            <h3>tasty ice-creams</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <a href="/#order" class="btn">order now</a>
        </div>
    </div>
</section>
</div>
  )
}

export default About
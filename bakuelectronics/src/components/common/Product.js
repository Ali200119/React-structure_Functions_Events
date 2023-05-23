import React from 'react'
import '../../assets/common/Product.scss'
import productImage from '../../assets/images/1_330x220_d01.jpg'

function Product() {
  return (
    <section id='product'>
      <div className="item">
        <div className="image">
            <img src={productImage} />
            <div className="discount">
                <h4>300 <i class="fa-solid fa-manat-sign"></i></h4>
                <h5>Nağd alışa</h5>
                <h5>ENDİRİM</h5>
            </div>
        </div>

        <div className="rating">
            <ul>
                <li><i class="fa-regular fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
                <li><i class="fa-regular fa-star"></i></li>
            </ul>

            <a href="#">0 rəy</a>
        </div>

        <div className="title">
            <a href='#'>Kondisioner LG A12CMH.NGGF-KIT, 12000 BTU / 30-40 m2, inverter</a>
        </div>
      </div>
    </section>
  )
}

export default Product
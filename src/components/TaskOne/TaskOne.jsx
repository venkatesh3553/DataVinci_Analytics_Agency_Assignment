import { Component } from 'react';
import { Link } from 'react-router-dom';
import './TaskOne.css';
import { FaHeart } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { CiRedo } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { MdMenu } from "react-icons/md";
import { MdCancel } from "react-icons/md";

class TaskOne extends Component {
    state = { menushow: false }

    render() {
        const { menushow } = this.state
        console.log(menushow)
        return (
            <>
                <div className="bg-container">
                    <nav className="nav-bar">

                        <div className="menu-wrapper">
                            <button className='menu-btn'
                                onClick={() => this.setState(prevState => ({ menushow: !prevState.menushow }))}
                            >
                                {!menushow &&
                                    <MdMenu className="menu" />
                                }
                                {menushow &&
                                    <MdCancel className="menu" />
                                }
                            </button>
                            {menushow && <div className='menu-item'>

                                <button className="menu-button">Shop</button>
                                <button className="menu-button">Explore</button>
                                <button className="menu-button">About</button>
                                <button className="menu-button">Rewards</button>
                                <button className="menu-button">Contact</button>
                                <button className="menu-first-button">WITCH MANUKA IS FOR ME?</button>
                            </div>
                            }

                        </div>
                        <button className="nav-first-button">WITCH MANUKA IS FOR ME?</button>
                        <button className="nav-button">Shop</button>
                        <button className="nav-button">Explore</button>
                        <img
                            src="https://cdn.shopify.com/s/files/1/0071/9755/6794/files/NZ_Honey_Co_Logo_BLK_160x@2x.png?v=1617750303"
                            alt="website logo"
                            className="nav-logo"
                        />
                        <button className="nav-button">About</button>
                        <button className="nav-button">Rewards</button>
                        <button className="nav-button">Contact</button>
                        <div>
                            <CiSearch style={{ fontSize: "25px", }} />
                            <CiShoppingCart style={{ fontSize: "25px", marginLeft: "10px" }} />
                            <GrUserManager style={{ fontSize: "25px", marginLeft: "10px" }} />

                        </div>
                    </nav>
                    <div className="content-container">
                        <img src="https://newzealandhoneyco.com/cdn/shop/files/how-to-spot-quality-desktop-optimized.webp?v=1667022307" className='product' />
                        <div className="sub-content-container">
                            <h1 className="content-heading">Manuka Honey <br /> UMF <span>24+</span> <br /> MGO <span>24+</span></h1>
                            <button className='details'> <CiCircleInfo /> What is UMF and MGO?</button>
                            <div className="UMF-container">
                                <div className="UMF">
                                    <p> <span className="umf-spsn">UMF</span> is the strength and purity rating of Manuka honey.</p>
                                    <p className='umf-para'>
                                        <span className="s1">0+</span>
                                        <span className="s2">15+</span>
                                        <span className="s3">20+</span>
                                        <span className="s4">24+</span>
                                        <span className="s5">26+</span>
                                        <span className="s6">28+</span>
                                        <span className="s7">30+</span></p>
                                    <p>he higher the number, the greater the potency and rarity of Manuka honey.</p>
                                </div>
                                <div className="MGO">
                                    <p> <span className="umf-spsn">MGO</span> is the key natural compound that gives Manuka honey its special antibacterial strength.</p>
                                    <p className='umf-para'>
                                        <span className="s1">263+</span>
                                        <span className="s2">514+</span>
                                        <span className="s3">829+</span>
                                        <span className="s4">1122+</span>
                                        <span className="s5">1282+</span>
                                        <span className="s6">1450+</span>
                                        <span className="s7">1620+</span></p>
                                    <p>The higher the number, the higher the antibacterial properties in the honey.</p>
                                </div>
                            </div>
                            <div className="rating">
                                <p className='rating-pera'>The Optimiser</p>
                                <p className='rating'>
                                    {[...Array(5)].map((_, index) => (
                                        <FaHeart key={index} />
                                    ))} 825 Reviews</p>
                            </div>
                            <p className="content-para">
                                For those times in life when quality comes first. This pure UMF™ 24+ Manuka
                                Honey is powerfully active, sourced from wild and rugged locations around
                                Aotearoa New Zealand and great for almost all uses. It has a full, delicious
                                flavour and your body will love you for it.
                            </p>
                            <div className="content-container-imgs">
                                <img src=" https://thriveprotile.co.nz/wp-content/uploads/2024/02/All-certificate-logo.png" className='mid-img' />



                            </div>
                        </div>

                    </div>
                    <div className="buttom-container">
                        <div className="bottom-first-container">
                            <img src="https://tse3.mm.bing.net/th/id/OIP.Ew8qIVxHFaCg_wMC1Ju_UgHaHq?rs=1&pid=ImgDetMain&o=7&rm=3" alt='Image'
                                className='img1' />
                            <img src="https://newzealandhoneyco.com/cdn/shop/files/US_WEBSITE_SHOPIFY_IMAGES_2000x2000_04.jpg?v=1720140942&width=1200" alt='Image'
                                className='img2' />
                            <img src="https://tse2.mm.bing.net/th/id/OIP.ABRC_kJOrfPWPLEXEkLWbgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" alt='Image'
                                className='img3' />
                            <img src="https://tse3.mm.bing.net/th/id/OIP.R-koQ0tX5kVZRa07rdgPNQHaHa?w=800&h=800&rs=1&pid=ImgDetMain&o=7&rm=3" alt='Image'
                                className='img4' />
                            <img src="https://tse4.mm.bing.net/th/id/OIP.Ruyp_g5gFY76pEKDiVwUEgHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain&o=7&rm=3" alt='Image'
                                className='img5' />
                        </div>

                        <div className="bottom-secound-container">
                            <div className="content-container-imgs">
                                <img src="https://tse2.mm.bing.net/th/id/OIP.cuGDSpZwFMU0mk4ucxPZagHaHa?w=510&h=510&rs=1&pid=ImgDetMain&o=7&rm=3" className='scound-img' />
                                <img src="https://newzealandhoneyco.com/cdn/shop/products/UMF-5-MGO-83-125g-nz-manuka-honey.png?v=1671405491" className='scound-img' />
                                <img src="https://tse4.mm.bing.net/th/id/OIP.COOv-LGYnPrhYVKINcv_gQAAAA?w=330&h=330&rs=1&pid=ImgDetMain&o=7&rm=3" className='scound-img' />
                                <img src="https://newzealandhoneyco.com/cdn/shop/files/US26_SQUEEZYWEBSITEtiles_500g_2000x2000px2_1_1.png?v=1715034656&width=2000" className='scound-img' />
                                <img src="https://newzealandhoneyco.com/cdn/shop/files/US_WEBSITE_SHOPIFY_IMAGES_2000x2000_09.jpg?v=1720141186&width=352" className='scound-img' />
                            </div>
                            <p className='pament-head'>PAYMENT POTION (SELECT ONE) </p>
                            <div className="payment-container">
                                <div className="usd-btton">
                                    <button className='payment-one-btn'>One time purchase $55.88 USD</button>
                                    <button className='payement-sub-btn'>Subscrobe & save 20% $44.70 USD</button>
                                </div>
                                <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                    <CiRedo style={{ fontSize: "18px" }} /> What is Subscription
                                </p>
                            </div>
                            <p className='pament-head'>SELECT QUANTITY</p>
                            <div className="quantity-container">
                                <div className='quanity-buttons-card'>
                                    <button className='quantity-button'>-</button>
                                    <button className='quantity-button'>1</button>
                                    <button className='quantity-button'>+</button>
                                </div>
                                <div className='add-to-cart-card-button-and-para'>
                                    <button className='add-to-cart-button'>ADD TO CART - $55.88 USD</button>
                                    <p className='btton-shipping-para'>
                                        Fast & Free Shipping on orders over $30
                                    </p>
                                </div>
                            </div>
                            <div className="beauty-bundle-container">
                                <p>Beauty Bundle</p>
                                <div className="beauty-bundle-all-item-container">
                                    <div className="sub-beauty-bundle-all-item-container">
                                    <div className="item-card">
                                        <img src="https://tse2.mm.bing.net/th/id/OIP.cuGDSpZwFMU0mk4ucxPZagHaHa?w=510&h=510&rs=1&pid=ImgDetMain&o=7&rm=3" alt='Image' className="Image" />
                                        <div className="item-details">
                                            <p className='item-name'>The Beauty Bundle</p>
                                            <p className='item-para'>UMF 20+ </p>
                                            <select>
                                                <option>250g</option>
                                                <option>500g</option>
                                            </select>
                                        </div>
                                    </div>
                                    <h1 className='plus'>+</h1>
                                    <div className="item-card">
                                        <img src="https://newzealandhoneyco.com/cdn/shop/products/UMF-5-MGO-83-125g-nz-manuka-honey.png?v=1671405491" alt='Image' className="Image" />
                                        <div className="item-details">
                                            <p className='item-name'>The Beauty Bundle</p>
                                            <p className='item-para'>UMF 20+ </p>
                                            <select>
                                                <option>250g</option>
                                                <option>500g</option>
                                            </select>
                                        </div>
                                    </div>
                                    <h1 className='plus'>+</h1>
                                    <div className="item-card">
                                        <img src="https://newzealandhoneyco.com/cdn/shop/files/US_WEBSITE_SHOPIFY_IMAGES_2000x2000_09.jpg?v=1720141186&width=352" alt='Image' className="Image" />
                                        <div className="item-details">
                                            <p className='item-name'>The Beauty Bundle</p>
                                            <p className='item-para'>UMF 20+ </p>
                                            <select>
                                                <option>250g</option>
                                                <option>500g</option>
                                            </select>
                                        </div>
                                    </div>
                                    </div>
                                    <div>
                                        <p > <span className='USD'> $478 USD </span><span className='span-USD'>$430.88 USD</span> <span className='span-save'>save 10%</span></p>
                                        <button className='add-to-cart-button-bundle-beauty'>ADD BUNDLE TO CART</button>
                                    </div>
                                </div>

                            </div>

                            <p className="points">Colourclub members earn up to
                                <span className="span-point"> 56</span>
                                reward points when buy this item.
                            </p>
                            <div className="delivary-cards">
                                <div className="delivary-card">
                                    <p>Delivary</p>
                                    <p>Free Delivary On Orders Over $30 </p>
                                </div>
                                <div className="delivary-card">
                                    <p>Estimated Order Delivary Date</p>
                                    <p>Jun 9 - Jun 13 </p>
                                </div>
                            </div>
                            <hr />
                            <p>AFTER PAY</p>
                            <p>4 or interest-free payments of $13.97 with  <spa>$ Afterpay</spa> </p>
                            <hr />
                            <p>UMF™ SCALE</p>
                            <p className='scale-container'>
                                <span className='scale1'>UMF™ 10+
                                    UMF™ 15+
                                </span> <span className='scale2'>UMF™ 20+
                                </span> <span className='scale3'> UMF™ 24+
                                </span> <span className='scale4'>UMF™ 26+
                                </span> <span className='scale5'>UMF™ 28+
                                </span> <span className='scale6'>UMF™ 30+</span>

                            </p>
                            <p className="test">TEST PROFAIL</p>

                            <div class="line-dot-container">
                                <div class="line"></div>
                                <div class="dot"></div>
                            </div>
                            <div className="last">
                                <p>Clean & Intence</p>
                                <p>Bold & Intence</p>
                            </div>

                        </div>


                    </div>
                </div>
            </>
        );
    }
}

export default TaskOne;

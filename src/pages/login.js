import React from 'react';
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="log-in">
             <header>
                    
                    {/*-- header-mid-area-start --*/}
                <div className="header-mid-area ptb-20">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="logo-area text-center logo-xs-mrg">
                            <Link to="/"><h1 className="text-center">Bibliophilic</h1></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/*-- header-mid-area-end --*/}
                {/*-- main-menu-area-start --*/}
                <div className="main-menu-area d-md-none d-none d-lg-block sticky-header-1" id="header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="menu-area">
                                    <nav>
                                        <ul>
                                            
                                            <li>
                                                <Link to="/">Home</Link>
                                                
                                            </li>
                                            <li>
                                                <Link to="/categories">Categories<i className="fa fa-angle-down" /></Link>
                                                <div className="sub-menu sub-menu-2">
                                                <ul>
                                                    <li><Link to="shop.html">Art Books</Link></li>
                                                    <li><Link  to="shop-list.html">Classic Literature</Link></li>
                                                    <li><Link to="product-details.html">Contemporary Fiction</Link></li>
                                                    <li><Link to="product-details-affiliate.html">Cook Book</Link></li>
                                                    <li><Link to="blog.html">Crime Fiction</Link></li>
                                                    <li><Link to="blog-details.html">Fairy Tales</Link></li>
                                                    <li><Link to="contact.html">Graphic Novels</Link></li>
                                                    <li><Link to="about.html">Health</Link></li>
                                                    <li><Link to="login.html">Historical Fiction</Link></li>
                                                    <li><Link to="register.html">Romance</Link></li>
                                                    <li><Link to="my-account.html">Science Fiction</Link></li>
                                                    <li><Link to="cart.html">Comic</Link></li>
                                                    <li><Link to="checkout.html">Education</Link></li>
                                                    <li><Link to="wishlist.html">Technology</Link></li>
                                                </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                    
                            </div>
                            <div className="col-lg-4">
                                <div className="menu-area ml-5 pl-5">
                            
                                    <nav>
                                        <ul>
                                        <li className="active">
                                            <Link to="/login">Login</Link>
                                        </li>
                                        <li>
                                            <Link to="/register">Register</Link>
                                        </li>

            
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*-- main-menu-area-end --*/}
            </header>

            <div className="user-login-area mb-70  mt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login-title text-center mb-30">
                                <h2>Login</h2>
                            </div>
                        </div>
                        <div className="offset-lg-3 col-lg-6 col-md-12 col-12">
                            <div className="login-form">
                                <div className="single-login text-justify">
                                    <label>Username or email<span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className="single-login text-justify">
                                    <label>Passwords <span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className="single-login single-login-2">
                                    <Link to="#">login</Link>
                                    
                                </div>
                                <Link to="#">Forgot password?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        
    );
}
export default Login;
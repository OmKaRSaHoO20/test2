import React from 'react';

function First(){
    return <div>
        <div className='container1'> 
            <header className='Header-nav'>
                <div className='left-nav'>
                    <img src='https://cdn.shopify.com/s/files/1/2026/1561/files/LogoFinal_PNG_200X100_200x.png?v=1599809410' alt='logo' />
                </div>
                <div className='right-nav'>
                    <ul class="nav" >
                        <li class="nav-item">
                            <p>New Arrivals</p>
                        </li>
                        <li class="nav-item">
                            <p>Jewelry</p>
                        </li>
                        <li class="nav-item">
                            <p>Collections</p>
                        </li>
                        <li class="nav-item">
                            <p>Blogs</p>
                        </li>
                        <li class="nav-item">
                            <p>Sale</p>
                        </li>
                    </ul>
                </div>
            </header>

            <div className='container1-2nd'>
                <div className='img-Float'>
                    <img src='https://cdn.shopify.com/s/files/1/2026/1561/files/WhatsApp_Image_2022-06-21_at_5.33.31_AM_1200x.jpg?v=1655814924' />
                </div>

                <div className='text-float'>
                    <h2>SPRING SUMMER 2022</h2>
                    <p>Thoughtfully Designed Pieces for Every Occasion</p>
                    <a href='#'>NEW ARRIVALS</a>
                </div>
            </div>

            <div className='container1-3rd'>
                <div className='botfloat'>
                    <div className='float-img'>
                        <img src='https://cdn.shopify.com/s/files/1/2026/1561/files/IMGL5995_200x.jpg?v=1642818596' />
                    </div>
                    <p>Short Necklaces Sets</p>
                </div>
                <div className='botfloat'>
                    <div className='float-img'>
                        <img src='https://cdn.shopify.com/s/files/1/2026/1561/files/Earrings_568720b0-4213-4425-8098-56dc67e36470_200x.jpg?v=1640323534' />
                    </div>
                    <p>Earrings Designs</p>
                </div>
                <div className='botfloat'>
                    <div className='float-img'>
                        <img src='https://cdn.shopify.com/s/files/1/2026/1561/files/Choker_ffbeeb09-2e88-4763-bb1d-a630bbe8775e_200x.jpg?v=1640323574' />
                    </div>
                    <p>Choker Sets</p>
                </div>
                <div className='botfloat'>
                    <div className='float-img'>
                        <img src='https://cdn.shopify.com/s/files/1/2026/1561/files/Pendants_9d90a23a-b4b5-48b4-a510-73fe13db516b_200x.jpg?v=1640323653' />
                    </div>
                    <p>Pendant Sets</p>
                </div>
                <div className='botfloat'>
                    <div className='float-img'>
                        <img src='https://cdn.shopify.com/s/files/1/2026/1561/files/TBX0008X_200x.jpg?v=1645521750' />
                </div>
                    <p>Bangle & Bracelets</p>
                </div>
            </div>
        </div>
    </div>
}

export default First;
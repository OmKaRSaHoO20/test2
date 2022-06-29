import React from 'react';

function Triple(){
    return <div>
        <div className="triplecontain">
            <h6>Guides</h6>
            <p>Confused about shopping ? We can help!</p>
            <div className="Triple-flex">
                <div className="Items1">
                    <h2 id='Gems-title'>How to shop for Diamonds ?</h2>
                    <p id='Gems-para'>Look for the 4 Cs - Cut, Carat, Colour, & Clarity, as they are the most important aspects of diamond selection. The price of a diamond largely depends on these key factors.</p>
                    <a href='#'>Read more</a>
                </div>
                <div className="Items2">
                    <h2 id='Gems-title'>Know your Gemstone better</h2>
                    <p id='Gems-para'>Gemstones are colourful rocks and minerals found under the earth. Each gemstone is associated with a month, making it the particular month's birthstone.</p>
                    <a href='#'>Read more</a>
                </div>
                <div className="Items3">
                    <h2 id='Gems-title'>Fun Facts about Gold</h2>
                    <p id='Gems-para'>Gold is one of the oldest metals found around the globe. Its golden colour has often played an important role in Mythology and is considered a prized possession to date.</p>
                    <a href='#'>Read more</a>
                </div>
            </div>
        </div>
    </div>
}

export default Triple;
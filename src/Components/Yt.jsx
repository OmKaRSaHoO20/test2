import React from 'react';

function Youtube(){
    return <div>
        <div className='Ytcontainer'>
            <h2>Trending</h2>
            <p>The hottest topics that are ruling our site right now!</p>
            <div className='Video-Holder'>
                <div className='Yt'>
                    <iframe src='https://www.youtube.com/embed/b-PJLv1TSow?autoplay=1&mute=1&loop=1&playlist=b-PJLv1TSow&enablejsapi=1&origin=https:%2F%2Fwww.candere.com' />
                </div>
                <div className='Yt-grid'>
                    <div className='Yt-grid1'>
                        <p>Queens Tiara Crown Diamond Ring</p>
                    </div>
                    <div className='Yt-grid2'>
                        <a href='#'><p>Lilas Diamond Ring</p></a>
                    </div>
                    <div className='Yt-grid3'>
                        <p>Begony Diamond Ring</p>
                    </div>
                    <div className='Yt-grid4'>
                        <p>Primevere Diamond Ring</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Youtube;
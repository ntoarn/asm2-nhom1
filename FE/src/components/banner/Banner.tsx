import React from 'react'

const Banner = () => {
  return (
  <div>
  <div id="carouselExampleDark" className="carousel carousel-dark slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval={10000}>
        <img src="https://salt.tikicdn.com/cache/w1208/ts/brickv2og/5a/eb/43/b6757b308e0195aaad79d8dd19d88fc2.jpg.webp" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block ">
        
        </div>
      </div>
      <div className="carousel-item" data-bs-interval={2000}>
        <img  src="https://marketplace.canva.com/EAF4n2WuNKc/2/0/1600w/canva-h%E1%BB%93ng-pastel-%C4%91en-n%E1%BB%95i-b%E1%BA%ADt-c%E1%BB%ADa-h%C3%A0ng-s%C3%A1ch-banner-JUT8DwjmSUI.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          
        </div>
      </div>
      <div className="carousel-item">
        <img  src="https://toplist.vn/images/800px/batansachcom-1182912.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
         
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

  )
}

export default Banner
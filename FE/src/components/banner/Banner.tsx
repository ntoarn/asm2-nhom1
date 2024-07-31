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
        <img src="https://i.pinimg.com/originals/c2/e9/02/c2e902e031e1d9d932411dd0b8ab5eef.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block ">
        
        </div>
      </div>
      <div className="carousel-item" data-bs-interval={2000}>
        <img  src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/03/Hinh-nen-3D.jpg?fit=3840%2C2160&ssl=1" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          
        </div>
      </div>
      <div className="carousel-item">
        <img  src="https://c.wallhere.com/photos/9a/40/1500x1000_px_austria_Colorful_Fall_forest_lake_landscape_nature-1001649.jpg!d" className="d-block w-100" alt="..." />
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
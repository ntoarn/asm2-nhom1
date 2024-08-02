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
        <img src="https://suckhoe123.vn/uploads/suc-khoe/can-sa-chuc-nang-cuong.jpg&w=1500&h=819&checkress=db875fd9c5c09567f1c8d26f90df163d" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block ">
        
        </div>
      </div>
      <div className="carousel-item" data-bs-interval={2000}>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajKH0DeVbIAcBnspoZEtF0aCmHqfN7kWhPZcyIjttlbzbSX_UopCtuRN0ltssWp0lJYw&usqp=CAU" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          
        </div>
      </div>
      <div className="carousel-item">
        <img  src="https://hoanmy.com/wp-content/uploads/2023/05/AdobeStock_217932642-scaled.jpeg" className="d-block w-100" alt="..." />
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
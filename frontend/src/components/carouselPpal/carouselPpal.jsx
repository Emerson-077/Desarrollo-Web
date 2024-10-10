
const carouselPpal = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide w-100" data-bs-ride="carousel">
        <div className="carousel-inner">

            <div className="carousel-item active" data-bs-interval="2000">
              <img src="/src/assets/imgs/banner_3.png" className="d-block w-100" alt="..." />
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <img src="/src/assets/imgs/banner_4.png" className="d-block w-100" alt="..." />
            </div>
        </div>
    </div>
  )
}

export default carouselPpal
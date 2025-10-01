import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { topFetchNews } from "../../slice/newsSlice";


export default function Slider() {
  const dispatch = useDispatch();
  const { topArticles, loading, error } = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(topFetchNews());
  }, [dispatch]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      style={{
        marginLeft: "18rem",
        marginRight: "18rem",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {topArticles.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {topArticles.map((topArticles, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={
                  topArticles.urlToImage == null
                    ? "https://www.slashfilm.com/img/gallery/the-only-recap-you-need-before-alien-romulus/l-intro-1722267254.jpg"
                    : topArticles.urlToImage
                }
                className="d-block w-100"
                alt={topArticles.title}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{topArticles.title}</h5>
                <p>{topArticles.description || "No description available"}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

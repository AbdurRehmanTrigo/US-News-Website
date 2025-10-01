import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { entertainmentFetchNews, setCurrentPage } from "../../slice/newsSlice";

export default function Entertainment() {
  const dispatch = useDispatch();
  // const { entertainmentArticles, loading, error } = useSelector((state) => state.news);
  const {
    entertainmentArticles,
    loading,
    error,
    currentPage,
    articlesPerPage,
    searchQuery,
  } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(entertainmentFetchNews(searchQuery));
  }, [dispatch,searchQuery]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles =entertainmentArticles.slice(indexOfFirstArticle,indexOfLastArticle);
    // entertainmentArticles.length > 0
    //   ? entertainmentArticles.slice(indexOfFirstArticle, indexOfLastArticle)
    //   : [];
  const totalPages = Math.max(
    1,
    Math.ceil(entertainmentArticles.length / articlesPerPage)
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      dispatch(setCurrentPage(pageNumber));
    }
  };
 //Calculate  the range of pages to display
 const pageRange=5;
 let startPage=Math.max(1,currentPage-Math.floor(pageRange/2));
 let endPage=Math.min(totalPages,startPage+pageRange-1);
 if(endPage-startPage<pageRange-1)
 {
   startPage=Math.max(1,endPage-pageRange+1);
 }
 const pageNumbers=[];
 if(totalPages>1)
 {
   for(let i=startPage;i<=endPage;i++){
     pageNumbers.push(i);
   }
 }
  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {currentArticles.length > 0 ? (
          currentArticles.map((entertainmentArticles, index) => (
            <div
              key={index}
              className="card"
              style={{
                width: "300px",
                margin: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src={
                  entertainmentArticles.urlToImage == null
                    ? "https://www.slashfilm.com/img/gallery/the-only-recap-you-need-before-alien-romulus/l-intro-1722267254.jpg"
                    : entertainmentArticles.urlToImage
                }
                className="card-img-top"
                alt={entertainmentArticles.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body" style={{ flexGrow: 1 }}>
                <h5
                  className="card-title"
                  style={{ minHeight: "60px", fontSize: "1.1rem" }}
                >
                  {entertainmentArticles.author == ""
                    ? "Janelle Ash USA California"
                    : entertainmentArticles.author}
                </h5>
                <p
                  className="card-text"
                  style={{ minHeight: "80px", fontSize: "0.9rem" }}
                >
                  {entertainmentArticles.title == ""
                    ? "Enthusiasm for the visit is huge, but the Pope is being urged by campaigners to address an abuse scandal."
                    : entertainmentArticles.title}{" "}
                  {entertainmentArticles.description}
                </p>
                <a
                  href={entertainmentArticles.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: "auto" }}
                >
                  Read more
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </div>
      {totalPages > 1 && (
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            {/* Previous Button */}
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {/* Page Numbers */}
            {totalPages > pageRange && (
              <>
                {startPage > 1 && (
                  <>
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(1)}
                      >
                        1
                      </button>
                    </li>
                    {startPage > 2 && (
                      <li className="page-item disabled">
                        <span className="page-link">...</span>
                      </li>
                    )}
                  </>
                )}
              </>
            )}

            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${currentPage === number ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </button>
              </li>
            ))}

            {totalPages > pageRange && (
              <>
                {endPage < totalPages && (
                  <>
                    {endPage < totalPages - 1 && (
                      <li className="page-item disabled">
                        <span className="page-link">...</span>
                      </li>
                    )}
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(totalPages)}
                      >
                        {totalPages}
                      </button>
                    </li>
                  </>
                )}
              </>
            )}

            {/* Next Button */}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

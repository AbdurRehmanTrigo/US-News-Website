// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import img from "../../asset/img.png";
// import { NavLink } from "react-router-dom";
// import { setSearchQuery } from "../../slice/newsSlice";
// import { useDispatch } from "react-redux";
// const Navbar = () => {
// const [searchTerm,setSearchTerm]=useState("");
// const dispatch=useDispatch();
// const handleSearch=(e)=>{
//   e.preventDefault();
//   dispatch(setSearchQuery(searchTerm));
// }
// return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid d-flex justify-content-center">
//         {/* Navbar brand with image */}
//         <a className="navbar-brand" href="#">
//           <img src={img} alt="Logo" style={{ width: "250px", height: "auto" }} />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse w-100"
//           id="navbarSupportedContent"
//         >
//           <ul className="navbar-nav d-flex justify-content-center w-100 mb-2 mb-lg-0 ">
//             <li className="nav-item me-3">
//               {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
//               <NavLink
//                 style={({ isActive }) => {
//                   return {
//                     backgroundColor: isActive ? "$gray-800" : "$gray-300",
//                   };
//                 }}
//                 className=" nav-link"
//                 to="/"
//                 onClick={() => dispatch(setSearchQuery(""))}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item me-3">
//               {/* <a className="nav-link" href="">Entertainment</a> */}
//               <NavLink
//                 style={({ isActive }) => {
//                   return {
//                     backgroundColor: isActive ? "$gray-800" : "$gray-300",
//                   };
//                 }}
//                 className=" nav-link"
//                 to="/Entertainment"
//                 onClick={() => dispatch(setSearchQuery(""))}
//               >
//                 Entertainment
//               </NavLink>
//             </li>
//             <li className="nav-item me-3">
//               {/* <a className="nav-link" href="#">Sport</a> */}
//               <NavLink
//                 style={({ isActive }) => {
//                   return {
//                     backgroundColor: isActive ? "$gray-800" : "$gray-300",
//                   };
//                 }}
//                 className=" nav-link"
//                 to="/Business"
//                 onClick={() => dispatch(setSearchQuery(""))}
//               >
//                 Business
//               </NavLink>
//             </li>
//             <li className="nav-item me-3">
//               {/* <a className="nav-link" href="#">Technology</a> */}
//               <NavLink
//                 style={({ isActive }) => {
//                   return {
//                     backgroundColor: isActive ? "$gray-800" : "$gray-300",
//                   };
//                 }}
//                 className=" nav-link"
//                 to="/Technology"
//                 onClick={() => dispatch(setSearchQuery(""))}
//               >
//                 Technology
//               </NavLink>
//             </li>
//             <li className="nav-item me-3">
//               {/* <a className="nav-link" href="#">Technology</a> */}
//               <NavLink
//                 style={({ isActive }) => {
//                   return {
//                     backgroundColor: isActive ? "$gray-800" : "$gray-300",
//                   };
//                 }}
//                 className=" nav-link"
//                 to="/Health"
//                 onClick={() => dispatch(setSearchQuery(""))}
//               >
//                 Health
//               </NavLink>
//             </li>
//           </ul>
//           <form className="d-flex" onSubmit={handleSearch}>
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               value={searchTerm}
//               onChange={(e)=>setSearchTerm(e.target.value)}
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;













































import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img from "../../asset/img.png";
import { NavLink } from "react-router-dom";
// import { setSearchQuery } from "../../slice/newsSlice";
import { useDispatch } from "react-redux";
import { fetchNews, setSearchQuery } from "../../slice/newsSlice";
const Navbar = () => {
// const [searchTerm,setSearchTerm]=useState("");
const dispatch=useDispatch();
const handleSearch = (e) => {
  e.preventDefault();
  const elements = e.target.elements;
  console.log(elements);  
  const searchTerm = elements.search ? elements.search.value : '';  
  console.log(searchTerm);  
  dispatch(setSearchQuery(searchTerm));
  dispatch(fetchNews());
};
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-center">
        {/* Navbar brand with image */}
        <a className="navbar-brand" href="#">
          <img src={img} alt="Logo" style={{ width: "250px", height: "auto" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse w-100"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex justify-content-center w-100 mb-2 mb-lg-0 ">
            <li className="nav-item me-3">
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "$gray-800" : "$gray-300",
                  };
                }}
                className=" nav-link"
                to="/"
                // onClick={() => dispatch(setSearchQuery(""))}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item me-3">
              {/* <a className="nav-link" href="">Entertainment</a> */}
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "$gray-800" : "$gray-300",
                  };
                }}
                className=" nav-link"
                to="/Entertainment"
                // onClick={() => dispatch(setSearchQuery(""))}
              >
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item me-3">
              {/* <a className="nav-link" href="#">Sport</a> */}
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "$gray-800" : "$gray-300",
                  };
                }}
                className=" nav-link"
                to="/Business"
                // onClick={() => dispatch(setSearchQuery(""))}
              >
                Business
              </NavLink>
            </li>
            <li className="nav-item me-3">
              {/* <a className="nav-link" href="#">Technology</a> */}
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "$gray-800" : "$gray-300",
                  };
                }}
                className=" nav-link"
                to="/Technology"
                // onClick={() => dispatch(setSearchQuery(""))}
              >
                Technology
              </NavLink>
            </li>
            <li className="nav-item me-3">
              {/* <a className="nav-link" href="#">Technology</a> */}
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "$gray-800" : "$gray-300",
                  };
                }}
                className=" nav-link"
                to="/Health"
                // onClick={() => dispatch(setSearchQuery(""))}
              >
                Health
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
            name="search"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              // value={searchTerm}
              // onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;










// const handleSearch = (e) => {
//   e.preventDefault();
//   const elements = e.target.elements;
//   console.log(elements);  // Log elements to see if 'search' is present
//   const searchTerm = elements.search ? elements.search.value : '';  // Use optional chaining to handle cases where 'search' might be undefined
//   console.log(searchTerm);  // Log searchTerm to see if it's being retrieved correctly
//   dispatch(setSearchQuery(searchTerm));
//   dispatch(fetchNews());
// };

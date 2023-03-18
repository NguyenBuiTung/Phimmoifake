import React from "react";
import { NavLink } from "react-router-dom";
import { scroller } from "react-scroll";
export default function HeaderHome() {
  return (
    <div className="header-home">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/home"}>
            <img src="https://phimmoichillb.net/dev/images/logo.png" alt="" />
          </NavLink>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/home"}
                  onClick={() =>
                    scroller.scrollTo("phimmoi", {
                      smooth: true,
                      offset: -70,
                      duration: 200,
                    })
                  }
                >
                  Phim mới
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                 to={"/phimhot"}
                onClick={() =>
                  scroller.scrollTo("phimhot", {
                    smooth: true,
                    offset: -70,
                    duration: 200,
                  })
                }>
                  Phim hot
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Thể loại
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item fw-semibold" to={'/phimhanhdong'}>
                      Hành Động
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item fw-semibold" to={'/phimvientuong'}>
                      Viễn Tưởng
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item fw-semibold" to={'/phimkinhdi'}>
                      Kinh dị
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

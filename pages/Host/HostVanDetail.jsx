import React from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section>
        <Link
          to=".."
          // This line (relative= path) is so IMPORTNAT: by default if we say to=..   ==> React will understand that he will return back to
          // the parent Route => but now he will understand that he will return back in the path !!!
          relative="path"
          className="back-button"
        >
          &larr; <span>Back to all vans</span>
        </Link>

        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4>${currentVan.price}/day</h4>
            </div>
          </div>
        </div>
      </section>

      <nav className="host-van-detail-nav">
        {/* The role of 'end' is important to solve a problem of /details is always active ! you can try it without 'end' */}
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "my-link" : null)}
        >
          Details
        </NavLink>

        <NavLink
          to="pricing"
          className={({ isActive }) => (isActive ? "my-link" : null)}
        >
          Pricing
        </NavLink>

        <NavLink
          to="photos"
          className={({ isActive }) => (isActive ? "my-link" : null)}
        >
          Photos
        </NavLink>
      </nav>

      <Outlet context={{ currentVan }} />
    </>
  );
}

import React, { useState, useEffect } from "react";
import CatalogueDataService from "../services/CatalogueService";
import { Link } from "react-router-dom";

const CataloguesList = () => {
  const [Catalogues, setCatalogues] = useState([]);
  const [currentCatalogue, setCurrentCatalogue] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveCatalogues();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveCatalogues = () => {
    CatalogueDataService.getAll()
      .then(response => {
        setCatalogues(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveCatalogues();
    setCurrentCatalogue(null);
    setCurrentIndex(-1);
  };

  const setActiveCatalogue = (Catalogue, index) => {
    setCurrentCatalogue(Catalogue);
    setCurrentIndex(index);
  };

  const removeAllCatalogues = () => {
    CatalogueDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    CatalogueDataService.findByTitle(searchTitle)
      .then(response => {
        setCatalogues(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>


      <div className="col-md-6">
        <h4>Catalogues List</h4>

        <ul className="list-group">
          {Catalogues &&
            Catalogues.map((Catalogue, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveCatalogue(Catalogue, index)}
                key={index}
              >
                {Catalogue.title}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllCatalogues}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentCatalogue ? (
          <div>
            <h4>Catalogue</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentCatalogue.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentCatalogue.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentCatalogue.published ? "Published" : "Pending"}
            </div>

            <Link
              to={"/Catalogues/" + currentCatalogue.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
            <div>
              <br />
              <p>Please click on a Catalogue...</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default CataloguesList;

import React, { useState, useEffect } from "react";


const Catalogue = props => {
  const initialCatalogueState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentCatalogue, setCurrentCatalogue] = useState(initialCatalogueState);
  const [message, setMessage] = useState("");

  const getCatalogue = id => {
    CatalogueService.get(id)
      .then(response => {
        setCurrentCatalogue(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getCatalogue(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCatalogue({ ...currentCatalogue, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentCatalogue.id,
      title: currentCatalogue.title,
      description: currentCatalogue.description,
      published: status
    };

    CatalogueDataService.update(currentCatalogue.id, data)
      .then(response => {
        setCurrentCatalogue({ ...currentCatalogue, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateCatalogue = () => {
    CatalogueDataService.update(currentCatalogue.id, currentCatalogue)
      .then(response => {
        console.log(response.data);
        setMessage("The Catalogue was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteCatalogue = () => {
    CatalogueDataService.remove(currentCatalogue.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/Catalogues");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentCatalogue ? (
        <div className="edit-form">
          <h4>Catalogue</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentCatalogue.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentCatalogue.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentCatalogue.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentCatalogue.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteCatalogue}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateCatalogue}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Catalogue...</p>
        </div>
      )}
    </div>
  );
};

export default Catalogue;

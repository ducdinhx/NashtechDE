import React, { useState } from "react";
import CatalogueDataService from "../services/CatalogueService";

const AddCatalogue = () => {
  const initialCatalogueState = {
    id:'',
    name: "",
    published: false
  };
  const [Catalogue, setCatalogue] = useState(initialCatalogueState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCatalogue({ ...Catalogue, [name]: value });
  };

  const saveCatalogue = () => {
    var data = {
      name: Catalogue.name,
      description: Catalogue.description
    };

    CatalogueDataService.create(data)
      .then(response => {
        setCatalogue({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newCatalogue = () => {
    setCatalogue(initialCatalogueState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCatalogue}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={Catalogue.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={Catalogue.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveCatalogue} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCatalogue;

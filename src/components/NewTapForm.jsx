import React from '.react';
import PropTypes from 'prop-types';

function NewTapForm(props) {
  let _img = null;
  let _name = null;
  let _brand = null;
  let _price = null;
  let _abv = null;

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTap({name: _name.value, brand: _brand.value, price: _price.value, abv: _abv.value, image: _img.value});
  }

  return (
    <div className="row">
      <form onSubmit={handleNewTapFormSubmission} className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Placeholder" id="brand" type="text" className="validate" ref={(input) => { _brand = input; }} />
            <label for="brand">Brand</label>
          </div>    
          <div className="input-field col s6">
            <input placeholder="Placeholder" id="name" type="text" className="validate" ref={(input) => { _name = input; }}/>
            <label for="name">Name</label>
          </div>    
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="Placeholder" id="price" type="text" className="validate" ref={(input) => { _price = input; }} />
            <label for="price">Price</label>
          </div>
          <div className="input-field col s6">
            <input placeholder="Placeholder" id="abv" type="text" className="validate" ref={(input) => { _abv = input; }} />
            <label for="abv">ABV</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Placeholder" id="img" type="text" className="validate" ref={(input) => { _img = input; }} />
            <label for="img">Image</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit<i className="material-icons right">send</i></button>
      </form>
    </div>
  );
}

NewTapForm.propTypes = {
  onNewTap: PropTypes.func
};
            
export default NewTapForm;
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
    props.onNewTap({name: _name.value, brand: _brand.value, price: _price.value, abv: _abv.value});
  }

  return (
    <div class="row">
      <form onSubmit={handleNewTapFormSubmission} class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="Placeholder" id="name" type="text" class="validate"/>
            <label for="name">Name</label>
          </div>    
        </div>
      </form>
    </div>
  );
}

NewTapForm.propTypes = {
  onNewTap: PropTypes.func
};
            
export default NewTapForm;
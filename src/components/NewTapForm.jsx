import React from 'react';
import PropTypes from 'prop-types';

class NewTapForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    };
    this._img = null;
    this._name = null;
    this._brand = null;
    this._price = null;
    this._abv = null;
    this.handleNewTapFormSubmission.bind(this);
  }

handleNewTapFormSubmission(event) {
    event.preventDefault();
    this.props.onNewTap({ name: _name.value, brand: _brand.value, price: _price.value, abv: _abv.value, image: this._img.value });
    this._name.value='';
    _brand.value='';
    _price.value='';
    _abv.value='';
    _img.value='';
    this.setState({redirect: true});
  }

  render() {
    return (
      <div className="row">
        { this.state.redirect ? <Redirect to='/' /> : '' }
        <form onSubmit={handleNewTapFormSubmission} className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Brand" id="brand" type="text" className="validate" ref={(input) => { _brand = input; }} />
            </div>
            <div className="input-field col s6">
              <input placeholder="Name" id="name" type="text" className="validate" ref={(input) => { _name = input; }} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Price" id="price" type="text" className="validate" ref={(input) => { _price = input; }} />
            </div>
            <div className="input-field col s6">
              <input placeholder="ABV" id="abv" type="text" className="validate" ref={(input) => { _abv = input; }} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Image URL" id="img" type="text" className="validate" ref={(input) => { _img = input; }} />
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Add Tap<i className="material-icons right"></i></button>
        </form>
      </div>
    );
  }
}

NewTapForm.propTypes = {
  onNewTap: PropTypes.func
};

export default NewTapForm;
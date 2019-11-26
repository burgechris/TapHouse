import React from 'react';
import { Redirect } from 'react-router-dom';
import { v1 } from 'uuid';
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
    this._pints = 124;
    this.handleNewTapFormSubmission = this.handleNewTapFormSubmission.bind(this);
  }

  handleNewTapFormSubmission(event) {
    event.preventDefault();
    this.props.onNewTap({ name: this._name.value, brand: this._brand.value, price: this._price.value, abv: this._abv.value, image: this._img.value, pints: this._pints, id: v1() });
    this._name.value='';
    this._brand.value='';
    this._price.value='';
    this._abv.value='';
    this._img.value='';
    this.setState({redirect: true});
  }

  render() {
    return (
      <div className="row">
        { this.state.redirect ? <Redirect to='/tap' /> : '' }
        <form onSubmit={this.handleNewTapFormSubmission} className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Brand" id="brand" type="text" className="validate" ref={(input) => { this._brand = input; }} />
            </div>
            <div className="input-field col s6">
              <input placeholder="Name" id="name" type="text" className="validate" ref={(input) => { this._name = input; }} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Price" id="price" type="text" className="validate" ref={(input) => { this._price = input; }} />
            </div>
            <div className="input-field col s6">
              <input placeholder="ABV" id="abv" type="text" className="validate" ref={(input) => { this._abv = input; }} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Image URL" id="img" type="text" className="validate" ref={(input) => { this._img = input; }} />
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
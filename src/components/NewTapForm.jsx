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
    props.NewTapForm({})
  }

  return (
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input placeholder="Placeholder" id="first_name" type="text" class="validate">
              <label for="first_name">First Name</label>
        </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate">
                <label for="last_name">Last Name</label>
        </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input disabled value="I am not editable" id="disabled" type="text" class="validate">
                  <label for="disabled">Disabled</label>
        </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="password" type="password" class="validate">
                    <label for="password">Password</label>
        </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="email" type="email" class="validate">
                      <label for="email">Email</label>
        </div>
                  </div>
                  <div class="row">
                    <div class="col s12">
                      This is an inline input field:
          <div class="input-field inline">
                        <input id="email_inline" type="email" class="validate">
                          <label for="email_inline">Email</label>
                          <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
                      </div>
                    </div>
    </form>
                </div>
                )
              }

NewTapForm.PropTypes = {
                  onNewTap: PropTypes.func
            };
            
export default NewTapForm;
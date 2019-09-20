import React, {Component} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

/* Import Components */
//import CheckBox from '../components/CheckBox';
import Input from '../components/Input';
// import TextArea from '../components/TextArea'; import Select from
// '../components/Select';
import Button from '../components/Button'

export default class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        street: '',
        city: '',
        state: '',
        zip: ''

      }
    }

    /*this.handleStreet = this
      .handleStreet
      .bind(this);
    this.handleFullName = this
      .handleFullName
      .bind(this);*/
    this.handleFormSubmit = this
      .handleFormSubmit
      .bind(this);
    this.handleClearForm = this
      .handleClearForm
      .bind(this);

    this.handleInput = this
      .handleInput
      .bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  /*handleFullName(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        name: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleStreet(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        street: value
      }
    }), () => console.log(this.state.newUser))
  }*/

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        [name]: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('http://example.com', {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      response
        .json()
        .then(data => {
          console.log("Successful" + data);
        })
    })
  }

  handleClearForm(e) {

    e.preventDefault();
    this.setState({
      newUser: {
        name: '',
        street: '',
        city: '',
        state: '',
        zip: ''
      }
    })
  }

  render() {
    return (

      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <h3>
          Shipping Label Maker
        </h3>
        <div class="progress slider">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
            width: '75%'
          }}></div>
        </div>
        <h3>
          Enter the receiver's address:
        </h3>
        <Input
          inputType={'text'}
          title={'Name:'}
          name={'name'}
          value={this.state.newUser.name}
          placeholder={'Enter your name'}
          handleChange={this.handleInput}/>

        <Input
          inputType={'text'}
          name={'street'}
          title={'Street:'}
          value={this.state.newUser.street}
          placeholder={'Enter your street information'}
          handleChange={this.handleInput}/>
        <form >
          <div className="form-group row">
            <label for='city' className="col-sm-2 col-form-label">City:</label>
            <div className="col-sm-3">
              <input
                className="form-control"
                id='city'
                name='city'
                type='text'
                value={this.state.newUser.city}
                onChange={this.handleInput}
                placeholder='Enter your city'/>
            </div>
            <label for='state' className="col-sm-1 col-form-label">State:</label>
            <div className="col-sm-2">
              <input
                className="form-control"
                id='state'
                name='state'
                type='text'
                value={this.state.newUser.state}
                onChange={this.handleInput}
                placeholder='Enter your state'/>
            </div>
            <label for='zip' className="col-sm-1 col-form-label">Zip:</label>
            <div className="col-sm-3">
              <input
                className="form-control"
                id='zip'
                name='zip'
                type='text'
                value={this.state.newUser.zip}
                onChange={this.handleInput}
                placeholder='Enter your zip code'/>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-md-1 offset-md-5">
            <Button
              action={this.handleFormSubmit}
              type={'primary'}
              title={'Previous'}
              style={buttonStyle}/> {/*Submit */}
          </div>
          <div className="col-md-3 ">
            <Button
              action={this.handleClearForm}
              type={'secondary'}
              title={'Next'}
              style={buttonStyle}/> {/* Clear the form */}
          </div>
        </div>

      </form>

    );
  }
}
const buttonStyle = {
  margin: '10px 10px 10px 10px'
}
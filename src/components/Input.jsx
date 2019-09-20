import React from 'react';

const Input = (props) => {
  //console.log(props.value);
  return (
    <form >
      <div className="form-group row">
        <label for={props.name} className="col-sm-2 col-form-label">{props.title}</label>
        <div className="col-sm-10">
          <input
            className="form-control"
            id={props.name}
            name={props.name}
            type={props.inputType}
            value={props.value}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            {...props}/>
        </div>
      </div>
    </form>

  )
}

export default Input;
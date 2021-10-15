import React from 'react'
import logo from './logo.svg';
import './App.css';
import StorageHelper from './helpers/storageHelper'
import CommonHelper from './helpers/commonHelper'
const commonCall = new CommonHelper();


class Student_form extends React.Component {
  constructor(props) {
    console.log("first")
    super(props);
    this.state = {
      id: "",
      name: [],
      location: "",
      name_details: [],
    };
  }







  async Submit() {
    console.log(this.state)
    if (this.state.name == "") {
      alert("Enter name");
    }
    else if (this.state.location == "") {
      alert("Enter location");
    }
    else {
      console.log("sri")
      await fetch('http://localhost:8092/api/v1/employee/get-createlistCrib', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)

      }).then(res => res.json())
        .then((result) => {
          if (result) {
            alert("Register Successfully");
            window.location = "/ViewList";
          }
          else {

            return false;
          }
        }, function (error) {
          debugger;
          return false;
        })
    }
  }

  async DeleteEmployee(e) {

    console.log("sqr")
    // console.log(sqr)
    var req = { name: this.state.name }

    let requestOptions = await fetch('http://localhost:8092/api/v1/employee/get-delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req)
    });
    if (requestOptions.status == 200) {
      alert("Deleted Successfully");
    } else {
      alert("error");
    }
  };


  async UpdateEmployee(e) {

    console.log("sqr")
    // console.log(sqr)
    var req = { name: this.state.name }

    let requestOptions = await fetch('http://localhost:8092/api/v1/employee/get-updatelist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req)
    });
    if (requestOptions.status == 200) {
      alert("Update Successfully");
    } else {
      alert("error");
    }
  };






  handleAssign(event, values) {
    var value = values;
    console.log(event.target.value)
    console.log(values)
    this.setState({
      city: event.target.value
    });

  }



  handleChange(event) {
    var value = event.target.name;
    this.setState({
      [value]: event.target.value
    });
  }

  render() {
    return (
      <div id="login" style={{ background: "linear-gradient(115deg, #66d8e4 10%, #9f01ea 90%)", width: "100%", height: "88.2vh" }}>
        <div>

          <form className="gtg">
            <h2>Crib Registration</h2>
            <br /><br />
            <table cellpadding="50">

              <tr>
                <td className="s1" > Name</td>
                <td><input type="text" name="name" size="15" placeholder="Enter your name" maxlength="50" value={this.state.name} onChange={this.handleChange.bind(this)} />

                </td>
              </tr>

              <tr>
                <td>location</td>
                <td><input type="text" name="location" size="15" placeholder="Enter your location" maxlength="50" value={this.state.location} onChange={this.handleChange.bind(this)} />

                </td>
              </tr>



              <br />

              <button className="bts" onClick={this.Submit.bind(this)}>Submit</button>
              <button className="bts1" name="Id" value="Submit" onClick={this.DeleteEmployee.bind(this)} >Delete</button>


            </table>
          </form>

        </div>
      </div>

    );
  }
}

export default Student_form;







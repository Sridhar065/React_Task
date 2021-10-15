import React from 'react'
import logo from './logo.svg';
import './App.css';
import StorageHelper from './helpers/storageHelper'
import CommonHelper from './helpers/commonHelper'


export default class Tables extends React.Component {
  static displayName = Tables.name;

  constructor(props) {
    super(props);
    this.state = {
      name: [],
      name_details: [],
      location: "",
      Search: "",
      loading: true
    };

    fetch('http://localhost:8092/api/v1/employee/get-list')
      .then(response => response.json())
      .then(data => {
        console.log(data.content)
        this.setState({ name: data.content, loading: false });
      });
  }




  async DeleteEmployee() {

    console.log("sqr")

    let requestOptions = await fetch('http://localhost:8092/api/v1/employee/get-delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    });
    if (requestOptions.status == 200) {
      alert("Deleted Successfully");
    } else {
      alert("error");
    }
  };




  async Search(e) {
    fetch('http://localhost:8092/api/v1/employee/get-search')
      .then(response => response.json())
      .then(data => {
        console.log(data.content)
        this.setState({ name: data.content, loading: false });
      });
  }

  handleAssign(event, values) {
    var value = values;
    console.log(event.target.value)
    console.log(values)
    this.setState({
      Search: event.target.value
    });
  }



  handleChange(event) {
    var value = event.target.name;
    this.setState({
      [value]: event.target.value
    });
  }


  static renderForecastsTable(name) {
    return (
      <table className="hed-row12">
        <thead>
          <tr className="hed-row">
            <th className="hed-row1">ID</th> <br />
            <th className="hed-row2">name</th> <br />
            <th className="hed-row3">location</th> <br />
          </tr>
        </thead>
        <tbody>
          {name.map(name =>
            <tr className="hed-row6" key={name.id}>
              <td>{name.id}</td> <br />
              <td>{name.name}</td> <br />
              <td>{name.location}</td> <br /> <br />


            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Tables.renderForecastsTable(this.state.name);

    return (
      <div className='table-striped'>
        <h1>{StorageHelper.getValue("name")}</h1>
        <h1>{StorageHelper.getValue("last")}</h1>

        <div>

          search<select name="Search" className="dataip12" style={{ width: "11%", height: "20px", borderRadius: "4px", height: "28px" }} value={this.state.Search}
            onChange={this.handleAssign.bind(this)} >

            {this.state.name_details.map((obj) =>
              <option key={obj.name}>{obj.name}</option>
            )};
      </select>
          <br /> <br />


          <button className="btn23" onClick={this.Search.bind(this)} >Search</button> <br /> <br />
        </div>

        {contents}
      </div>
    );
  }
}






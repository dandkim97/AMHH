import React from 'react';
import axios from 'axios';
import '../style/PetList.css';

class PetList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/pets/')
    .then(resp => {
      this.setState({pets: resp.data });
    })
    .catch(console.err)
  }

  petListIterator() {
    return this.state.pets.map(currentPet => {
      return <Pet pet={currentPet} key={currentPet._id}/>;
    })
  }
  
  render() {
    return (
      <div>
        <h3 id="top-bar">Animal Adoptees!</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Photo</th>
              <th>Nickname</th>
              <th>Animal Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            { this.petListIterator() }
          </tbody>
        </table>
        <div>
        </div>
      </div>
    )
  }
}

const Pet = props => (
  <tr>
    <td> <img src={props.pet.imgUrl} alt={props.pet.nickName} width="100" height="100"/> </td>
    <td> {props.pet.nickName} </td>
    <td> {props.pet.animalType} </td>
    <td> {props.pet.description} </td>
  </tr>
)
export default PetList;

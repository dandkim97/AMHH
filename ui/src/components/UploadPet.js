import React from "react";
import axios from 'axios';

class UploadPet extends React.Component {
    constructor(props){
        super(props);

        this.uploadImgUrl = this.uploadImgUrl.bind(this);
        this.uploadNickName = this.uploadNickName.bind(this);
        this.uploadAnimalType = this.uploadAnimalType.bind(this);
        this.uploadDescription = this.uploadDescription.bind(this);
        this.upload = this.upload.bind(this);

        this.state={
            imgUrl: '',
            nickName: '',
            animalType: '',
            description: ''
        }
    }

    uploadImgUrl(n){
        this.setState({imgUrl: n.target.value})
    }
    uploadNickName(n){
        this.setState({nickName: n.target.value})
    }
    uploadAnimalType(n){
        this.setState({animalType: n.target.value})
    }
    uploadDescription(n){
        this.setState({description: n.target.value})
    }

    upload(){
        const pet = {
            imgUrl: this.state.imgUrl,
            nickName: this.state.nickName,
            animalType: this.state.animalType,
            description: this.state.description
        }

        axios.post('http://localhost:3001/pets', pet)
            .then(resp => console.log(resp.data));

        this.setState({
            imgUrl: '',
            nickName: '',
            animalType: '',
            description: ''
        })
    } 
    
    render() {
        return (
            <div>
                <h2>Upload a Pet</h2>
                <br/>
                <form onSubmit={this.upload}>
                <div className="form-group"> 
                    <label>Img Url: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.imgUrl}
                        onChange={this.uploadImgUrl}
                        />
                </div>
                <div className="form-group"> 
                    <label>Nickname: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.nickName}
                        onChange={this.uploadNickName}
                        />
                </div>
                <div className="form-group"> 
                    <label>Animal Type: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.animalType}
                        onChange={this.uploadAnimalType}
                        />
                </div>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.uploadDescription}
                        />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Pet" className="btn btn-primary" />
                </div>
                </form>
            </div>
        )
    }
}
export default UploadPet;
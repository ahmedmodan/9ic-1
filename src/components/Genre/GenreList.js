import React, {Component} from 'react'
import GenreListItem from './GenreListItem'
import apiTMDB from '../../utils/apiTMDB'

export default class GenreList extends Component {

    constructor(props){
      super(props)
      this.state = {
        genre: []
      }
    }

    componentDidMount(){
      this.init()
    }

    init(){
        apiTMDB.getGenre()
          .then(function(data){
            this.setState({genre: data.genres})
          }.bind(this))
    }

    render() {   
        var genre = this.state.genre.map(function(g, index){
             return <li className="list-group-item" key={index}>{g.name}</li>
           })     

        return (
            <div className="row text-center">
                <h4>Movie Genre</h4>
                <div className="container " id="genre-list">
                       {
                           this.state.genre.map((g, index) => (
                               <GenreListItem key={g.id} {...g} />
                            ))
                       }
                </div>
            </div>
        )
    }
}


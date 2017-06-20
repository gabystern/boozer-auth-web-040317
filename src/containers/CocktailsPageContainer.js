import React, { Component } from 'react'

import CocktailsPage from '../components/CocktailsPage'

class CocktailsPageContainer extends Component {

  constructor(){
    super()
    this.state = {
      cocktails: []
    }
  }

  componentDidMount(){
    if (!localStorage.getItem('user_id')){
      this.props.history.push('/login')
    } else {
      fetch('http://localhost:3000/api/v1/cocktails')
        .then(res => res.json() )
        .then( cocktails => this.setState({cocktails: cocktails}))
    }
  }

  render(){
    return (
      <CocktailsPage cocktails={this.state.cocktails} />
    )
  }
}

export default CocktailsPageContainer

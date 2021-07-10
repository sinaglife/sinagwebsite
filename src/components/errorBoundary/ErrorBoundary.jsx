import React from "react"
import ErrorPage from "../../pages/404/ErrorPage"



class ErrorBoundary extends React.Component {
  
  state = {
    error: false
  }

  componentDidCatch(){
    this.setState({error: true})
  }

  componentDidUpdate(prevProps, prevState) {

    if(prevProps.location !== this.props.location && this.state.error) {
      this.setState({error: false})
    }
  }

  render(){

    const {error} = this.state
    const {children} = this.props

    if(error){
      return (
        <ErrorPage/>
      )
    }

    return children || null
  }
}

export default ErrorBoundary
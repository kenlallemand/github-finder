import React, { Component } from 'react'
import propTypes from 'prop-types'


export class Search extends Component {
    state = {
        text: ''
    }

    // eslint-disable-next-line react/no-typos
    static propTypes = {
        searchUsers: propTypes.func.isRequired,
        clearUsers: propTypes.func.isRequired,
        showClear: propTypes.bool.isRequired

    };


    onChange = (e) => {
        //the e.taarget.name is the name of the component, with this we can write an universal function to utilize with all the properties and forms
        this.setState({ [e.target.name]: e.target.value });
        
        
    }

    onSubmit = (e) =>{
        e.preventDefault();
        //console.log(this.state.text);
        this.props.searchUsers(this.state.text);
        this.setState({text: ''});
    }

    render() {
        const {showClear, clearUsers} = this.props;
        return (
            <div>
                <form className='form' onSubmit = {this.onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
                
            </div>
        )
    }
}

export default Search

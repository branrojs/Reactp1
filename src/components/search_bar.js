import React, { Component } from 'react';

//class based component
class SearchBar extends Component{
	constructor(props){
		super(props);
		
		this.state = { term: ''};
	}

	render() {
		return (
			<div className="search-bar">
				<input
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}


export default SearchBar;

//the arrow function have two types of parameters, with (multi) and without single

/* normal component
const SearchBar = () => {
	return <input />;
};*/

//this.state.term = event.target.value this kind of sentence are bad!

//exporting our component into other file

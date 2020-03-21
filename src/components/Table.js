import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
	constructor() {
		super()
		this.people = [
			{
				name: "John Sina",
				birth: "11/30/2011"
			}, {
				name: "Barcy Washington",
				birth: "09/16/1992"
			}, {
				name: "Peter Parker",
				birth: "01/16/1992"
			}, {
				name: "Jimmy Shergil",
				birth: "12/12/2001"
			}, {
				name: "Alexander Alfred",
				birth: "02/09/1891"
			}, {
				name: "Krishna Gupta",
				birth: "12/01/1982"
			}, {
				name: "Sania Mirza",
				birth: "11/30/2011"
			}, {
				name: "Lata Pathak",
				birth: "10/31/1999"
			}
		];
	}
	compareDates(person1, person2) {
		const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
		const date1 = new Date(person1.birth.replace(pattern, '$3-$2-$1'));
		const date2 = new Date(person2.birth.replace(pattern, '$3-$2-$1'));
		if (date1 < date2) {
			return -1;
		}
		if (date1 === date2) {
			return 0;
		}
		if (date1 > date2) {
			return 1;
		}
	}

	compareNames(person1, person2) {
		return person1.name.localeCompare(person2.name);
	}
	render() {
		const sortParameter = this.props.sortParameter;
		const sortCallback = sortParameter==='name'? this.compareNames : this.compareDates;
		const people = this.people.sort(sortCallback);
		return (
			<div className='table-div'>
				<table className='table table-striped table-bordered table-hover full-width'>
					<thead>
						<tr>
							<th className='course-name'>Person Name</th>
							<th className='duration'>Date of Birth</th>
						</tr>
					</thead>
					<tbody>
						{people.map((person,index) => (<tr key={index}><td>{person.name}</td><td>{person.birth}</td></tr>))}
					</tbody>
				</table>
			</div>
		);

	}
}


Table.propTypes = {
	sortParameter: PropTypes.string
}

export default Table;

import React from 'react';

export class FilterForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      filterText: e.target.value
    })
    this.props.onChange(e.target.value)
  }

  render () {
    return (
      <div>
        <input type="text" id="filter" placeholder="Search for..."
          value={this.state.filterText}
          onChange={this.handleChange}/>
      </div>
    )
  }
}

export default FilterForm

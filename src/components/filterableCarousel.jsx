import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import FilterForm from './filterForm.jsx'
import '@brainhubeu/react-carousel/lib/style.css';
import { data } from '../index.js'

var myTestData = {
  'data': [{
    'title': 'Middle Harbour Yacht Club',
    'img': 'https://placeimg.com/640/480/nature',
    'location': 'The Spit, Sydney NSW'
  }, {
    'title': 'Boat Licence Course',
    'img': 'https://placeimg.com/640/480/tech',
    'location': 'Maritime Training School, Sydney '
  }, {
    'title': 'Corporate Boat Charter',
    'img': 'https://placeimg.com/640/480/arch',
    'location': 'Sydney Harbor Escapes, Sydney'
  }, {
    'title': 'Pro.Formance Boat Repairs',
    'img': 'https://placeimg.com/640/480/animals',
    'location': 'Sydney'
  }, {
    'title': 'King St Warf',
    'img': 'https://placeimg.com/640/480/people',
    'location': 'Sydney'
  }]
}

export class FilterableCarousel extends React.Component {
  constructor () {
    super()
    this.state =
    {
      data: [],
      filteredData: [{'title': 'No matching results...','img': 'https://placeimg.com/640/480/any/grayscale','location': ''}],
      emptyData: [{'title': 'No matching results...','img': 'https://placeimg.com/640/480/any/grayscale','location': ''}]
    };
  }

  componentWillMount () {
    var data = this.getDataAsync();

    this.setState({
      filteredData: []
    })
  }

  filterUpdate = (filterValue) => {
    let filteredData = this.state.data
    console.debug(this);
    filteredData = filteredData.filter((data) => {
      let title = data.title.toLowerCase() + data.location.toLowerCase()
      return title.indexOf(
        filterValue.toLowerCase()) !== -1
    })

    if (filteredData.length == 0) {
      filteredData = this.state.emptyData
    }

    this.setState({
      filteredData
    })
  }

  getDataAsync = async () => {
    const apiCall = await fetch(this.props.dataUrl);
    const data = await apiCall.json();
    this.setState({
      data: data.data,
      filteredData: data.data
    })
  }

  render () {
    return (
      <div>
        <Carousel
          slides=
            {this.state.filteredData.map(item => (
              <React.Fragment key={item.title}>
                <div className="image_info_slide">
                  <img src={item.img} alt="" />
                  <div className='info_panel'>
                    <div className='info_text_container'>
                      <div className='info_title ellipsis'>{item.title}</div>
                      <div className='info_location ellipsis'>
                        <div><i className="fa" aria-hidden="true">{ item.location ? String.fromCharCode(parseInt('f041;',16)) : ''}</i>&nbsp;{item.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          clickToChange
          keepDirectionWhenDragging
          addArrowClickHandler
          itemWidth={this.props.itemWidth}
          arrowLeft={<div className='carousel_arrow_left'> <div className='carousel_arrow_left'> <i className="fa fa-chevron-left"/> </div></div>}
          arrowRight={<div className='carousel_arrow_right'> <i className="fa fa-chevron-right"/> </div>}
        />
      </div>
    );
  }
}

export default FilterableCarousel

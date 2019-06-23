import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import '@brainhubeu/react-carousel/lib/style.css';

import FilterForm from './components/filterForm';
import FilterableCarousel from './components/filterableCarousel.jsx'
import SlidePanel from './components/slidePanel.jsx'

export var data = {
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

var fiterableCarousel = ReactDOM.render(<FilterableCarousel dataUrl={`http://demo6045376.mockable.io/carousel`} itemWidth={250}> </FilterableCarousel>, document.getElementById('filterableCarouselContainer'));
ReactDOM.render(<FilterForm onChange={fiterableCarousel.filterUpdate}> </FilterForm>, document.getElementById('filterForm'));
ReactDOM.render(<SlidePanel dataUrl={`http://demo6045376.mockable.io/featured`} itemWidth={250}> </SlidePanel>, document.getElementById('staticSlideContainer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

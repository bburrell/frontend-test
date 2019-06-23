import React from 'react';

export class SlidePanel extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    var data = this.getDataAsync();

    this.setState({
      data: []
    })
  }

  getDataAsync = async () => {
    const apiCall = await fetch(this.props.dataUrl);
    const data = await apiCall.json();
    this.setState({
      data: data.data
    })
  }

  render () {
    return (
      <div className='slide_container ellipsis'>
            {this.state.data.map(item => (
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
      </div>
    );
  }
}

export default SlidePanel

import React from 'react';

export const Services = (props) => {
  return (
    <div id='services'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            Transforming your daily routine into a balanced, fulfilling lifestyle.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 service-item'>
                  <div className='service-icon'>
                    <i className={d.icon}></i>
                  </div>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}

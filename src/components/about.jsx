export const About = (props) => {
  const imageSrc = props.isDarkMode ? 'img/wakingappDark.png' : 'img/wakingappLight.png';

  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-8'>
            <img src={imageSrc} className='img-responsive about-img' alt='' />
          </div>
          <div className='col-xs-12 col-md-4'>
            <div className='about-text'>
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>Why Choose Us?</h3>
              <div className='list-style'>
                <div className='col-lg-12 col-sm-12 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

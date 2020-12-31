import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <section className='section'>
      <div className='block'>
        <h1 className='title has-text-primary'>About This Application</h1>
        <p>
          Forecaster is an every-day-use, minimalist weather application
          designed to convey current weather conditions including temperature
          (both measured and real-feel), cloud cover, and wind. Forecaster also
          provides the current-day forecast and the next two days forecast with
          hour-by-hour graphs for temperature, and rain or snow if applicable.
        </p>
      </div>
      <div className='block'>
        <h5 className='subtitle is-4 has-text-bold'>Layout</h5>
        <p className='block'>
          The Navbar contains 3 items. The icon to the far left indicates
          current weather conditions at your location. This icon also functions
          as the "home" button. The time displayed in the top right indicates
          the most recent time the applicaiton data was updated, which occurs
          every 15 minutes.
        </p>
        <p className='block'>
          Below the Navbar, weather alerts that may exist for your chosen
          location are shown in a yellow banner. Clicking the banner will
          provide more information about the alert in a modal popup that can be
          exited using the "x" in the top right. Finally, the forecasts for the
          current day and the next two days follow, and will bring up a graph
          when clicked (see how to use).
        </p>
      </div>
      <div className='block'>
        <h5 className='subtitle is-4 has-text-bold'>How to Use</h5>
        <p className='block'>
          To change location, click on the settings "cog" icon in the top right
          of the main banner, and enter a new location. The location will be
          searched by the API, and while most of the United States has coverage,
          small towns may not be located correctly by the search. If this is the
          case, use the nearest large town as a proxy for your location.{' '}
        </p>
        <p className='block'>
          To view the weather forecast for your location, click one of the
          weather cards under the main banner. The date and conditions for that
          day are indicated on the card, as well as the high temperature (in
          blue) and low temperature (in grey). When a forecast day is selected,
          the screen will be automatically scrolled to the bottom where a graph
          will be drawn indicating the forecasted hour-by-hour temperature
          throughout the day (both measured and real-feel). If rain or snow is
          forecasted as well, an additional graph will be drawn to show
          hour-by-hour forecasts for each of those events. To close the forecast
          graphs, click the "x" to the right of the Temperature graph.
        </p>
      </div>
      <div>
        <h2 className='title mt-4 has-text-primary'>About The Developer</h2>
        <div className={styles.about}>
          <div className={styles.aboutLeft}>
            <figure className='image'>
              <img
                className='is-rounded'
                src='https://avatars3.githubusercontent.com/u/26473464?s=400&u=11d8026e48a2ce4d318c82e58ee91f2668109393&v=4'
              ></img>
            </figure>
          </div>
          <div className={styles.aboutRight}>
            <p>
              <strong>Corey Munn</strong> Is a developer from Washington, DC and
              has experience with React and Tableau.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

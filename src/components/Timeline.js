import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './Timeline.css'; // Importing CSS styles

const Timeline = () => (
  <div className="timeline-container">
    {/* January */}
    <div className="timeline-item normal">
      <div className="timeline-content">
        <h2 class="windsong">January</h2>
        <p >Georgia Islands: Witness juvenile king penguins in their natural habitat.</p>
      </div>
      <div className="timeline-image">
        {/* Replace 'path/to/image2.png' with your actual image path */}
        <StaticImage class="month" src="../images/january.png" alt="Event 2" />
      </div>
    </div>
    {/* February */}
    <div className="timeline-item reverse">
      <div className="timeline-content">
        <h2 class="windsong">February</h2>
        <p >Venice, Italy: Experience the romantic charm of this iconic city.</p>
      </div>
      <div className="timeline-image">
        {/* Replace 'path/to/image2.png' with your actual image path */}
        <StaticImage class="month" src="../images/february.png" alt="Event 2" />
      </div>
    </div>
    {/* March */}
    <div className="timeline-item normal">
      <div className="timeline-content">
        <h2 class="windsong">March</h2>
        <p >Himeji, Japan: Explore the stunning Himeji Castle and its beautiful gardens.</p>
      </div>
      <div className="timeline-image">
        {/* Replace 'path/to/image2.png' with your actual image path */}
        <StaticImage class="month" src="../images/march.png" alt="Event 2" />
      </div>
    </div>
    {/* April */}
    <div className="timeline-item reverse">
      <div className="timeline-content">
        <h2 class="windsong">April</h2>
        <p >Cape Town, South Africa: Enjoy the scenic beauty, vibrant culture, and delicious cuisine.</p>
      </div>
      <div className="timeline-image">
        {/* Replace 'path/to/image2.png' with your actual image path */}
        <StaticImage class="month" src="../images/april.png" alt="Event 2" />
      </div>
    </div>
        {/* May */}
        <div className="timeline-item normal">
      <div className="timeline-content">
        <h2 class="windsong">May</h2>
        <p >Cudillero, Spain: Discover the idyllic seaside town with colourful houses.</p>
      </div>
      <div className="timeline-image">
        {/* Replace 'path/to/image2.png' with your actual image path */}
        <StaticImage class="month" src="../images/may.png" alt="Event 2" />
      </div>
    </div>
    {/* June */}
    <div className="timeline-item reverse">
      <div className="timeline-content">
        <h2 class="windsong">June</h2>
        <p >Lofoten, Norway: Immerse yourself in the breathtaking landscapes and midnight sun.</p>
      </div>
      <div className="timeline-image">
        {/* Replace 'path/to/image2.png' with your actual image path */}
        <StaticImage class="month" src="../images/june.png" alt="Event 2" />
      </div>
    </div>
    {/* July */}
    <div className="timeline-item normal">
      <div className="timeline-content">
        <h2 class="windsong">July</h2>
        <p >Carvoeiro, Portugal: Relax on picturesque beaches and explore hidden caves.</p>
      </div>
      <div className="timeline-image">
        {/* Replace 'path/to/image2.png' with your actual image path */}
        <StaticImage class="month" src="../images/july.png" alt="Event 2" />
      </div>
    </div>
    {/* August */}
    <div className="timeline-item reverse">
      <div className="timeline-content">
        <h2 class="windsong">August</h2>
        <p >Tanzania: Witness the wildebeest river crossing during the Great Migration..</p>
      </div>
      <div className="timeline-image">
        {/* Replace 'path/to/image2.png' with your actual image path */}
        <StaticImage class="month" src="../images/august.png" alt="Event 2" />
      </div>
    </div>
        {/* September */}
        <div className="timeline-item normal">
      <div className="timeline-content">
        <h2 class="windsong">September</h2>
        <p >Galápagos Islands, Ecuador: Experience the unique environment and wildlife of the Enchanted Isles.  </p>
      </div>
      <div className="timeline-image">
        {/* Replace 'path/to/image2.png' with your actual image path */}
        <StaticImage class="month" src="../images/september.png" alt="Event 2" />
      </div>
    </div>
    {/* October */}
    <div className="timeline-item reverse">
      <div className="timeline-content">
        <h2 class="windsong">October</h2>
        <p >Ningaloo Reef, Australia: Surround yourself with colour and exotic sealife.</p>
      </div>
      <div className="timeline-image">
        {/* Replace 'path/to/image2.png' with your actual image path */}
        <StaticImage class="month" src="../images/october.png" alt="Event 2" />
      </div>
    </div>
    {/* November */}
    <div className="timeline-item normal">
      <div className="timeline-content">
        <h2 class="windsong">November</h2>
        <p >Troll Peninsula, Iceland: Drive the breathtaking coastline under the Northern Lights.</p>
      </div>
      <div className="timeline-image">
        {/* Replace 'path/to/image2.png' with your actual image path */}
        <StaticImage class="month" src="../images/november.png" alt="Event 2" />
      </div>
    </div>
    {/* December */}
    <div className="timeline-item reverse">
      <div className="timeline-content">
        <h2 class="windsong">December</h2>
        <p >Salzburg, Austria: Festive charm and Christmas Markets and The Sound of Music.</p>
      </div>
      <div className="timeline-image">
        {/* Replace 'path/to/image2.png' with your actual image path */}
        <StaticImage class="month" src="../images/december.png" alt="Event 2" />
      </div>
    </div>
    {/* Repeat the structure for more events, alternating the className between 'normal' and 'reverse' */}
  </div>
);

export default Timeline;

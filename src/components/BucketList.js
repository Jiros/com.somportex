import React from 'react';
import './BucketList.css'; // Importing CSS styles
import { StaticImage } from 'gatsby-plugin-image';

const BucketList = () => (
  <div className="card-list-container">
    <div className="card">
      <div className="card-number windsong">
      <StaticImage src="../images/maldives.png" alt="Maldives" />
      </div>
      <div className="card-text">
        <h2 class="fell">Dreamy Maldives</h2>
        <p >For ocean engagement, consider the Maldives. Picture a crescent of bungalows over blue waters, with little swimming pools shaded by swaying palms. Milaidhoo, seen from a seaplane, epitomizes the Maldivian paradise. Don’t miss the overwater restaurant shaped like a traditional Maldivian boat, complete with glass floors for observing marine life as you dine.</p>
      </div>
    </div>
    <div className="card">
      <div className="card-number windsong">
      <StaticImage src="../images/africa.png" alt="Africa" />
      </div>
      <div className="card-text">
        <h2 class="fell">South Africa</h2>
        <p> If brilliant variety appeals to you, South Africa awaits. Revel in the lofty summit of Table Mountain, encounter waddling penguins at Boulders Beach, and explore the craggy shores of the Garden Route. Conclude your journey amid sun-kissed vineyards near Stellenbosch, where mountains tower over vine-covered slopes and whitewashed farms.</p>
      </div>
    </div>
    <div className="card">
      <div className="card-number windsong">
      <StaticImage src="../images/thailand.png" alt="Thailand" />
      </div>
      <div className="card-text">
        <h2 class="fell">Low-Season Thailand</h2>
        <p>Seeking top-tier relaxation? The Dusit Thani Laguna Phuket offers just that. Imagine a five-star resort with doors opening to a white-sand beach. Indulge in spa treatments that leave you in a state of priestly calm. Despite its mouthful of a name, this place promises serenity and rejuvenation.</p>
      </div>
    </div>
    <div className="card">
      <div className="card-number windsong">
      <StaticImage src="../images/petra.png" alt="Petra" />
      </div>
      <div className="card-text">
        <h2 class="fell">Petra</h2>
        <p>Dive into history with a guided tour of Petra, the lost city where Indiana Jones once sought the Holy Grail. Accompanied by a bona fide archaeologist, you’ll gain erudite insights into Roman temples, Byzantine mosaics, and Crusader castles. Leave the whips and fedoras behind; this adventure is all about historical revelations.</p>
      </div>
    </div>
    <div className="card">
      <div className="card-number windsong">
      <StaticImage src="../images/dubai.png" alt="Dubai" />
      </div>
      <div className="card-text">
        <h2 class="fell">Luxury Dubai</h2>
        <p>Nestled in the shadow of the world’s tallest ferris wheel, Caesars Palace Bluewaters Dubai epitomizes luxury. From oversized swimming pools to palatial rooms, this hotel offers respite from the furnace-like heat. Plus, its prime seafront location ensures a memorable stay</p>
      </div>
    </div>
    {/* Repeat for other cards */}
  </div>
);

export default BucketList;

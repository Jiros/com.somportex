import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import ContactForm from "../components/ContactForm"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <div class="centre-div">
        <h3 class="windsong">What we offer</h3>
            <div class="fell">Unique Vacation Ideas: Explore authentic travel experiences around the globe. From family adventures to culinary delights and thrilling escapades, they curate bespoke itineraries that cater to your desires.
              Luxury Tours: Whether you’re dreaming of Ireland’s lush landscapes, the historical charm of the UK, the mystique of Europe, the wild beauty of Africa, or the enchantment of Asia, Somportextravel has you covered.
              So, if you’re ready to embark on a journey that transcends the ordinary, Somportextravel awaits, ready to weave magic into your travel memories. </div>

        <h3 class="windsong">Expert Planning</h3>
        <div class="fell">Having experts with a strong understanding of the local culture and environment can greatly enhance a travel experience. By customizing each trip based on individual preferences, travelers are able to optimize their time and create unforgettable memories. This tailored approach allows for a more meaningful and enriching journey.</div>

        <h3 class="windsong">End To End Travel</h3>
        <div class="fell">Over a decade of experience in designing tailor-made journeys from start to finish. With a transatlantic team between the UK and USA we operate for Global guests and world-wide vacations. Our expert travel consultants provide thoughtful, practical and passionate travel design and trip management.  Handpicked, carefully curated hotels, villas and experiences - driven by our client centric ethos and the most up to date local knowledge. Unrivaled access to the best on-the-ground guides and destination experts. Flexibility if your plans need to change - we are accessible, proactive and always willing to help. </div>
        <br/>
        <div class="fell">At Somportex Travel we are destination experts and highly experienced service driven travel designers. We operate a Private Client Culture – taking care of the world’s most discerning travelers and private families. Working in partnership with passionate and authentic brands,  we celebrate the cultures and destinations we represent with a highly bespoke approach to both personal family trips and small high-end corporate travel.</div>
        <br />
        <div class="fell">Our global collection of exclusive travel services includes luxury hotels, private fully staffed villas, off-book private islands, luxury city apartments, private jet charters,  access to VIP events, luxury travel experiences and activities. We design the best luxury travel holidays, vacations and experiences unique to each of our guests whether they seek to retain us or just return every year for their family vacation. Our comprehensive travel management includes arranging private jets and commercial flights, ensuring each aspect of your journey is seamlessly integrated. We provide 24/7 support, ready to respond to any changes or needs that may arise, complemented by access to the best on-the-ground guides and a bespoke travel app for a well-informed, stress-free experience. Known for our experience, and trusted for our global knowledge once our clients travel with Somportex Travel, they always travel with Somportex Travel.</div>
        
        <h3 class="windsong">25 years</h3>
        <div class="fell">Our directors have led fascinating lives, immersed in the world of travel and hospitality. adventurers through the wilds of Botswana and Southern Africa. orchestrated thrilling wildlife expeditions and treks across the majestic Himalayas. Somportex Travel , Is  a boutique travel agency that blends specialized expertise with a personal touch. Now, these intrepid directors commute to the office each day, infusing their dedication and inspiration into every aspect of their work.</div>
</div>
<ContactForm />

    </div>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

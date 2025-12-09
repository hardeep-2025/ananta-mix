import "./Amenities.css";
import { Col, Container, Row } from 'react-bootstrap';

const smartHomes = `${process.env.REACT_APP_API_URL}/assests/images/amenities/smart-home.webp`;
const sketch = `${process.env.REACT_APP_API_URL}/assests/images/amenities/sketch.webp`;
const projects = `${process.env.REACT_APP_API_URL}/assests/images/amenities/check-list.webp`;
const stadium = `${process.env.REACT_APP_API_URL}/assests/images/amenities/stadium.webp`;
const park = `${process.env.REACT_APP_API_URL}/assests/images/amenities/park.webp`;
const swimming = `${process.env.REACT_APP_API_URL}/assests/images/amenities/swimming-pool.webp`;
const powerStation = `${process.env.REACT_APP_API_URL}/assests/images/amenities/power-station.webp`;
const security = `${process.env.REACT_APP_API_URL}/assests/images/amenities/secure-shield.webp`;
const tableTennis = `${process.env.REACT_APP_API_URL}/assests/images/amenities/Table-Tennis.webp`;
const weight = `${process.env.REACT_APP_API_URL}/assests/images/amenities/weight.webp`;
const badminton = `${process.env.REACT_APP_API_URL}/assests/images/amenities/badminton.webp`;
const volleyball = `${process.env.REACT_APP_API_URL}/assests/images/amenities/volleyball.webp`;
const skate = `${process.env.REACT_APP_API_URL}/assests/images/amenities/skate.webp`;
const poolTable = `${process.env.REACT_APP_API_URL}/assests/images/amenities/pool-table.webp`;
const spa = `${process.env.REACT_APP_API_URL}/assests/images/amenities/massage.webp`;
const waterSupply = `${process.env.REACT_APP_API_URL}/assests/images/amenities/water-supply.webp`;
const backup = `${process.env.REACT_APP_API_URL}/assests/images/amenities/backup.webp`;
const fireSystem = `${process.env.REACT_APP_API_URL}/assests/images/amenities/extinguisher.webp`;
const coffee = `${process.env.REACT_APP_API_URL}/assests/images/amenities/coffee.webp`;
const earthquake = `${process.env.REACT_APP_API_URL}/assests/images/amenities/earthquake.webp`;

const Amenities = () => {

    const amenitiesItems = [
        {
            title: "Fully automated smart homes",
            image: smartHomes,
        },
        {
            title: "MIVAN Construction",
            image: sketch,
        },
        {
            title: "Dual Core Project",
            image: projects,
        },
        {
            title: "Cricket Pitch",
            image: stadium,
        },
        {
            title: "Children’s Play Area",
            image: park,
        },
        {
            title: "Zen Garden & Water Body",
            image: swimming,
        },
        {
            title: "EV Charging Point",
            image: powerStation,
        },
        {
            title: "3 Tier Security System",
            image: security,
        },
        {
            title: "Table tennis room",
            image: tableTennis,
        },
        {
            title: "Gymnasium, Yoga and Aerobics",
            image: weight,
        },
        {
            title: "Lawn tennis & Badminton court",
            image: badminton,
        },
        {
            title: "Volleyball court",
            image: volleyball,
        },
        {
            title: "Skating rink",
            image: skate,
        },
        {
            title: "Billiards room",
            image: poolTable,
        },
        {
            title: "Spa/ Salon",
            image: spa,
        },
        {
            title: "24/7 Water Supply",
            image: waterSupply,
        },
        {
            title: "24/7 Power Backup",
            image: backup,
        },
        {
            title: "Fire Fighting System",
            image: fireSystem,
        },
        {
            title: "Coffee Shop",
            image: coffee,
        },
        {
            title: "Earthquake Resistant Structure",
            image: earthquake,
        }
    ]

    return(
        <section className="amenities_section padding-top padding-bottom" id="amenities">
            <Container>
                <Row>
                    <Col>
                        <h2 className="main_heading">Amenities</h2>

                        <div className="amenities_grid_block m-auto pt-5">
                            {amenitiesItems.map((item, i) => (
                                <div className="amenities_grid_item cursor-pointer aminities-group" key={i}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className='amenities_img animate-wobble'
                                    />
                                    <p className='amenities_text'>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}

export default Amenities
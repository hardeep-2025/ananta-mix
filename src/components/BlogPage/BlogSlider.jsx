import axios from "axios";
import "./BlogPage.css";
import "./BlogSlider.css";
import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Col, Container, Row } from "react-bootstrap";
const openIcon = `${process.env.REACT_APP_API_URL}/assests/images/open-icon.webp`;

const defaultImage = `${process.env.REACT_APP_API_URL}/assests/images/placeholder-image.webp`;

const BlogSlider = () => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/api/blog-category-lists.php`,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then(res => {
            const posts = res?.data?.posts || [];
            // Only take first 5 blogs
            setBlogs(posts.slice(0, 5));
        })
        .catch(() => {
            console.log('Error')
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "ease-in-out",

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return(
        <div className="blog_slider_block padding-top padding-bottom">
         <Container>
                         <Row>
                             <Col>


            <h2 className="main_heading mb-4">Latest Posts</h2>

            {loading ? (
                <p className="paragraph">Loading...</p>
            ) : blogs.length > 0 ? (
                <div className="blogs_slider">
                    <Slider {...sliderSettings}>
                        {blogs.map((item, i) => (
                            <div className="blog_slider_item" key={item.url || i}>
                                <div className="latest_blogs_div">
                                    <a href={"/blog/" + item.url} className="linkTOImage">
                                        <img
                                            src={item.image ? `${process.env.REACT_APP_API_URL}/uploads/${item.image}` : defaultImage}
                                            alt={item.image_alt ? item.image_alt : item.title}
                                            className="blog_lists_image"
                                        />
                                    </a>
                                    <div className="blog_lists_contents">
                                        <a href={"/blog/" + item.url}>
                                            <p className="blog_list_title">{item.title}</p>
                                        </a>
                                        <p className="blog_list_date">{item.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                     <div className="floor_plans_right">
                                                <Button className="floor_plans_btn btnBlogReadMore" onClick={() => window.location.href = "/blog"}>
                                                    <img src={openIcon} alt="open" className="open_icon" />
                                                    Read More
                                                </Button>
                                            </div>
                </div>
            ) : (
                <p className="paragraph">No Post Found!</p>
            )}

            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default BlogSlider
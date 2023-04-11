import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';
import Card from '../Card/Card';

const cardsData = [
    {
      title: "Blog Post 1",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat mi sed enim vulputate, nec interdum sem facilisis. Morbi congue fermentum odio ac euismod. Praesent efficitur magna id elit molestie, in euismod nibh facilisis. Nullam at libero justo. ",
      url: "https://example.com/post1",
    },
    {
      title: "Blog Post 1",
      image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80   ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat mi sed enim vulputate, nec interdum sem facilisis. Morbi congue fermentum odio ac euismod. Praesent efficitur magna id elit molestie, in euismod nibh facilisis. Nullam at libero justo. ",
      url: "https://example.com/post1",
    },
    {
      title: "Blog Post 1",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat mi sed enim vulputate, nec interdum sem facilisis. Morbi congue fermentum odio ac euismod. Praesent efficitur magna id elit molestie, in euismod nibh facilisis. Nullam at libero justo. ",
      url: "https://example.com/post1",
    },
    {
      title: "Blog Post 1",
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat mi sed enim vulputate, nec interdum sem facilisis. Morbi congue fermentum odio ac euismod. Praesent efficitur magna id elit molestie, in euismod nibh facilisis. Nullam at libero justo. ",
      url: "https://example.com/post1",
    },
   
    
   
    
  ];
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
//     let clientDisc = "";
//     clientDisc = clients.map((item, i) => (
//         <Card
//   title="My Card Title"
//   image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nunc nibh. Pellentesque luctus nulla nec mauris consequat suscipit. Sed ac pretium lectus, ut vestibulum nulla. Proin vitae tellus sit amet urna facilisis dignissim in ac magna."
//   url="https://example.com/my-article"
// />
        // <ClientSlider item={item} key={i}/>
    // ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">testimonials</span>
            <h1>what clients say</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
            {cardsData.map((cardData) => (
        <Card key={cardData.url} {...cardData} />
      ))}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
       
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`
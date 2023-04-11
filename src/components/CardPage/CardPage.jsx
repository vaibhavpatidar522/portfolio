import React from "react";
import Card from "../Card/Card";
import "./CardPage.css"

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

const CardPage = () => {
  return (
    <div className="card-page">
      <h1>Recent Blog Posts</h1>
      {cardsData.map((cardData) => (
        <Card key={cardData.url} {...cardData} />
      ))}
    </div>
  );
};

export default CardPage;

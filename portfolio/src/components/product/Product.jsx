import React from "react";
import styles from "./product.module.css";
import html from "../../img/html_5.png";
import css from "../../img/css_3.png";
import javascript from "../../img/javascript.png";
import react from "../../img/react.png";
import redux from "../../img/redux.png";
import nodejs from "../../img/nodejs_icon.png";
import expressjs from "../../img/express.png";
import mongodb from "../../img/mongodb.png";
import github from "../../img/github_icon.png";
import dsa from "../../img/ds-removebg-preview.png";

const Product = () => {
  let data = [
    {
      title: "HTML",
      image: html,
    },
    {
      title: "CSS",
      image: css,
    },
    {
      title: "Javascript",
      image: javascript,
    },
    {
      title: "React",
      image: react,
    },
    {
      title: "Redux",
      image: redux,
    },
    {
      title: "NodeJS",
      image: nodejs,
    },
    {
      title: "ExpressJS",
      image: expressjs,
    },
    {
      title: "MongoDB",
      image: mongodb,
    },
    {
      title: "Github",
      image: github,
    },
    {
      title: "DS & ALgo",
      image: dsa,
    },
  ];

  return (
    <div className={styles.container} id="Skilles">
      <div className={styles.heading}>Skills & Interests</div>
      <div className={styles.aligner}>
        {data.map((item, i) => {
          return (
            <div key={i} className={styles.listItem}>
              <img src={item.image} alt={item.title} />
              <div className={styles.title}>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;

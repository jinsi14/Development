import React from "react";
import classes from './Card.module.css';

const Card = props => {
    //return <div className =" card"><div>  we can like this 

    //but we are assign like this beacause we can use <style modules> .
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
import React from "react";

const MyParagraph = (props) => {
    console.log('MyParagraph RUNNING');
    return(
        <p>{props.childrean}</p>
    );
};

export default MyParagraph;
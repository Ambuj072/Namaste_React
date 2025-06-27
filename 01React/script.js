import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "myid" }, "Hello React🚀");

//using jsx it will convert into React.createElement which is javascript object then render will convert it into html

const jsxHeading=<h1 id="myid">Hello React🚀</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

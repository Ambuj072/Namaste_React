import React from "react";
import ReactDOM from "react-dom/client";

//React functional component
function Myfun() {return <h1>New functinal componect</h1>
    
}

//react element
const title=<h1>Namaste React</h1>

const App=()=>(
<div>
{title}
<Myfun/>
<h1>React functinal component</h1>
</div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    {/* here also add more funtional component  */}
  </>
);

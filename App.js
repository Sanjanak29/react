/**
 * <div id="parent">
 *          <div id="child">
 *                  <h1> I'm h1 tag </h1>
 *                  <h2>I'm h2 tag</h2> //for creating an array we need to give the 3rd argument as an array
 *           </div>
 *</div>
 *
 * React Element(object) => HTML(Browser Understand)
 * 
 *
 * */

 const parent = React.createElement("div",{id:"parent"},    React.createElement("div",{id:"child"},
        [React.createElement(  //array of children
            "h1",
            {},"I am h1 tag"),React.createElement(
                "h2",
                {},"I am h2 tag")]

                 
    )
 );

 //jsx will make our lige easy in writing tags







// const heading=React.createElement(
//     "h1",              //h1 is nthing but a nrml javascript object
//     {id:"heading"},     //the object is used to give id,class
//     "Hello World from React "
//     );

    console.log(parent); //returns object

        const root = ReactDOM.createRoot(document.getElementById("root"));//root is the place where all react code will run
         //whatever we will render we will render in this root 
        root.render(parent); //render method is basically taking the  object and converting it into the html tag.

            //rendering into the dom
        //props are the children+attributes that we pass in.
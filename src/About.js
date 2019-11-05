import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <h1> About </h1>
            <p> 
            Shoggoth.club is a very meta porfolio website for made to host my work in React.js and Django (and has nothing to do with the eldritch horror).
            The meta aspect is that this webpage <a style={{fontStyle: 'italics'}}>IS</a> my work so far! I hope to evolve this site
            into something more interesting as time goes on, so keep an eye out!
                
            </p>
            </div>
         );
    }
}
 
export default About;
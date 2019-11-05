import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <h1> Contact me </h1>
            <p>
                <pre>
                If you would like to reach out, you can find me on <a style={{color: '#00aced'}} href="https://twitter.com/sweetsbeats_"> twitter,</a> or <a style={{color: 'white'}} href="https://github.com/sweetsbeats">github.</a>
                <br />
                I do a lot of work in C++ and on game engine stuff, which you can find info about on my <a style={{color: 'brown'}} href="https://sweetsbeats.herokuapp.com/">blog. </a>I'm 
                always willing to chat and answer questions!
                <br />
                
                </pre>
            </p>
            </div>
         );
    }
}
 
export default Contact;

/*
 <p>

                If you would like to reach out, you can find me on
                <div style={{display: 'flex'}}>
                    <a style={{color: '#00aced'}} href="https://twitter.com/sweetsbeats_"> <pre> twitter,</pre> </a>
                    <pre> or <a style={{color: 'white'}} href="https://github.com/sweetsbeats">github</a>
                </div>
              
                
                <div style={{float: 'bottom'}}>I do a lot of work in C++</div>
            </p>

*/
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Example extends Component {
    state = { 
        examples: ['todo', 'clock']
     }
    render() { 
        return ( 
            <div>
                <h1> Examples </h1>
                <div style={{display: 'inline-grid', paddingLeft: 'calc(50% - 75px)', paddingTop: '40px' }}>
                    {this.state.examples.map( (example) => <div className='example'> 
                    <Link to={'/'+example} style={{color: '#ffccff'}}>  {example} </Link> 
                    </div>)
                    }
                </div>
            </div>
         );
    }
}
 
export default Example;
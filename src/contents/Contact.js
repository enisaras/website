import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">Contact Me</h1>
<div className = "new">
<address>
   <li>Niskayuna, New York, United States</li>
    <li>518-961-70-35</li>
</address>

<li><a href = "mailto: arasenis@gmail.com" 
>Send me an Email</a></li>
<Social />
</div>
</div>
)
}
}
export default Contact
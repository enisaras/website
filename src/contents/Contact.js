import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">Contact Me</h1>
<div className = "new">
<a href = "mailto: arasenis@gmail.com" 
>Send me an Email</a>
<Social />
</div>
</div>
)
}
}
export default Contact
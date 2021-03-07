import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h2 className="subtopic">Click on collapsibles to view coursework!</h2>
<Widecard title="Rensselaer Polytechnic Instute" where="Computer Science" gpa="GPA: 3.3"
from="Fall 2020" to="Spring 2022" coursework = "Relevant Coursework"/>
<Widecard title="Hudson Valley Community College" where="Computer Science" gpa="GPA: 4.0"
from="Summer 2019" to="Summer 2020"/>
</div>
)
}
}
export default Education
import React, { Component } from 'react';
import Social from '../components/Social';
import Collapsible from 'react-collapsible';
import { IconName } from "react-icons/cg";
class Widecard extends Component {
render() {
return (
<div class="compdet">
<Collapsible trigger = {this.props.title} open = "true">
    <h3 class= "b">{this.props.where}</h3>
    <h3 class= "b">{this.props.gpa}</h3>
    <h3 class= "b">{this.props.from} - {this.props.to}</h3>
<Collapsible classParentString = "coursework" trigger = {this.props.coursework} >
    <Collapsible classParentString = "course" trigger = {this.props.course5}>
<li class= "description">{this.props.description5}</li>
</Collapsible>
<Collapsible classParentString = "course" trigger = {this.props.course4}>
<li class= "description">{this.props.description4}</li>
<li class= "description">{this.props.description44}</li>
</Collapsible>
<Collapsible classParentString = "course" trigger = {this.props.course1}>
    <li class= "description">{this.props.description1}</li>
    <li class= "description">{this.props.description11}</li>
</Collapsible>
<Collapsible classParentString = "course" trigger = {this.props.course2}>
    <li class= "description">{this.props.description2}</li>
    <li class= "description">{this.props.description22}</li>
</Collapsible>
<Collapsible classParentString = "course" trigger = {this.props.course3}>
    <li class= "description">{this.props.description3}</li>
    <li class= "description">{this.props.description33}</li>
</Collapsible>
</Collapsible>
</Collapsible>

</div>
)
}
}
export default Widecard
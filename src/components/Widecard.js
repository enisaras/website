import React, { Component } from 'react';
import Social from '../components/Social';
import Collapsible from 'react-collapsible';
class Widecard extends Component {
render() {
return (
<div class="compdet">
<Collapsible trigger = {this.props.title} open = "true">
<h4 class= "secondtext">{this.props.where}</h4>
<h4 class= "secondtext">{this.props.gpa}</h4>
<h4 class= "secondtext">{this.props.from} - {this.props.to}</h4>
<Collapsible trigger = {this.props.coursework} open = "false">
    <Collapsible classParentString = "b" trigger = {this.props.course1}>
        <li>Learned about Data Structures like stacks, queues, lists, trees, and collections and how to use them.</li>

    </Collapsible>
</Collapsible>
</Collapsible>
</div>
)
}
}
export default Widecard
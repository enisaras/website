import React, { Component } from 'react';
import Social from '../components/Social';
import Collapsible from 'react-collapsible';
class Widecard extends Component {
render() {
return (
<div class="widecard">
<div class="compdet">
<Collapsible trigger = {this.props.title}>
  <h3 class= "secondtext">{this.props.where}</h3>
  <h3 class= "secondtext">{this.props.gpa}</h3>
  <h3 class= "secondtext">{this.props.from} - {this.props.to}</h3>
  <Collapsible trigger = {this.props.coursework}>
    <h3 class = "secondtext">{this.props.course1}</h3>
    <h3 class = "secondtext">{this.props.course2}</h3>
  </Collapsible>

  </Collapsible>
<Social />
</div>
</div>
)
}
}
export default Widecard

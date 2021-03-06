import React, { Component } from 'react';
import Social from '../components/Social'
class Widecard extends Component {
render() {
return (
<div class="widecard">
<div class="compdet">
<h3>{this.props.title}</h3>
<h4 class= "secondtext">{this.props.where}</h4>
<h4 class= "secondtext">{this.props.gpa}</h4>
<h4 class= "secondtext">{this.props.from} - {this.props.to}</h4>
<Social />
</div>
</div>
)
}
}
export default Widecard
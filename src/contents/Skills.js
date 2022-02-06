import React, { Component } from 'react'
import Icon from "../components/icons";



//import { DiJsBadge} from "react-icons/di";
//import IconAmazonwebservices from 'react-devicon/amazonwebservices/original'
class Skills extends Component {
constructor(props)
{
super(props);
this.state={
//'languages': ['C', 'C++', 'Java', 'Python', 'Javascript', 'C#'],
//'frameworks': ['Node.js', 'React.js', 'JQuery', 'Django'],
//'libraries': ['React.js', 'Node.js', 'Matplotlib', 'Numpy', 'Pandas','Selenium'],
//'technologies': ['Git', 'Linux', 'Github', 'TradingView', 'HTML', 'CSS', 'Microsoft Office', 'QuantConnect'],
//'other': ['Native proficiency in Turkish and English']
};
}
render() {
return (
<div className="condiv skills">
<h1 className="subtopic">Languages</h1>

<span><Icon name="Cplusplus" classes="size-small" color = 'blue' /></span>
<span><Icon name="Javascript" classes="size-small" color = 'blue' /></span>
<span><Icon name="Python" classes="size-small" color = 'blue' /></span>
<span><Icon name="Java" classes="size-small" color = 'blue' /></span>
<span><Icon name="MySQL" classes="size-small" color = 'blue' /></span>

<h1 className="subtopic">Frameworks</h1>

<span><Icon name="React" classes="size-small" color="blue" /></span>
<span><Icon name="Node" classes="size-small" color="blue" /></span>
<span><Icon name= "Django" classes = "size-small" color = "blue" /></span>


<h1 className="subtopic">Libraries</h1>
<span><Icon name= "Numpy" classes = "size-small" color = "blue" /></span>
<span><Icon name= "Pandas" classes = "size-small" color = "blue" /></span>
<span><Icon name= "TenserFlow" classes = "size-small" color = "blue" /></span>
<ul>

</ul>
<h1 className="subtopic">Developer Tools</h1>
<span><Icon name= "Git" classes = "size-small" color = "blue" /></span>
<span><Icon name= "AWS" classes = "size-small" color = "blue" /></span>
<span><Icon name= "Github" classes = "size-small" color = "blue" /></span>



</div>
)
}
}
export default Skills
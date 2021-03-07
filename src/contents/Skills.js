import React, { Component } from 'react'
class Skills extends Component {
constructor(props)
{
super(props);
this.state={
'languages': ['C', 'C++', 'Java', 'Python', 'Javascript', 'C#'],
'frameworks': ['Node.js', 'React.js', 'JQuery', 'Django'],
'libraries': ['React.js', 'Node.js', 'Matplotlib', 'Numpy', 'Pandas','Selenium'],
'technologies': ['Git', 'Linux', 'Github', 'TradingView', 'HTML', 'CSS', 'Microsoft Office', 'QuantConnect'],
'other': ['Native proficiency in Turkish and English']
};
}
render() {
return (
<div className="condiv skills">
<h1>Languages</h1>
<ul>
    {this.state.languages.map((languages)=>{
    return <li>{languages}</li>
    })}
</ul>
<h1 className="subtopic">Frameworks</h1>
<ul>
    {this.state.frameworks.map((frameworks)=>{
    return <li>{frameworks}</li>
    })}
</ul>
<h1 className="subtopic">Libraries</h1>
<ul>
    {this.state.libraries.map((libraries)=>{
    return <li>{libraries}</li>
    })}
</ul>
<h1 className="subtopic">Technologies</h1>
<ul>
    {this.state.technologies.map((technologies)=>{
    return <li>{technologies}</li>
    })}
</ul>
<h1 className="subtopic">Other</h1>
<ul>
    <li>
    {this.state.other}
    </li>
</ul>
</div>
)
}
}
export default Skills
import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<Widecard title="Rensselaer Polytechnic Instute" where="Computer Science" gpa="GPA: 3.3"
from="Fall 2020" to="Spring 2022" coursework = "Relevant Coursework"course1 = "Computer Organization"
description1 = "Learned about Computer systems organization topics such as  processors, memory, I/O with the help of C language as well as digital logic topics like boolean algebra and logic gates."
description11 = "Learned how to code assembly level instructions in MIPS and x86 Assembly language."
course2 = "Multivariable Calculus and Matrix Algebra"
description2 = "Learned about multivariable calculus topics like directional derivatives, maxima and minima, double integrals, line integrals, div and curl, and Green’s Theorem."
description22 = "Learned about introductory Matrix Algebra topics like matrix algebra and systems of linear equations, vectors and linear transformations in R^n, eigenvectors and eigenvalues, applications in engineering and science."
course3 = "Introduction to Algorithms"
description3 = "Learned about important algorithms and topics including Breadth First Search and Depth First Search, Dijkstra's, divide and conquer, dynamic programming, greedy algorithms and NP-Completeness."
description33 = "Designed many challenging algorithms to solve real-life problems using the above concepts with an emphasis on runtime and space complexity."/>
<Widecard title="Hudson Valley Community College" where="Computer Science" gpa="GPA: 4.0"
from="Summer 2019" to="Summer 2020" coursework = "Relevant Coursework" course1 = "Data Structures"
description1 = "Learned about data structures like stacks, queues, lists, trees, and collections and their proper application."
description11 = "Learned about advanced object oriented programming topics like encapsulation, inheritance, and polymorphism using Java."
course2 = "C++ Programming"
description2 = "Learned about features of the C++ programming language including class design and data structures."
description22 = "Learned about the Standard Template Library and how to apply it to solve real life problems."
course3 = "Foundations of Computer Science"
description3 = "Learned about topics including set theory, logic, relations, functions,partial order, equivalence relations, lattices, Boolean algebra, graph theory, and predicate calculus."
description33 = "Gained a strong knowledge of proofs such as inductive, direct, contradiction, contraposition and exhaustion."
/>
</div>
)
}
}
export default Education
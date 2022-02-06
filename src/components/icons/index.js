import React from "react";
import classNames from "classnames";
import ReactIcon from "./svg/react_icon.js";
import NodeIcon from "./svg/node_icon.js";
import DjangoIcon from "./svg/django_icon.js";
import CplusplusIcon from "./svg/Cplusplus_icon.js";
import Javascript from "./svg/Javascript_icon.js";
import Python from "./svg/Python_icon.js";
import Numpy from "./svg/Numpy_icon.js";
import Java from "./svg/Java_icon.js";
import MySQL from "./svg/MySQL_icon.js";
import Pandas from "./svg/Pandas_icon.js";
import TenserFlow from "./svg/TenserFlow_icon.js";
import Git from "./svg/Git_icon.js";
import AWS from "./svg/AWS_icon.js";
import Github from "./svg/Github_icon.js";
const tidy = (string) => string.toLowerCase().trim();

const getIcon = (name, color = "#494949") => {
  switch (tidy(name)) {
    case "react":
      return <ReactIcon color={color} />;
    case "node":
      return <NodeIcon color={color} />;
    case "django":
      return <DjangoIcon color = {color} />;
    case "cplusplus":
      return <CplusplusIcon color = {color} />;
    case "javascript":
      return <Javascript color = {color} />;
    case "python":
      return <Python color = {color} />;
    case "numpy":
      return <Numpy color = {color} />;
    case "java":
      return <Java color = {color} />;
    case "mysql":
      return <MySQL color = {color} />;
    case "pandas":
      return <Pandas color = {color} />
    case "tenserflow":
      return <TenserFlow color = {color} />
    case "git":
      return <Git color = {color} />
    case "aws":
      return <AWS color = {color} />
    case "github":
      return <Github color = {color} />


    default:
      return "";
  }
};

const Icons = ({ name, classes, color }) => (
  <div id={`${tidy(name)}-logo-icon`} className={classNames("icon", classes)}>
    {getIcon(tidy(name), color)}
  </div>
);

export default Icons;
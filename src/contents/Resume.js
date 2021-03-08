import React from "react";
import SinglePagePDFViewer from "../components/pdf-viewer/single-page";


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import Resume from "../img/Resume.pdf";

export default function App() {
  return (
    <div className="Resume">
        <SinglePagePDFViewer pdf={Resume} />
        

      <hr />
    </div>
  );
}
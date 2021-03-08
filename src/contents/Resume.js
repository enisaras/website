import React from "react";
import SinglePagePDFViewer from "../components/pdf-viewer/single-page";


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../img/sample.pdf";

export default function App() {
  return (
    <div className="App">
      <h4>Resume is coming soon</h4>
        {//<SinglePagePDFViewer pdf={samplePDF} />
        }

      <hr />
    </div>
  );
}
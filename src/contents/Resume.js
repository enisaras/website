import React from "react";
import SinglePagePDFViewer from "../components/pdf-viewer/single-page";
import Resume from "../img/Resume.pdf";

export default function App() {
  return (
    <div className="Resume">
        <a href="https://drive.google.com/uc?export=download&id=1FL2KkoOwdQGaBVEqKibIgyow1ADE3vqn" id = "btn">Download Resume(Google Drive)</a>
        <SinglePagePDFViewer pdf={Resume} />
    </div>
  );
}
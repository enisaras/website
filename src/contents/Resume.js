import React from "react";
import SinglePagePDFViewer from "../components/pdf-viewer/single-page";
import Resume from "../img/Resume.pdf";

export default function App() {
  return (
    <div className="Resume">
        <SinglePagePDFViewer pdf={Resume} />
    </div>
  );
}
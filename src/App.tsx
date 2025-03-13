import React from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import ItineraryPDF from "./Pdfgenerator";
import { DrawOutlineButton } from "./components/DrawOutlineButton";

const App: React.FC = () => {
  return (
    <div className="min-h-[100vh] place-content-center bg-slate-900 p-4 flex flex-col items-center justify-center">
      <DrawOutlineButton>
        <h2 className="text-white px-10 bg-blue-950 text-2xl">Itinerary PDF Generator</h2>
        <PDFDownloadLink
          document={<ItineraryPDF />}
          fileName="travel-itinerary.pdf"
        >
          {({ loading }) => (
            <span className="text-white">
              {loading ? 'Generating PDF...' : 'Download PDF'}
            </span>
          )}
        </PDFDownloadLink>
      </DrawOutlineButton>
    </div>
  );
}

export default App;

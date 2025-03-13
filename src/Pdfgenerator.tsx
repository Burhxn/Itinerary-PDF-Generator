import { Page, Document } from "@react-pdf/renderer";
import { styles } from "./styles";
// Import JSON data
import FirstPage from "./components/FirstPage";
import TravelInfo from "./components/TravelInfo";
import { Overview } from "./components/Overview";
import { Pages } from "./components/Pages";
import { DayEight } from "./components/DayEight";
import { Accomodation } from "./components/Accomodation";
import { PackageDetails } from "./components/PackageDetails";
import { Inclusion } from "./components/Inclusion";
import { LastPage } from "./components/LastPage";
import { TermsAndConditions } from "./components/TermsAndConditions";

// PDF Document Component
const ItineraryPDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* 1st Page */}
        <FirstPage />

        {/* 2nd Page */}
        <TravelInfo />

        {/* 3rd Page */}

        {/* Overview */}

        <Overview />

        <Pages />

        {/* Day 8 */}

        <DayEight />

        {/* Accomodation */}
        <Accomodation />

        <PackageDetails />

        <Inclusion />

        <TermsAndConditions />

        <LastPage />
      </Page>
    </Document>
  );
};
export default ItineraryPDF;

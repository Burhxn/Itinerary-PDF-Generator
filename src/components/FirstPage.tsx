
import { View, Image } from "@react-pdf/renderer";
import { styles } from "../styles";
import itineraryData from "../itinerary.json"


const FirstPage = () => {
  return (
    <View>
      <Image src={itineraryData.companyImages.stateBackgroundImage} style={styles.imageB} />
      <Image src={itineraryData.companyImages.companyBackgroundImage} style={styles.imageB} />
    </View>
  );
};

export default FirstPage; 
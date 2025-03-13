import { Image, View } from "@react-pdf/renderer"
import itineraryData from "../itinerary.json"

export const LastPage = () => {
    return (
        <View break>
          <Image
            src={itineraryData.companyImages.companyLastPageImage}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
    )
}

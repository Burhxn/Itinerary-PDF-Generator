import { Image, Text, View } from "@react-pdf/renderer"
import { styles } from "../styles"
import itineraryData from "../itinerary.json"

export const DayEight = () => {
    return (

    <View break>
          <View style={styles.dayContainer}>
            <View>
              <Text>Day 8</Text>
              <Text>
                Breakfast in Srinagar on{" "}
                {new Date(
                  itineraryData.travellerDetails.arrivalDate
                ).toDateString()}
              </Text>
            </View>
            <View>
              <Text>
                Route: Srinagar to {itineraryData.travellerDetails.arrivalLocation}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#A6A6A6",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Departure from Jammu</Text>
          </View>
          <Image
                        src={itineraryData.companyImages.companyLogo}
            style={{ width: "90%", height: "50vh", margin: 10 }}
          />
          <Text style={{fontSize: 12, color: "gray"}}>
            Today marks the end of our wonderful journey together. Please ensure
            you check out of your rooms on time and have all your belongings
            packed. Our tour guide will be available to assist you with any
            last-minute needs. We sincerely thank you for choosing to travel
            with us and hope you have enjoyed this trip as much as we have
            enjoyed having you with us. Safe travels, and we look forward to
            welcoming you on another adventure in the future. Until we meet
            again!
          </Text>
        </View>
    
    )
}

import { Image, Text, View } from "@react-pdf/renderer"
import itineraryData from "../itinerary.json";
import { styles } from "../styles";


export const Accomodation = () => {
    return (
        <View break>
          <Text style={styles.heading}>Accomodation</Text>
          {itineraryData.accomodations.map((accommodation, index) => (
          <View key={index} style={styles.accommodationContainer}>
            Left Section
            <View style={styles.leftSection}>
              Night Info
              <View style={styles.row}>
                <Text>Night</Text>
                <View style={styles.nightBox}>
                  <Text style={{ textAlign: "center", fontSize: 13 }}>
                    {accommodation.night}
                  </Text>
                </View>
                <Text>at {accommodation.hotelLocation} |</Text>
                <Text style={{ fontSize: 10, color: "gray" }}>Check-in 10 May 2025</Text>
              </View>

              Meal Plan & Room Type
              <Text style={styles.textBlue }>
                Breakfast and Dinner Included
              </Text>
              <Text style={{ fontSize: 18, marginTop: 5 }}>
                {accommodation.roomType}
              </Text>

              Rooms & Adults
              <View style={{ display: "flex", flexDirection: "row", gap: 10, marginTop: 5, paddingTop: 10 }}>
                Rooms
                <View style={{ borderRight: "1px solid black", gap: 5, paddingRight: 10 }}>
                  <Text style={styles.textGray}>Rooms</Text>
                  <View style={styles.roomBox}>
                    <Text style={{ textAlign: "center", fontSize: 13 }}>
                      {accommodation.roomCount}
                    </Text>
                  </View>
                </View>

                Adults
                <View style={{ gap: 5 }}>
                  <Text style={styles.textGray}>{accommodation.adults} Adult(s)</Text>
                  <Text style={{ fontSize: 10, color: "brown" }}>Including</Text>
                  <Text style={styles.textBlue}>
                    {accommodation.aweb} AWEB (Adult with Extra Bed)
                  </Text>
                </View>
              </View>
            </View>

            Right Section - Hotel Image
            <View style={styles.rightSection}>
              <Image src={accommodation.images[0]} style={styles.image} />
            </View>
          </View>
        ))}
        </View>
    )
}

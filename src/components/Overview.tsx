import { Image, Text, View } from "@react-pdf/renderer";
import itineraryData from "../itinerary.json";
import { styles } from "../styles";

export const Overview = () => {
  return (
    <>
    <View break style={styles.flex}>
      <View>
        <Text style={styles.boldText}>Overview</Text>
        <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <Text style={{ fontSize: 12 }}>Itinerary for 7 Nights & 8 Days</Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              fontSize: 10,
              color: "gray",
            }}
          >
            <Text>
              {" "}
              Arrival:{" "}
              {new Date(
                itineraryData.travellerDetails.arrivalDate
              ).toDateString()}
            </Text>
            <Text> Departure:May 17 2025</Text>
          </View>
        </View>
        Itinerary Details
        {itineraryData.itineraryDetails.map((day: any, index: any) => (
          <View key={index} style={styles.flexd}>
            Day Block
            <View style={styles.block}>
              <Text>Day {day.dayNumber}</Text>
            </View>
            Sightseeing and Night Stay
            <View style={styles.details}>
              <Text>Sightseeing: {day.nightStayLocation}</Text>
              <Text>Night Stay: {day.hotelName}</Text>
            </View>
          </View>
        ))}
      </View>
      <View>
        <Image
          src={itineraryData.companyImages.defaultImage}
          style={styles.imageright}
        />
      </View>
    </View>
    </>
  );
};

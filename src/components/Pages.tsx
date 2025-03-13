import { Image, Text, View } from "@react-pdf/renderer"
import itineraryData from "../itinerary.json";
import { styles } from "../styles";


export const Pages = () => {
    return (
        <>
        {itineraryData.itineraryDetails.map((day, index) => (
            <View break key={index}>
              Day and Route Section
              <View style={styles.dayContainer}>
                <View>
                  <Text style={{fontSize: 18, fontWeight: "bold",color: "#1f86a3"}}>Day {day.dayNumber}</Text>
                  <Text>
                    Arrival in: {itineraryData.travellerDetails.arrivalLocation} on{" "}
                    {new Date(
                      itineraryData.travellerDetails.arrivalDate
                    ).toDateString()}
                  </Text>
                </View>
                <View style={{display: "flex", flexDirection: "column",justifyContent:"space-between", gap: 5}}>
                  <Text>
                    Route: {itineraryData.travellerDetails.arrivalLocation} to {day.nightStayLocation}
                  </Text>
                  <Text>Night Stay: {day.hotelName}</Text>
                </View>
              </View>
  
              Destination Image & Details
              {day.destinations.length > 0 && (
                <View>
                  <Image
                    src={day.destinations[0].destinationImages}
                    style={{ width: "100%", height: "50vh", marginBottom: 10 }}
                  />
                  <Text style={styles.pagestyle}>
                    {day.destinations[0].destinationName}
                  </Text>
                  <Text style={{fontSize: 12, color: "#212620"}}>{day.destinations[0].destinationDescription}</Text>
                  <Text style={styles.pagestyle}>Sightseeing</Text>
                  
                  <Text style={{fontSize: 10, color: "#212620"}}>{day.destinations[0].attractions.join("  -  ")}</Text>
                </View>
              )}
            </View>
          ))}
          </>
    )
}

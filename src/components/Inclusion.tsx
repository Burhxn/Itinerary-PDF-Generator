import {  Text, View } from "@react-pdf/renderer";
import itineraryData from "../itinerary.json";
import { styles } from "../styles";


export const Inclusion = () => {
    return (
        <View break>
          <Text style={styles.heading}>Inclusion and Exclusion</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
          <View>
              <Text
                style={styles.boldText}
              >
                Inclusions
              </Text>
              {itineraryData.inclusionExclusions.inclusions.map(
                (inclusion, index) => (
                  <View
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      marginBottom: 8,
                      
                    }}
                  >
                    <View
                      style={{
                        width: 5,
                        height: 5,

                        backgroundColor: "lightblue",
                        borderRadius: 50,
                        marginRight: 4,
                      }}
                    ></View>
                    <Text style={{ fontSize: 12, textAlign: "center", color: "gray" }}>
                      {inclusion}
                    </Text>
                  </View>
                )
              )}
            </View>
            <View>
              <Text
                style={styles.boldText}
              >
                Exclusions
              </Text>
              {itineraryData.inclusionExclusions.exclusions.map(
                (exclusion, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      marginBottom: 8,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 5,
                        height: 5,

                        backgroundColor: "lightblue",
                        borderRadius: 50,
                        marginRight: 4,
                      }}
                    ></View>
                    <Text style={{ fontSize: 12 , color: "gray"}}>{exclusion}</Text>
                  </View>
                )
              )}
            </View>
          </View>
        </View>
    )
}

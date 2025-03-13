import { Text, View } from "@react-pdf/renderer"
import { styles } from "../styles"
import itineraryData from "../itinerary.json"

export const TermsAndConditions = () => {
    return (
        <View break>
        <Text style={styles.heading}>Terms and Conditions</Text>
        {itineraryData.termsAndConditions.termsAndConditions.map((tnc: any, index: any) => (
          <View key={index}>
            <Text
              style={styles.boldText}
            >
              {tnc.heading}
            </Text>
            {tnc.tncList.map((tncItem, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    marginRight: 4,
                  }}
                >
                  .
                </Text>
                <Text style={{ fontSize: 10 , color: "gray"}}>{tncItem.terms}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    )
}


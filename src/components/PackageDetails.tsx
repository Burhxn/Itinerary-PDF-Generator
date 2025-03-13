import { Image, Text, View } from "@react-pdf/renderer"
import { styles } from "../styles"
import itineraryData from "../itinerary.json"
export const PackageDetails = () => {
    return (

        <View break>
          <Text style={styles.heading}>Package Details</Text>
            <Text
              style={styles.boldText}
            >
              Traveller Details
            </Text>
          <View style={{ gap: 10, fontSize: 12, marginVertical: 10 , color: "#1e1e17"}}>
            <Text>TRAVELLER NAME :{itineraryData.travellerDetails.guestName}</Text>
            <Text>PACKAGE :{itineraryData.travellerDetails.package}</Text>
            <Text>
              ARRIVAL DATE{" "}
              :{new Date(itineraryData.travellerDetails.arrivalDate).toDateString()}
            </Text>

            <Text>
              NUMBER OF PAX :{itineraryData.travellerDetails.adults} ADULTS
            </Text>
          </View>
          <Text
            style={styles.boldText}
          >
            Bank Details
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              height: "40vh",
              justifyContent: "space-between",
              gap: 10, fontSize: 12, marginVertical: 10 , color: "#1e1e17"
            }}
          >
            <View style={{ gap: 16, fontSize: 14, marginTop: 10 }}>
              <Text>
                Account Number : {itineraryData.bankDetails[0].accountNumber}
              </Text>
              <Text>Bank Name : {itineraryData.bankDetails[0].bankName}</Text>
              <Text>IFSC Code : {itineraryData.bankDetails[0].ifscCode}</Text>
              <Text>
                Account Holder Name : {itineraryData.bankDetails[0].holderName}
              </Text>
              <Text>Bank Address : {itineraryData.bankDetails[0].branchName}</Text>
              <Text>UPI Number : {itineraryData.bankDetails[0].upiNumber[0]}</Text>
              <Text>
                UPI Address : {itineraryData.bankDetails[0].upiAddress[0]}
              </Text>
            </View>
            <View>
              <Image
                src={itineraryData.qrDetails.qrImage}
                style={{ height: "60%" }}
              />
            </View>
          </View>
          <Text
            style={styles.boldText}
          >
            Tour Cost
          </Text>
          <View style={styles.table}>
            {/* Row 1 */}
            <View style={styles.trow}>
              <Text style={styles.cell}>TOUR DETAILS</Text>
              <Text style={styles.cell}>TOTAL TOUR COST</Text>
            </View>
            {/* Row 2 */}
            <View style={styles.trow}>
              <Text style={styles.cell}>7 NIGHTS / 8DAYS 6 ADULT(S)</Text>
              <Text style={styles.cell}>RS 105500</Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              marginTop: 20,
              color: "blue",
              textDecoration: "underline",
            }}
          >
            The Booking process will start after an advanced deposit of Rs 15%
          </Text>
        </View>

    )

}

import React from "react"
import { styles } from "../styles";
import { Text, View, Image } from "@react-pdf/renderer";
import itineraryData from "../itinerary.json";




const TravelInfo = () => {
        return(
            <View break style={styles.flex}>
            <View>
            <Text style={styles.heading}>Travel Information</Text>
            <Text style={styles.boldText}>Guest Information</Text>
            <View style={{gap: 5,color: "#212620"}}>
            
            <Text>Guest Name: {itineraryData.travellerDetails.guestName}</Text>
            <Text>Contact: {itineraryData.travellerDetails.contactNumber}</Text>
            <Text>Arrival: {itineraryData.travellerDetails.arrivalLocation} on {new Date(itineraryData.travellerDetails.arrivalDate).toDateString()}</Text>
            <Text>Departure: {itineraryData.travellerDetails.departureLocation}</Text>
            <Text>Adults: {itineraryData.travellerDetails.adults}, Children: {itineraryData.travellerDetails.children}</Text>
            <Text>Meal Plan: {itineraryData.travellerDetails.mealPlan}</Text>
            <Text>Package Nights: {itineraryData.travellerDetails.packageNights}</Text>
            {/* <Text>Vehicles: {itineraryData.travellerDetails.vehicle.name}{itineraryData.travellerDetails.vehicle.count}</Text> */}
            {/* <Text>Vehicle Type: {itineraryData.travellerDetails.vehicle.type}</Text> */}
            {itineraryData.travellerDetails.vehicle.map((v) => (
              <Text >
                 Vehicles:{v.name}- {v.count} 
                 Vehicle Type:({v.type})  
              </Text>
              
            ))}
            </View>
           <View style={{display: "flex", alignItems: "center", justifyContent: "center",margin:30}}>
    <View style={{width: "70%",backgroundColor:"black",height: "2px"}}></View>
           </View>
            
              <Text style={styles.boldText}>Our Contact</Text>
            <View style={{gap: 5,color: "#212620"}}>
              
              <Text>Consultant Name: {itineraryData.consultantInfo.consultantName}</Text>
              <Text>Contact: {itineraryData.consultantInfo.contact}</Text>
              <Text>Email: {itineraryData.consultantInfo.email}</Text>
              <Text>Address: {itineraryData.consultantInfo.address}</Text>
              <Text>Contact: {itineraryData.companyInfo.contact}</Text>
              <Text>Email: {itineraryData.companyInfo.email}</Text>
              <Text>Website: {itineraryData.companyInfo.website}</Text>
            </View>
    
           </View>
           <View>
            <Image src={itineraryData.companyImages.defaultImage} style={styles.imageright} />
           </View>
          </View> 
        )
    }

export default TravelInfo;
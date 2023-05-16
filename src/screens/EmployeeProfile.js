import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import SendSMS from 'react-native-sms';

import call from 'react-native-phone-call';
import Detail from '../components/Detail';

const EmployeeDetails = ({route}) => {
  const phoneNo = route.params.phoneNo.toString();
  const email = route.params.email.toString();
  function triggerCall() {
      const args = {
      number: phoneNo,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  }

  const sendMail = () => {
    var url = 'mailto:'+email+'.dar?';
    Linking.openURL(url);
  }

  const sendBloodDonationRequest = () => {
    var url = 'mailto:'+email+'.dar?subject=Blood Donation Request&body=This is a Blood Donation Request';
    Linking.openURL(url);
  }

  return (
    <ScrollView contentContainerStyle={styles.mainContainerScroll}>
      <View>
        <View style={styles.profilePictureContainer}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
            }}
            style={styles.profilePicture}
          />
          <Text style={styles.headerTextName}>{route.params.name}</Text>
          <Text style={styles.headerTextId}>{route.params.employeeId}</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.contactDetailsContainer}>
            <Text style={styles.detailType}>Conatct details</Text>
            <View style={styles.detailContainer}>
              <Detail detailLabel="Phone" desc={route.params.phoneNo} />
              <TouchableOpacity onPress={triggerCall} style={styles.operationCenter}>
                <Text style={styles.operation}>Call</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.detailContainer}>
              <Detail detailLabel="Email" desc={route.params.email} />
              <TouchableOpacity style={styles.operationCenter} onPress={sendMail}>
                <Text style={styles.operation}>Email</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.detailContainer}>
              <Detail
                detailLabel="Blood Group"
                desc={route.params.bloodGroup}
              />
              <TouchableOpacity style={styles.operationCenter} onPress={sendBloodDonationRequest}>
                <Text style={styles.operation}>Request</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.detailType}>Professional details</Text>
            <Detail detailLabel="Designation" desc={route.params.designation} />
            <Detail
              detailLabel="Experience in total"
              desc={route.params.totalExperience}
            />
            <Detail
              detailLabel="Experience in Ideas2it"
              desc={route.params.ideas2itExperience}
            />
            <Detail detailLabel="Skills" desc={route.params.skills} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainerScroll: {
    backgroundColor: '#F2F2F2F2',
  },
  profilePictureContainer: {
    height: 250,
    alignItems: 'center',
    marginTop: 20,
    borderBottomWidth: 1,
  },
  profilePicture: {
    height: '80%',
    width: undefined,
    aspectRatio: 1 / 1.4,
    borderRadius: 50,
  },
  header: {
    flex: 0.4,
    paddingTop: 10,
  },
  body: {
    flex: 5,
    marginVertical: 20,
  },
  headerTextName: {
    fontSize: 20,
    fontWeight: '600',
  },
  headerTextId: {
    fontSize: 16,
    fontWeight: '500',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailType: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 10,
    color: '#1F1F39',
  },
  operation: {
    backgroundColor: 'blue',
    right: 5,
    padding: 5,
    paddingHorizontal: 10,
    color: '#FFFFFF',
    fontWeight: '500',
    borderRadius: 6,
  },
  operationCenter: {
    justifyContent: 'center',
  },
});
export default EmployeeDetails;

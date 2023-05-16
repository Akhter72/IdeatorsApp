import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable
} from 'react-native';

import Feature from '../components/Features';
import Card from '../components/Card';
import ApplyLeave from '../models/ApplyLeave';

export default function Homepage({navigation}) {
  const progress = '60%';
  
  const features = [
    {
      key: 1,

      headline: 'Plan your Holidays for 2022',
    },
    {
      key: 2,
      imgName: '../img/leave-policy.png',
      headline: 'Know About your leave types and policy',
    },
  ];
  const cards = [
    {
      key: 1,
      nav: 'Lookup',
      label: 'Find blood donors',
      description: 'Lookup blood groups of employees that matches with you',
      bgColor: '#DCF4CD',
      color: '#527044',
      image: require("../img/bloodGroup.png"),
    },
    {
      key: 2,
      nav: 'Lookup',
      label: 'Employee lookup',
      description:
        'Know contact details, experience & skill sets of your colleagues',
      bgColor: '#EFE0FF',
      color: '#440687',
      image: require("../img/LookUpImg.png"),

    },
    {
      key: 3,
      nav: 'Lookup',
      label: 'Refer & Earn',
      description:
        'refer people you know in the industry and earn docker points!',
      bgColor: '#E0EEFD',
      color: '#0017E9',
      image: require("../img/referImg.png"),
    },
  ];

  const employeeDetails = {
    name: 'CV',
    employeeId: 'I22202',
    phoneNo: '9688872617',
    email: 'akhterhussain.dar@ideas2it.com',
    bloodGroup: 'B+',
    designation: 'SoftWare Developer',
    totalExperience: '1.0',
    ideas2itExperience: '0.5',
    skills: 'python, java, mysql',
  };
  const [leaveVisible, setLeaveVisible] = useState(false);
  function hideVisibility() {
    setLeaveVisible(false);
    console.log(leaveVisible);
  }
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.greetEmployee}>Hi Akhter</Text>
            <View style={styles.award}>
              <Image
                source={require('../img/Vector.png')}
                style={styles.awardIcon}
              />
              <Text style={styles.awardPoints}>5500</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.headerRight}
            onPress={() => navigation.navigate('Profile', employeeDetails)}>
            <Image
              source={require('../img/MaskGroup.png')}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.subHeader}>
          <View style={[styles.subHeaderDivisions, styles.topSubHeader]}>
            <Text style={styles.remainingLeaves}>Remaining leaves</Text>
            <TouchableOpacity onPress={() => setLeaveVisible(true)}>
              <Text style={styles.applyLeave}>Apply leave</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.subHeaderDivisions, styles.middle1SubHeader]}>
            <Text style={styles.days}>22 Days</Text>
            <Text>6 days token this year</Text>
          </View>
          <View style={[styles.subHeaderDivisions, styles.middlle2subHeader]}>
            <View style={styles.middle2SubHeader}>
              <View style={[styles.processFilled, {width: progress}]} />
              <View />
            </View>
          </View>
          <View style={[styles.subHeaderDivisions, styles.bottomSubHeader]}>
            <TouchableOpacity>
              <Text style={styles.leaveHistory}>View Leave History</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.approvals}>No pending Approvals</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body}>
          <ScrollView horizontal={true}>
            <View style={styles.features}>
              {features.map(item => {
                return (
                  <Feature
                    key={item.key}
                    headline={item.headline}
                    imgName={require('../img/illustration.png')}
                  />
                );
              })}
            </View>
          </ScrollView>
          <View style={styles.cards}>
            {cards.map(item => {
              return (
                <Pressable
                  key={item.key}
                  onPress={() => navigation.navigate(item.nav)}>
                  <Card
                    label={item.label}
                    description={item.description}
                    bgColor={item.bgColor}
                    color={item.color}
                    nav="Lookup"
                    image={item.image}
                  />
                </Pressable>
              );
            })}
            {/* <FlatList
              data={cards}
              renderItem={({item}) => (
                <Card
                  key={item.key}
                  label={item.label}
                  description={item.description}
                  bgColor={item.bgColor}
                  color={item.color}
                />
              )}
            /> */}
          </View>
        </View>
      </View>
      <View style={styles.addLeave}>
        <Modal visible={leaveVisible}
          animationType="slide"
          transparent={true}
        >
          <ApplyLeave hide={() => setLeaveVisible(false)}/>
        </Modal>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2F2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    height: 129,
    backgroundColor: '#3D5CFF',
  },
  award: {
    flexDirection: 'row',
  },
  features: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  headerLeft: {
    width: '80%',
  },
  greetEmployee: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontWeight: '600',
    marginTop: 20,
    marginLeft: 20,
  },
  awardPoints: {
    marginLeft: 6,
    fontSize: 14,
    fontFamily: '400',
    color: '#FFFFFF',
  },
  awardIcon: {
    marginLeft: 20,
    marginTop: 3,
  },
  headerRight: {
    width: '20%',
  },
  profileIcon: {
    height: 46,
    width: 40,
    marginTop: 20,
    borderRadius: 25,
  },
  subHeader: {
    backgroundColor: 'white',
    height: 140,
    width: '93%',
    borderRadius: 10,
    marginTop: -40,
    marginBottom: 10,
    alignSelf: 'center',
    elevation: 15,
    shadowColor: 'black',
  },
  subHeaderDivisions: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topSubHeader: {
    flex: 1,
  },
  remainingLeaves: {
    fontSize: 12,
    paddingTop: 10,
    fontWeight: '400',
    color: '#858597',
  },
  applyLeave: {
    color: 'blue',
    fontSize: 12,
    padding: 10,
    fontWeight: '500',
  },
  middle1SubHeader: {
    flex: 1,
  },
  middle2SubHeader: {
    flex: 1,
    height: 7,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
  },
  processFilled: {
    backgroundColor: 'orange',
    height: '100%',
  },
  bottomSubHeader: {
    flex: 1,
  },
  days: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  leaveHistory: {
    fontWeight: '500',
  },
  approvals: {
    fontWeight: '500',
    backgroundColor: '#F6F6F6',
    color: '#BBBBBB',
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  body: {
    paddingBottom: 30,
  },
});

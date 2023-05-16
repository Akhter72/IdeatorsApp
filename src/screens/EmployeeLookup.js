import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, KeyboardAvoidingView, TouchableOpacity} from 'react-native';

function EmployeeLookup({navigation}) {
  
  const allEmployees = [
    {
      name: 'CV',
      employeeId: 'I22202',
      phoneNo: '9688872617',
      email: 'akhterhussain.dar@ideas2it.com',
      bloodGroup: 'B+',
      designation: 'SoftWare Developer',
      totalExperience: '1.0',
      ideas2itExperience: '0.5',
      skills: 'python, java, mysql',
      id: 1,
    },
    {
      name: 'Akhter',
      employeeId: 'I22202',
      phoneNo: '7780951191',
      email: 'akhterhussain.dar@ideas2it.com',
      bloodGroup: 'B+',
      designation: 'SoftWare Developer',
      totalExperience: '1.0',
      ideas2itExperience: '0.5',
      skills: 'python, java, mysql',
      id: 2,
    },
    {
      name: 'Partha',
      employeeId: 'I22202',
      phoneNo: '9626120412',
      email: 'akhterhussain.dar@ideas2it.com',
      bloodGroup: 'B+',
      designation: 'SoftWare Developer',
      totalExperience: '1.0',
      ideas2itExperience: '0.5',
      skills: 'python, java, mysql',
      id: 3,
    },
    {
      name: 'Nitish',
      employeeId: 'I22202',
      phoneNo: '7780951191',
      email: 'akhterhussain.dar@ideas2it.com',
      bloodGroup: 'B+',
      designation: 'SoftWare Developer',
      totalExperience: '1.0',
      ideas2itExperience: '0.5',
      skills: 'python, java, mysql',
      id: 4,
    },
    {
      name: 'Harish',
      employeeId: 'I22202',
      phoneNo: '7780951191',
      email: 'akhterhussain.dar@ideas2it.com',
      bloodGroup: 'B+',
      designation: 'SoftWare Developer',
      totalExperience: '1.0',
      ideas2itExperience: '0.5',
      skills: 'python, java, mysql',
      id: 5,
    },
    {
      name: 'Akhter hussain',
      employeeId: 'I22202',
      phoneNo: '7780951191',
      email: 'akhterhussain.dar@ideas2it.com',
      bloodGroup: 'B+',
      designation: 'SoftWare Developer',
      totalExperience: '1.0',
      ideas2itExperience: '0.5',
      skills: 'python, java, mysql',
      id: 6,
    },
  ]

  const [searchText, setSearchText] = useState('');
  const [searchEmployees, setSearchEmployees] = useState(allEmployees);
  function searchEmployeesMethod(text) {
    return allEmployees.filter(value => value.name.toLowerCase().includes(text.toLowerCase()));

  }
  function handleSearchText(text) {
    setSearchText(text);
    setSearchEmployees(searchEmployeesMethod(text));
  }
  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView style={styles.header}>
        <TextInput 
          placeholder='Search employee'
          value={searchText}
          style={styles.searchInput}
          onChangeText={handleSearchText}
        />
      </KeyboardAvoidingView>
      <View style={styles.body}>
        <FlatList
          data={searchEmployees}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile', item)}>
              <Text style={styles.searchItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
  },
  mainContainer: {
    flex: 1,
  },
  body: {
    flex: 6,
  },
  searchInput: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  searchItem: {
    padding: 20,
    fontSize: 20,
    margin: 10,
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,

  },
});

export default EmployeeLookup;

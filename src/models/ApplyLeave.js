import React, {Component, useState} from 'react';  
import { Button, View, Text, StyleSheet, Pressable, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";
import DateComponent from '../components/Date';  



export default class ApplyLeave extends Component {  
    leaveTypes = [{name: 'casual'}, {name: 'paternity'}, {name: 'sick'}, {name: 'medical'}, {name: 'WFH'}];
    constructor(props) {
        super(props);
    }
    // {hide} = props;
    state = {  
        leaveType: '',
        fromDate: new Date(),  
        toDate: '', 
        reason: '', 
        approver: '', 
        notifyPerson: '',
    } 
    resetHandler = () => {
        this.setState(
            {  
                leaveType: '',
                fromDate: new Date(),  
                toDate: new Date(), 
                reason: '', 
                approver: '', 
                notifyPerson: '',
            } 
        );
    }
    handleLeaveType = (text) => this.setState({leaveType: text});
    reasonHandler = (text) => this.setState({reason: text});
    approverHandler = (text) => this.setState({approver: text});   
    notifyPersonHandler = (text) => this.setState({notifyPerson: text}); 
    fromDateHandler = (date) => {
        console.log(date);
        this.setState({fromDate: date})  
    }   
    toDateHandler = (date) => this.setState({toDate: date})   

    getHeader=() => {
        return (
                <View>
                    <Text style={styles.OptionHeading}>Type</Text>
                </View>
        );
    }

    getFooter = () => {
        return (
            <View style={{flex:1}}>
                <Text style={styles.OptionHeading}>Date Range</Text>
                <View style={styles.dateInputContainer}>
                    <DateComponent label="From" value={(date) => this.fromDateHandler(date)} />
                    <DateComponent label="To" value={(date) => this.toDateHandler(date)} />
                </View>   
                <Text style={styles.OptionHeading}>Reason</Text>  
                <TextInput
                    placeholder="write Reason for leave"
                    multiline={true}
                    style={styles.reasonText}
                    value={this.state.reason}
                    onChangeText={this.reasonHandler}
                /> 
                <Text style={styles.OptionHeading}>Approver</Text> 
                <TextInput
                    placeholder="write Approver of leave"
                    style={styles.reasonText}
                    value={this.state.approver}
                    onChangeText={this.approverHandler}
                /> 
                <Text style={styles.OptionHeading}>People to notify when approved</Text>  
                <TextInput
                    placeholder="write Approver's name"
                    style={styles.reasonText}
                    value={this.state.notifyPerson}
                    onChangeText={this.notifyPersonHandler}
                />
            </View>
            
        )

    }


    render() {  
        return (  
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <Pressable 
                        style={styles.cancelIcon}
                        onPress={this.props.hide}
                        >
                        <Image source={require('../img/cancel.png')} />
                    </Pressable>
                    <Text style={styles.headerText}>Apply Leave</Text>
                </View>
            <View style={styles.container}>
                <FlatList
                    data={this.leaveTypes}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                            onPress={() => this.handleLeaveType(item.name)}
                            style={styles.gridContainer}
                        >
                            <Text style={this.state.leaveType===item.name ? styles.leaveTypeSelected: styles.leaveType}>{item.name}</Text>
                        </TouchableOpacity>
                            )
                        }
                    numColumns={2} 
                    contentContainerStyle={styles.leaveTypeContainer}
                    ListHeaderComponent={this.getHeader}
                    ListFooterComponent={this.getFooter}
                />
                <View style={styles.bottomButtonContainer}>
                    <TouchableOpacity style={{width: '35%'}} onPress={this.resetHandler}>
                        <Text style={[styles.applyLeaveButton, {backgroundColor: '#efefef'}]}>Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '65%'}}>
                        <Text style={[styles.applyLeaveButton, {backgroundColor: 'blue', color: 'white'}]}>ApplyLeave</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        );  
    }  
} 

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'center',
    },
    cancelIcon: {
        padding: 10,
        color: 'black',
        position: 'absolute',
        left: 0,
        top: 18
        
    },
    headerText: {
        alignSelf: 'center',
        paddingHorizontal: '27%',
        fontSize: 20,
        color: 'black',
    },
    dateInputContainer: {
        width: 351,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
    },
    inputDate: {
        
    },
    leaveType: {
        marginHorizontal: 2,
        padding: 5,
        borderRadius: 7,
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
    },
    leaveTypeContainer: {
        marginBottom: 5,
        alignItems: 'center',
    },
    leaveTypeSelected: {
        color: 'white',
        width: '100%',
        padding: 5,
        paddingHorizontal:10,
        borderRadius: 7,
        textAlign: 'center',
        fontSize: 16,
        backgroundColor: 'blue',
        
    },
    OptionHeading: {
        fontSize: 18,
        marginLeft: 24,
        margin: 10,
        color: 'black', 
        width: 350,
        alignSelf: 'center',
    },
    reasonText: {
        borderRadius: 10,
        width: 350,
        alignSelf: 'center',
        fontSize: 17,
        padding: 15,
        fontWeight: '400',
        marginBottom: 7,
        backgroundColor: '#cacadada'
    },
    applyLeaveButton: {
        fontSize: 17,
        textAlign: 'center',
        paddingHorizontal: 10,
        padding: 5,
        marginHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
    },
    gridContainer: {
        alignItems: 'center', 
        width: 182, 
        marginVertical: 3,
        borderRadius: 40,
        overflow:'hidden', 
        backgroundColor: '#cacadada'
    }
})
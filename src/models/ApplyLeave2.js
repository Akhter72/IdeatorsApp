import React ,{useState} from "react";
import { Button, View, Text, StyleSheet, Pressable, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";
import DateComponent from '../components/Date';

function ApplyLeave(props) {

    const leaveTypes = [{name: 'casual'}, {name: 'paternity'}, {name: 'sick'}, {name: 'medical'}, {name: 'WFH'}];
    const [leaveType, setLeaveType] = useState('');
    const {hide} = props;
    const [date, setDate] = useState(new Date);
    const [reason, setReason] = useState('');
    const [approver, setApprover] = useState('');
    const [notifyPerson, setNotifyPerson] = useState('');

    function handleDate(newDate) {
        setDate(newDate);
    }

    function handleLeaveTypePress({item}) {
        setLeaveType(item.name);
    }

    function resetHandler() {
        setReason('');
        setApprover('');
        setNotifyPerson('');
    }

    function notifyChangeHandler(text) {
        setApprover(text);
    }
    const getHeader=() => {
        return (
            <View>
                <View style={styles.header}>
                    <Pressable 
                        style={styles.cancelIcon}
                        onPress={hide}
                        >
                        <Image source={require('../img/cancel.png')} />
                    </Pressable>
                    <Text style={styles.headerText}>Apply Leave</Text>
                </View>
                <View style={{marginLeft: -15}}>
                    <Text style={styles.OptionHeading}>Type</Text>
                </View>
            </View>
        );
    }

    const getFooter = () => {
        return (
            <View style={{flex:1}}>
                <Text style={styles.OptionHeading}>Date Range</Text>
                <View style={styles.dateInputContainer}>
                    <DateComponent label="From" value={handleDate}/>
                    <DateComponent label="To" value={handleDate} />
                </View>   
                <Text style={styles.OptionHeading}>Reason</Text>  
                <TextInput
                    placeholder="write reason of leave"
                    multiline={true}
                    style={styles.reasonText}
                    value={reason}
                    onChangeText={(text) => setReason(text)}
                />
                <Text style={styles.OptionHeading}>Approver</Text>  
                <TextInput
                    placeholder="write Approver's name"
                    style={styles.reasonText}
                    value={approver}
                    onChange={notifyChangeHandler}
                    
                />
                <Text style={styles.OptionHeading}>People to notify when approved</Text>  
                <TextInput
                    placeholder="write Approver's name"
                    style={styles.reasonText}
                    value={notifyPerson}
                    onChangeText={notifyChangeHandler}
                />
            </View>
            
        )

    }

    return (
        <View style={styles.container}>
                <FlatList
                    data={leaveTypes}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                            onPress={() => handleLeaveTypePress({item})}
                            style={{alignItems: 'center', width: 200, marginVertical: 3,borderRadius: 40,overflow:'hidden', borderWidth: 1}}
                        >
                            <Text style={leaveType===item.name ? styles.leaveTypeSelected: styles.leaveType}>{item.name}</Text>
                        </TouchableOpacity>
                            )
                        }
                    numColumns={2} 
                    contentContainerStyle={styles.leaveTypeContainer}
                    ListHeaderComponent={getHeader}
                    ListFooterComponent={getFooter}
                />
                <View style={styles.bottomButtonContainer}>
                    <TouchableOpacity style={{width: '35%'}} onPress={resetHandler}>
                        <Text style={styles.applyLeaveButton}>Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '65%'}}>
                        <Text style={[styles.applyLeaveButton, {backgroundColor: 'blue', color: 'white'}]}>ApplyLeave</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        
    },
    header: {
        flexDirection: 'row',
        padding: 20,
    },
    cancelIcon: {
        padding: 10,
        color: 'black',
    },
    headerText: {
        alignSelf: 'center',
        paddingHorizontal: '27%',
        fontSize: 20,
        color: 'black',

    },
    dateInputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    inputDate: {
        
    },
    leaveType: {
        backgroundColor: '#F4F3FD',
        marginHorizontal: 2,
        width: '100%',
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
        margin: 3,
        marginHorizontal: 2,
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
    },
    reasonText: {
        borderRadius: 10,
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        fontSize: 15,
        padding: 15,
        fontWeight: '400',
        marginBottom: 7,
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
        position: 'relative'

    }
})

export default ApplyLeave;
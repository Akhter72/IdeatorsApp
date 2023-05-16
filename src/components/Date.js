import React, {useState} from 'react';
import {View, Pressable, Image, Text, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function DateComponent(props){
    const [newDate, setNewDate] = useState(new Date());
    const [datePicker, setDatePicker] =  useState(false);
    const {label, value} = props;
    const [dateText, setDateText] = useState(label);

    function date() {
        return newDate;
    }
    function showDatePicker() {
        setDatePicker(true);
    };

    function onDateSelected(date) {
        setDatePicker(false);
        setNewDate(date);
        value(date);
        if( date!= null){
            setDateText(date.toDateString())
        }
    };

    function onCancelSelected() {
        console.log("canceled");
    }
    return (
        <View>
            <DateTimePickerModal
                isVisible={datePicker}
                mode="date"
                display={Platform.OS ==='ios' ? 'spinner' : 'calendar'}
                value={newDate}
                onConfirm={onDateSelected}
                onCancel={onCancelSelected}
                
            />
                <Pressable style={styles.container} onPress={showDatePicker}>
                    <Text style={styles.textDate}>{dateText}</Text>
                    <Image source={require('../img/calender.png')} />
                </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width: 170,
        height: 50,
        justifyContent: 'space-between'
    },
    textDate: {

        fontSize: 16,
    },

})
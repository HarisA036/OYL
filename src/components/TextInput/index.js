import React, { useState } from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { appIcons } from "../../services/assets";
import { appStyle } from "../../services/appStyles/style";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomModal from "../Modal";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const CustomTextInput = ({

  firstT,
  placeholder,
  value,
  onChangeText,
  style,
  keyboardType,
  editable,
  containerStyle,
  placeholderTextColor,
  secureTextEntry,
  firstTstyle,
  showCalendarImage,
  showLocationImage,
  showDownImage,
  onPressDownImage,

}) => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isLocationModalVisiable, setLocationModalVisiable] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };
  const handleShowLocation = () => {
    // setActiveModal("location");
    setLocationModalVisiable(true);
  };

  const handleDateConfirm = (event, date) => {
    if (date !== undefined && date !== null) {
      setSelectedDate(date);
      onChangeText(formatDate(date)); // Pass the formatted date as text
    }
    setDatePickerVisible(false);
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is 0-based
    const year = date.getFullYear();

    return `${day} / ${month} / ${year}`;
  };

  const closeLocationModal = () => {
    setLocationModalVisiable(false);
  };

  return (

    <View style={containerStyle}>
      <Text style={firstTstyle}>{firstT}</Text>
      <TextInput
        style={style}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        editable={editable} />

      {showCalendarImage && (
        <View style={Style.visibilityButtonV}>
          <TouchableOpacity onPress={showDatePicker}>
            <Image
              source={appIcons.CalendarIcon}
            />
          </TouchableOpacity>
        </View>
      )}

      {showLocationImage && (
        <View style={appStyle.visibilityButtonV}>
          <TouchableOpacity
            onPress={handleShowLocation}>
            <Image
              source={appIcons.LoctionIcon}
            />
          </TouchableOpacity>
        </View>
      )}

      {showDownImage && (
        <View style={appStyle.visibilityButtonV}>
          <TouchableOpacity onPress={onPressDownImage}>
            <Image
              source={appIcons.DownArrow}
            />
          </TouchableOpacity>
        </View>
      )}

      {isDatePickerVisible && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateConfirm}
          format="day month year"
        />
      )}

      {isLocationModalVisiable && (
        <CustomModal
          isVisible={isLocationModalVisiable}
          locationModal={true}
          closeModal={closeLocationModal}
          value={value}
          onChangeText={onChangeText}
        />
      )}
    </View>
  )
};
export default CustomTextInput;
export const Style = StyleSheet.create({

  visibilityButtonV: {
    marginTop: responsiveHeight(3.5),
    alignSelf: 'flex-end',
    position: 'absolute',
    paddingRight: responsiveWidth(3),
  },
})
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const sizes = {
    // Container Width Sizes
    W1: responsiveWidth(60),
    W2: responsiveWidth(70),
    W3: responsiveWidth(75),
    W4: responsiveWidth(80),
    W5: responsiveWidth(85),
    W6: responsiveWidth(90),
    
    // Container Height Sizes
    H1: responsiveHeight(7),
    H2: responsiveHeight(8),
    H3: responsiveHeight(9),
    H4: responsiveHeight(10),
};

const fontsizes = {
    F1: responsiveFontSize(1),
    F2: responsiveFontSize(1.2),
    F3: responsiveFontSize(1.4),
    F4: responsiveFontSize(1.5),
    F5: responsiveFontSize(1.6),
    F6: responsiveFontSize(1.7),
    F7: responsiveFontSize(2),
    F8: responsiveFontSize(2.2),
    F9: responsiveFontSize(2.3),
    F10: responsiveFontSize(2.5),
    F11: responsiveFontSize(3.5),
    F12: responsiveFontSize(4),

};
export {sizes, fontsizes}

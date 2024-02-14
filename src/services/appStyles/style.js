import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { fontFamily } from '../fonts';
import { colors } from '../colors';
import { fontsizes, sizes } from '../sizes';
import { scale } from 'react-native-size-matters';

export const appStyle = StyleSheet.create({

    leftMargin: {
        marginLeft: responsiveWidth(5)
    },
    mainV: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        height: responsiveHeight(10),
        backgroundColor: colors.color4,
        alignItems: 'center',
    },
    headerContainer2: {
        flexDirection: 'row',
        height: responsiveHeight(9),
        alignItems: 'center',
    },
    headerText: {
        color: colors.color3,
        fontFamily: fontFamily.RobotoBold,
        textAlign: 'center',
    },
    headerText2: {
        color: colors.color1,
        fontSize: fontsizes.F9,
        fontFamily: fontFamily.RobotoBold,
        marginLeft: responsiveWidth(30)
    },
    headerText3: {
        color: colors.color3,
        fontSize: fontsizes.F8,
        fontFamily: fontFamily.RobotoBold,
        marginLeft: responsiveWidth(14),
        textAlign: 'center',
    },
    backGroundImg1: {
        flex: 1,
        resizeMode: 'cover',
    },
    logo: {
        marginTop: responsiveHeight(12),
        resizeMode: 'contain',
        height: responsiveHeight(20),
        width: responsiveWidth(60),
        alignSelf: 'center'
    },
    loginText: {
        marginTop: responsiveHeight(5),
        color: colors.color1,
        textAlign: 'center',
        fontSize: responsiveFontSize(1.6),
        fontFamily: fontFamily.RobotoMedium,
    },
    loginV: {
        fontFamily: fontFamily.RobotoRegular,
        backgroundColor: colors.color1,
        marginTop: responsiveHeight(3),
        borderRadius: 15,
        width: '85%',
        height: responsiveHeight(9),
        flexDirection: 'column',
        alignSelf: 'center',
    },
    loginVText: {
        fontSize: fontsizes.F5,
        color: colors.color2,
        marginLeft: responsiveWidth(4),
        fontFamily: fontFamily.RobotoBold,
        marginTop: responsiveHeight(1),
    },
    loginInput: {
        marginLeft: responsiveWidth(3),
        color: colors.color3,
        fontSize: responsiveFontSize(1.9),
        fontFamily: fontFamily.RobotoRegular,
        marginTop: responsiveHeight(-1),
    },
    loginT2: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: responsiveHeight(2),
        marginRight: responsiveWidth(8),
    },
    dontAcc: {
        color: colors.color4,
        fontFamily: fontFamily.PoppinsLight,
        fontSize: fontsizes.F6,
    },
    createAcc: {
        color: colors.color1,
        fontFamily: fontFamily.PoppinsSemiBold,
        fontSize: fontsizes.F6,
    },
    upperView: {
        height: responsiveHeight(10),
        backgroundColor: colors.color4,
        flex: 1,
        flexDirection: 'row'
    },
    arrowStyle: {
        marginLeft: responsiveWidth(6),
        tintColor: colors.color15
    },
    createAccText: {
        fontFamily: fontFamily.RobotoBold,
        fontSize: fontsizes.F7,
        marginTop: responsiveHeight(3.5),
        marginLeft: responsiveWidth(27),
    },
    signUpV: {
        fontFamily: fontFamily.RobotoRegular,
        backgroundColor: colors.color1,
        alignSelf: 'center',
        marginTop: responsiveHeight(3),
        borderRadius: 15,
        width: sizes.W6,
        height: responsiveHeight(9),
        flexDirection: 'column',
    },
    InputT1: {
        fontSize: fontsizes.F4,
        color: colors.color2,
        marginLeft: responsiveWidth(4),
        fontFamily: fontFamily.RobotoBold,
        marginTop: responsiveHeight(1),
    },
    signUpTInput: {
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(-0.5),
        color: colors.color3,
        fontSize: fontsizes.F8,
        fontFamily: fontFamily.RobotoRegular,
    },
    visibilityButtonV: {
        marginTop: responsiveHeight(3.5),
        alignSelf: 'flex-end',
        position: 'absolute',
        paddingRight: responsiveWidth(3),
    },
    policyMainV: {
        flex: 1,
        flexDirection: 'row',
        marginTop: responsiveWidth(6),
        paddingLeft: responsiveWidth(5.5)
    },
    boxContainer: {
        resizeMode: 'contain',
        height: responsiveHeight(3.5),
        width: responsiveWidth(7),
    },
    policyT: {
        fontSize: fontsizes.F3,
        marginLeft: responsiveWidth(2),
        fontFamily: fontFamily.RobotoRegular,
        color: colors.color4,
    },
    policyBT: {
        fontSize: fontsizes.F3,
        fontFamily: fontFamily.RobotoBold,
        color: colors.color6,
    },
    checkedtick: {
        width: responsiveWidth(4.6),
        height: responsiveHeight(2.3),
    },
    btnContainer: {
        borderRadius: 30,
        backgroundColor: colors.color6,
        shadowColor: colors.color11,
        marginLeft: responsiveWidth(12),
        marginRight: responsiveWidth(12),
        marginTop: sizes.H3,
        height: sizes.H3,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: fontsizes.F10,
        fontFamily: fontFamily.RobotoBold,
        color: colors.color10,
    },
    loginbtnT: {
        textAlign: 'center',
        fontSize: fontsizes.F8,
        fontFamily: fontFamily.RobotoBold,
        color: colors.color10,
    },
    loginBtn: {
        borderRadius: 30,
        shadowColor: colors.color13,
        marginTop: responsiveHeight(7),
        height: sizes.H1,
        width: responsiveWidth(65),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    profileView: {
        height: sizes.H4,
        backgroundColor: colors.color4,
        borderColor: colors.color9,
        borderWidth: responsiveWidth(0.5)
    },
    pofileText: {
        color: colors.color3,
        fontFamily: fontFamily.RobotoBold,
        fontSize: fontsizes.F8,
        marginTop: responsiveHeight(3.5),
        textAlign: 'center',
    },
    inputContainer: {
        fontFamily: fontFamily.RobotoRegular,
        backgroundColor: colors.color1,
        marginTop: responsiveHeight(1.5),
        borderRadius: 15,
        width: sizes.W6,
        height: responsiveHeight(9),
        flexDirection: 'column',
    },
    profileInput1: {
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(-0.4),
        color: colors.color3,
        fontSize: fontsizes.F7,
        fontFamily: fontFamily.RobotoRegular,
    },
    profileInput2: {
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(-0.4),
        color: colors.color12,
        fontSize: fontsizes.F6,
        fontFamily: fontFamily.RobotoBold,
        opacity: 0.7,
    },
    rowconatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lgBtnContainer: {
        borderRadius: 30,
        shadowColor: colors.color13,
        marginTop: responsiveHeight(7),
        height: sizes.H1,
        width: sizes.W3,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: responsiveHeight(5)
    },
    homeHeaderV: {
        height: responsiveHeight(18),
        backgroundColor: colors.color5,
        justifyContent: 'center',
        borderBottomEndRadius: 60,
        borderBottomStartRadius: 60,
    },
    homeHT: {
        color: colors.color4,
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        fontFamily: fontFamily.RobotoMedium
    },
    homeT2: {
        color: colors.color5,
        fontSize: responsiveFontSize(2.8),
        fontFamily: fontFamily.RobotoBold,
        marginTop: responsiveHeight(2),
        textAlign: 'center',
    },
    entertime: {
        fontFamily: fontFamily.RobotoBold,
        fontSize: fontsizes.F6,
        color: colors.color2,
        marginLeft: responsiveWidth(8),
        marginTop: responsiveHeight(2)
    },
    daymainV: {
        marginLeft: responsiveWidth(4),
        marginTop: responsiveHeight(2),
        flexDirection: 'row',
    },
    timemainV: {
        marginLeft: responsiveWidth(7),
        marginTop: responsiveHeight(2),
        flexDirection: 'row',
    },
    dotstyle: {
        fontFamily: fontFamily.RobotoBold,
        fontSize: responsiveFontSize(5),
        color: colors.color3,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: responsiveWidth(6),
    },
    squareContainer: {
        height: responsiveHeight(12),
        width: responsiveWidth(24),
        backgroundColor: colors.color4,
        shadowColor: colors.color18,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: responsiveWidth(3), // Responsive border radius using width
        shadowOffset: {
            width: 0,
            height: responsiveHeight(1),
        },
        shadowOpacity: 7,
        shadowRadius: responsiveWidth(2),
        elevation: 4,
    },
    timestyle: {
        fontFamily: fontFamily.RobotoRegular,
        fontSize: fontsizes.F12,
        color: colors.color2,
    },
    main1: {
        marginLeft: responsiveWidth(8),
        borderRadius: responsiveWidth(15),
        flexDirection: 'column',
    },
    amContainer: {
        width: responsiveWidth(11),
        height: responsiveHeight(6),
        borderTopLeftRadius: responsiveWidth(2),
        borderTopRightRadius: responsiveWidth(2),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.color4,
        borderWidth: 0.6,
        borderColor: colors.color5
    },
    amTxt: {
        color: colors.color5,
        fontFamily: fontFamily.RobotoRegular,
        fontSize: fontsizes.F8
    },
    pmContainer: {
        width: responsiveWidth(11),
        height: responsiveHeight(6),
        backgroundColor: colors.color4,
        borderBottomLeftRadius: responsiveWidth(2),
        borderBottomRightRadius: responsiveWidth(2),
        justifyContent: 'center',
        borderColor: colors.color5,
        alignItems: 'center',
        borderWidth: 0.6,
    },
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        backgroundColor: colors.color4,
        height: responsiveHeight(28),
        width: sizes.W6,
        borderRadius: 25,
    },
    accModalV: {
        backgroundColor: colors.color4,
        height: responsiveHeight(50),
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.color7, // Shadow color
        shadowOffset: {
            width: 0, // x offset
            height: -responsiveHeight(2.5), // y offset
        },
        shadowOpacity: 0.5, // Shadow opacity
        shadowRadius: responsiveHeight(9.9), // Blur radius
    },
    modalInnerV: {
        height: responsiveHeight(39),
        width: '90%',
        borderColor: colors.color20,
        borderWidth: 1,
        borderRadius: 20,
    },
    oilInnerModal: {
        marginTop: responsiveHeight(2),
        borderColor: colors.color22,
        borderWidth: 2,
        borderRadius: 20,
    },
    accountTV1: {
        flexDirection: 'row',
        borderColor: colors.color20,
        height: responsiveHeight(6.5),
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
    },
    oilV1: {
        flexDirection: 'row',
        borderColor: colors.color22,
        height: responsiveHeight(6),
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 2.5,
        justifyContent: 'space-between',
        width: '95%',
        shadowColor: colors.color18,
        shadowOffset: {
            width: 0,
            height: responsiveHeight(1),
        },
        shadowOpacity: 0.1,
        shadowRadius: responsiveWidth(1),
        elevation: 1.5,
        alignSelf: 'center',
    },
    oilV2: {
        flexDirection: 'row',
        borderColor: colors.color22,
        height: responsiveHeight(6),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        shadowColor: colors.color18,
        shadowOffset: {
            width: 0,
            height: responsiveHeight(1),
        },
        shadowOpacity: 0.1,
        shadowRadius: responsiveWidth(1),
        elevation: 1.5,
        alignSelf: 'center',
    },
    accountTV2: {
        flexDirection: 'row',
        borderColor: colors.color20,
        height: responsiveHeight(6.5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    righticon: {
        width: scale(8),
        height: scale(8),
        marginRight: responsiveWidth(2),
    },
    accountT1: {
        fontFamily: fontFamily.RobotoRegular,
        fontSize: fontsizes.F7,
        color: colors.color21,
        marginLeft: responsiveWidth(3),
    },
    accountT2: {
        fontFamily: fontFamily.RobotoBold,
        fontSize: fontsizes.F7,
        color: colors.color5,
        marginLeft: responsiveWidth(3),
    },
    roundLocation: {
        height: scale(19),
        width: scale(19),
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        marginLeft: responsiveWidth(28)
    },
    downArrow: {
        height: scale(11),
        width: scale(18),
        marginLeft: responsiveWidth(25),
    },
    imageV: {
        backgroundColor: colors.color5,
        height: responsiveHeight(10),
        width: responsiveWidth(20),
        alignSelf: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -responsiveWidth(11)
    },
    locationimg: {
        height: responsiveHeight(5),
        width: responsiveWidth(8),
    },
    locationmodalT: {
        color: colors.color10,
        fontFamily: fontFamily.PoppinsMedium,
        fontSize: fontsizes.F8,
        textAlign: 'center',
        marginTop: responsiveHeight(1.5),
    },
    searchTIV: {
        backgroundColor: colors.color16,
        marginTop: responsiveHeight(2.5),
        borderRadius: 10,
        width: responsiveWidth(80),
        height: responsiveHeight(6),
        alignSelf: 'center',
    },
    searchInput: {
        fontSize: fontsizes.F7,
        fontFamily: fontFamily.PoppinsLight,
        color: colors.color25,
        marginLeft: responsiveWidth(2),
    },
    submitbtn: {
        height: responsiveHeight(5.5),
        width: responsiveWidth(35),
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(2),
        borderRadius: 35,
    },
    btnText2: {
        color: colors.color4,
        fontFamily: fontFamily.PoppinsRegular,
        fontSize: fontsizes.F7,
        textAlign: 'center',
    },
    vehiclecontainer: {
        fontFamily: fontFamily.RobotoBold,
        backgroundColor: colors.color22,
        marginTop: responsiveHeight(1.5),
        borderRadius: 15,
        width: sizes.W6,
        // height: responsiveHeight(9),
        flexDirection: 'column',
        shadowColor: colors.color18,
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: responsiveHeight(2),
        },
        shadowOpacity: 0.9,
        shadowRadius: responsiveWidth(4),
        elevation: 10,
    },
    vehiclecontainer2: {
        fontFamily: fontFamily.RobotoBold,
        backgroundColor: colors.color22,
        marginTop: responsiveHeight(1.5),
        borderRadius: 15,
        width: sizes.W5,
        height: responsiveHeight(9),
        flexDirection: 'column',
        shadowColor: colors.color18,
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: responsiveHeight(2),
        },
        shadowOpacity: 0.9,
        shadowRadius: responsiveWidth(4),
        elevation: 10,
    },
    locationContainer: {
        fontFamily: fontFamily.RobotoBold,
        backgroundColor: colors.color22,
        marginTop: responsiveHeight(1.5),
        borderRadius: 15,
        width: sizes.W6,
        flexDirection: 'column',
        alignSelf: 'center',
        shadowColor: colors.color18,
        // height: responsiveHeight(9),
        marginTop: responsiveHeight(3),
    },
    vehicleFT: {
        fontSize: fontsizes.F6,
        color: colors.color2,
        marginLeft: responsiveWidth(5),
        fontFamily: fontFamily.RobotoBold,
        marginTop: responsiveHeight(1.2),
    },
    vehicleinput: {
        marginLeft: responsiveWidth(4),
        marginTop: responsiveHeight(-1),
        color: colors.color29,
        fontSize: fontsizes.F6,
        fontFamily: fontFamily.RobotoBold,
        opacity: 0.8,
        height: responsiveHeight(7),
    },
    oilTypetxt: {
        marginLeft: responsiveWidth(5),
        color: colors.color29,
        fontSize: fontsizes.F6,
        fontFamily: fontFamily.RobotoBold,
    },
    oilTypetxt2: {
        marginLeft: responsiveWidth(5),
        color: colors.color29,
        fontSize: fontsizes.F6,
        fontFamily: fontFamily.RobotoRegular,
        opacity: 0.8,
    },
    vehiclebtnT: {
        fontFamily: fontFamily.RobotoBold,
        fontSize: fontsizes.F10,
        textAlign: 'center',
        color: colors.color4,
    },
    vehiclemodalV: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    backgroundTouchable: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    vehiclebg: {
        alignItems: 'center',
        height: responsiveHeight(44),
        width: '100%',

    },
    vehicleinnerV: {
        alignItems: 'center',
        borderTopRightRadius: 50,
        width: '100%',
        height: '44%',
        borderTopLeftRadius: 50,
        overflow: "hidden", // Clip the content to the border radius
    },
    vehiclemodalicon: {
        height: responsiveHeight(7),
        width: responsiveHeight(7),
        marginTop: responsiveHeight(4),
        resizeMode: "contain",
    },
    pullInfo: {
        fontFamily: fontFamily.RobotoMedium,
        fontSize: responsiveFontSize(1.8),
        marginTop: responsiveHeight(0.2),
        marginLeft: responsiveWidth(1.5),
        color: colors.color5
    },
    vehiclemodalT: {
        fontFamily: fontFamily.RobotoBold,
        color: colors.color4,
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        width: responsiveWidth(70),
        marginTop: responsiveHeight(4)
    },
    pricemodalT1: {
        fontFamily: fontFamily.RobotoBold,
        color: colors.color4,
        fontSize: fontsizes.F11,
        textAlign: 'center',
        width: responsiveWidth(70),
        marginTop: responsiveHeight(3)
    },
    pricemodalT2: {
        fontFamily: fontFamily.RobotoBold,
        color: colors.color4,
        fontSize: responsiveFontSize(2.6),
        textAlign: 'center',
        width: responsiveWidth(70),
        marginTop: responsiveHeight(2)
    },
    pricemodalT3: {
        fontFamily: fontFamily.RobotoBold,
        color: colors.color4,
        fontSize: fontsizes.F7,
        textAlign: 'center',
        width: responsiveWidth(70),
    },
    amountcontainer: {
        height: responsiveHeight(38),
        width: responsiveWidth(70),
        backgroundColor: colors.color4,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: responsiveHeight(4),
    },
    containerupperV: {
        flex: 1,
        height: '11%',
        width: '100%',
        backgroundColor: colors.color1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'flex-start',
    },
    containerlowerV: {
        height: '11%',
        width: '100%',
        backgroundColor: colors.color1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'flex-end',
        flex: 1,
    },
    amountT1: {
        color: colors.color5,
        fontFamily: fontFamily.RobotoRegular,
        fontSize: fontsizes.F3,
        textAlign: 'center',
        marginTop: responsiveHeight(2),
    },
    amountT: {
        color: colors.color5,
        fontFamily: fontFamily.RobotoRegular,
        fontSize: fontsizes.F3,
        textAlign: 'center',
        marginBottom: responsiveHeight(1),
    },
    amountV: {
        fontFamily: fontFamily.RobotoBold,
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(15),
        flexDirection: 'row',
    },
    amountstyle: {
        color: colors.color5,
        fontSize: responsiveFontSize(5),
        fontFamily: fontFamily.RobotoBold,
    },
    amountstyle2: {
        color: colors.color5,
        fontSize: responsiveFontSize(9.5),
        marginLeft: responsiveWidth(1),
        fontFamily: fontFamily.RobotoBold,
    },
    paymentT: {
        color: colors.color1,
        fontFamily: fontFamily.RobotoMedium,
        fontSize: fontsizes.F7,
        textAlign: 'center',
        marginTop: responsiveHeight(3),
    },
    paymentV: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    marginV: {
        flexDirection: 'row',
        marginTop: responsiveHeight(2),
    },
    imgcontainer: {
        height: responsiveHeight(12),
        width: responsiveWidth(26),
        backgroundColor: colors.color4,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: responsiveWidth(2),
    },
    paymentimgStyle: {
        height: responsiveHeight(4),
        width: responsiveWidth(20),
    },
    paymentmodal: {
        backgroundColor: colors.color4,
        height: responsiveHeight(52),
        width: sizes.W6,
        borderRadius: 25,
    },
    oilModal: {
        backgroundColor: colors.color22,
        height: responsiveHeight(57),
        width: sizes.W6,
        borderRadius: 25,
    },
    oilModalT: {
        fontFamily: fontFamily.RobotoRegular,
        fontSize: fontsizes.F8,
        color: colors.color2,
        marginLeft: responsiveWidth(6),
    },
    oilModalT2: {
        fontFamily: fontFamily.RobotoRegular,
        fontSize: fontsizes.F8,
        color: colors.color2,
        marginLeft: responsiveWidth(30),
    },
    paymenticonV: {
        backgroundColor: colors.color5,
        height: responsiveHeight(10),
        width: responsiveWidth(20),
        alignSelf: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -responsiveWidth(11),
        shadowColor: colors.color26,
    },
    paymenticonimg: {
        height: responsiveHeight(3),
        width: responsiveWidth(9),
    },
    paymentmodalT1: {
        color: colors.color5,
        fontFamily: fontFamily.PoppinsRegular,
        fontSize: fontsizes.F8,
        textAlign: 'center',
        marginTop: responsiveHeight(1.5),
    },
    paymentmodalT2: {
        color: colors.color27,
        fontFamily: fontFamily.PoppinsMedium,
        fontSize: responsiveFontSize(2.1),
        textAlign: 'center',
        marginTop: responsiveHeight(0.7),
    },
    detailmainV: {
        backgroundColor: colors.color5,
        height: responsiveHeight(28),
        width: responsiveWidth(80),
        alignSelf: 'center',
        borderColor: colors.color28,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: responsiveHeight(1.5),
    },
    paymentinputC: {
        backgroundColor: colors.color16,
        marginTop: responsiveHeight(1.8),
        borderRadius: 5,
        width: responsiveWidth(70),
        height: responsiveHeight(5.5),
        alignSelf: 'center',
    },
    cardInputDetails: {
        backgroundColor: colors.color16,
        marginTop: responsiveHeight(1.5),
        borderRadius: 5,
        width: responsiveWidth(20),
        height: responsiveHeight(5.2),
        alignSelf: 'center',
        marginRight: responsiveWidth(5),
    },
    paymentinputT: {
        fontSize: fontsizes.F5,
        fontFamily: fontFamily.MontserratRegular,
        color: colors.color25,
        marginLeft: responsiveWidth(2),
        textAlignVertical: 'center',
    },
    validView: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(4),
        alignItems: 'center',
    },
    simpleT: {
        fontFamily: fontFamily.MontserratMedium,
        color: colors.color4,
        marginLeft: responsiveWidth(5),
        fontSize: fontsizes.F4,
        marginTop: responsiveHeight(1.5)
    },
    policyTV: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(2)
    },
    policytext: {
        color: colors.color1,
        fontFamily: fontFamily.RobotoRegular,
        fontSize: fontsizes.F7,
    },
    upperV: {
        backgroundColor: colors.color1,
        borderColor: colors.color9,
        borderWidth: 2,
        height: '50%'
    },
    circleOuterV: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(10)
    },
    circleInnverV: {
        backgroundColor: colors.color4,
        borderColor: colors.color18,
        height: responsiveHeight(21),
        width: responsiveWidth(42),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    thumbsimg: {
        height: responsiveHeight(12),
        width: responsiveWidth(24),
    },
    centerV: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    thnkxT1: {
        fontSize: responsiveFontSize(4),
        fontFamily: fontFamily.RobotoBold,
        color: colors.color4,
        marginTop: responsiveHeight(4)
    },
    thnkxT2: {
        fontSize: responsiveFontSize(2.3),
        fontFamily: fontFamily.RobotoRegular,
        textAlign: 'center',
        color: colors.color4,
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(10),
        marginRight: responsiveWidth(10)
    },
    logoV: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(3)
    },
    thnkxbtn: {
        borderRadius: 30,
        shadowColor: colors.color19,
        marginTop: responsiveHeight(5),
        height: sizes.H1,
        width: responsiveWidth(40),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    thnkxT: {
        textAlign: 'center',
        fontSize: fontsizes.F8,
        fontFamily: fontFamily.RobotoBold,
        color: colors.color10,
    },
    oilmodalview: {
        width: responsiveWidth(90),
        height: responsiveHeight(54),
        backgroundColor: colors.color14,
        borderRadius: responsiveWidth(5)
    },
    manufactureview: {
        width: responsiveWidth(85),
        height: responsiveHeight(6),
        backgroundColor: colors.color14,
        borderBottomWidth: 1,
        borderColor: colors.color15,
        justifyContent: 'center',
    },
    manufacture: {
        marginLeft: responsiveWidth(5),
        color: colors.color2
    },
    miniview: {
        width: responsiveWidth(85),
        height: responsiveHeight(6),
        backgroundColor: colors.color14,
        borderBottomWidth: 1,
        borderColor: colors.color15,
    },
    tabBarIcon: {
        width: '11%',
        height: '70%',
        tintColor: colors.color5,
        marginTop: responsiveHeight(1),
    },
    scrollViewContent: {
        paddingHorizontal: responsiveWidth(1),
        marginTop: responsiveHeight(1),
        flexDirection: 'row',  // Add this line if not present
        alignItems: 'center',
        flexGrow: 0,
        padding: 20,
    },
    squareContainer2: {
        height: responsiveHeight(11),
        width: responsiveWidth(22),
        backgroundColor: colors.color4,
        shadowColor: colors.color18,
        alignItems: 'center',
        marginLeft: responsiveWidth(4),
        justifyContent: 'center',
        borderRadius: responsiveWidth(3), // Responsive border radius using width
        shadowOffset: {
            width: 0,
            height: responsiveHeight(2),
        },
        shadowOpacity: 0.3,
        shadowRadius: responsiveWidth(4),
        elevation: 6,
    },
    dayText: {
        fontSize: fontsizes.F7,
        fontFamily: fontFamily.RobotoBold,
        color: colors.color2,
    },
    dateText: {
        fontFamily: fontFamily.RobotoBold,
        color: colors.color2,
        fontSize: fontsizes.F5,
        marginTop: responsiveHeight(0.7),
    },
    monthText: {
        fontFamily: fontFamily.RobotoBold,
        color: colors.color2,
        fontSize: fontsizes.F5,
        marginTop: responsiveHeight(0.2),
    },
    containerA: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: responsiveHeight(9),
    },
    containerB: {
        alignItems: 'center',
    },
    icon: {
        width: responsiveWidth(6),
        height: responsiveHeight(6),
        resizeMode: 'contain',
        tintColor: colors.color1,
    },
    tabTxt: {
        color: colors.color1,
        fontFamily: fontFamily.RobotoRegular,
        fontSize: responsiveFontSize(1.5),
        marginBottom: responsiveHeight(1.5),
    },
    line: {
        backgroundColor: colors.color1,
        height: responsiveHeight(0.4),
        marginTop: responsiveHeight(2),
        width: responsiveWidth(15),
        marginLeft: responsiveWidth(60),
    },
    lodingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
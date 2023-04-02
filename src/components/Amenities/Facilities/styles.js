const styles = (theme) => ({
  facilityGroup: {
    minHeight: "180px",
  },
  facilityIcon: {
    color: "#268FB4",
    width: "42.67px",
    height: "37.51px",
    justifyContent: "center",
  },
  facilityIconBlue: {
    color: "#21436E",
    width: "42.67px",
    height: "37.51px",
    justifyContent: "center",
  },
  facilityTitle: {
    fontFamily: "DiodrumArabic",
    color: "#268FB4",
    maxWidth: "175px",
    fontWeight: "400",
    fontSize: "18px",
    textAlign: "center",
  },
  facilityTitleBlue: {
    fontFamily: "DiodrumArabic",
    color: "#21436E",
    maxWidth: "175px",
    fontWeight: "400",
    fontSize: "18px",
    textAlign: "center",
  },
  facilityDetails: {
    fontFamily: "SharpSans",
    color: "#757575",
    maxWidth: "170px",
    fontWeight: "600",
    fontSize: "16px",
    textAlign: "center",
  },
  divider: {
    borderStyle: "dashed",
  },
  facilitiesHeaderTxt: {
    fontFamily: "DiodrumArabic",
    fontSize: "50px",
    lineHeight: "38px",
    fontWeight: 600,
    color: "#21436E",
  },
  facilitiesSubHeaderTxt: {
    fontFamily: "DiodrumArabic",
    fontSize: "104.035px",
    fontStyle:"normal",
    fontWeight: "Bold",
    lineHeight: "88px",
    color: "#21436E",
    [theme.breakpoints.down('md')]: {
      fontSize: "70px",
    }
  },
  facilitiesTxt: {
    fontFamily: "SharpSans",
    color: "#21436E",
    fontWight: 600,
    fontSize: "18px",
    lineHeight: "29px",
    maxWidth: "470px",
  },
});

export default styles;

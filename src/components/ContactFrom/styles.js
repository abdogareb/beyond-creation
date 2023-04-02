import bgImage from "../../assets/images/Form/menu1.png";
const styles = () => ({
  formImageContainer: {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  },
  imageSubTxt: {
    textOrientation: "sideways-lr",
    writingMode: "vertical-lr",
    transform: "rotate(180deg)",
    fontFamily: "SharpSans",
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "39px",
    color: "#21436E",
    fontStyle: "italic",
    marginBottom: "7px",
  },
  imageTxt: {
    textOrientation: "sideways-lr",
    writingMode: "vertical-lr",
    transform: "rotate(180deg)",
    fontFamily: "DiodrumArabic",
    fontWeight: "Bold",
    fontSize: "80px",
    lineHeight: "88px",
    color: "#21436E",
  },
  formHeaderTxt: {
    fontFamily: "SharpSans",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "29px",
    color: "#21436E",
    maxWidth: "376px",
  },
  cssLabel: {
    color: "#21436E",
    fontFamily: "SharpSans",
    fontWeight: 600,
    fontSize: "20px",
    fontStyle: "italic",
    lineHeight: "25px",
    minWidth: "158px",
  },
  notchedOutline: {
    borderWidth: "1px",
    "&:before": {
      borderColor: "#646464",
    },
    "&:after": {
      borderColor: "#646464",
    },
    borderRadius: "3px",
  },
  submitButton: {
    backgroundColor: "#21436E",
    borderRadius: "0px",
    height: "50px",
    maxWidth: "221px",
  },
  checkBoxTxt: {
    color: "#646464",
    fontFamily: "SharpSans",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "25px",
  },
  closeIcon: {
    position: "absolute",
    right: 8,
    top: 8,
    color: "gray",
  },
  popupTitle: {
    fontFamily: "DiodrumArabic",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "Bold",
    marginRight: "5px",
    color: "#21436E",
  },
  popupInfo: {
    fontFamily: "SharpSans",
    fontWeight: 600,
    fontSize: "18px",
    color: "#21436E",
  },
  popupDivider: {
    margin: "10px",
  },
});

export default styles;

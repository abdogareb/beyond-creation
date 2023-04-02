import bgImage from "../../assets/images/HomePage/Header.png";
const styles = (theme) => ({
  header: {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "85vh",
    width: "100%",
  },
  navBar: {
    [theme.breakpoints.up('md')]: {
      padding: "70px",
    }
  },
  logo:{
    [theme.breakpoints.up('md')]: {
    marginTop:"-3px",
    },
    [theme.breakpoints.down('sm')]: {
      marginTop:"20px",
      maxWidth: "70px",
      maxHeight: "80px"
    }
  },
  degreeType: {
    marginTop: "11px",
    color: "white",
    "&:before": {
      borderColor: "white",
    },
    "&:after": {
      borderColor: "white",
    },
  },
  degreeTypeIcon: {
    fill: "white",
  },
  footer: {
    backgroundColor: "#21436E",
    paddingBottom:"50px"
  },
  weatherIcon: {
    marginTop: "-20px",
  },
  headerText: {
    fontFamily: "DiodrumArabic",
    fontWeight: 400,
    fontSize: "88px",
    lineHeight: "88px",
    margin: "0px",
    color: "white",
  },
  subText: {
    fontFamily: "SharpSans",
    fontWeight: 600,
    fontSize: "22px",
    color: "white",
    maxWidth: "585px",
    lineHeight: "36px",
    margin: "0px",
  },
  temperatureTxt: {
    fontFamily: "DiodrumArabic",
    fontWeight: 400,
    fontSize: "18px",
    marginTop: "15px",
    width:"40px",
    alignItems:'flex-start',
    marginRight:"10px",
    color: "white",
  },
  bookBtn: {
    backgroundColor: "white",
    color: "#1A3143",
    width: "144px",
    height: "60px",
    border: "1px solid #21436E",
    borderRadius: 0,
  },
  callBtn: {
    color: "white",
    height: "60px",
    width: "60px",
    border: "1.5px solid #FFFFFF",
    borderRadius: "50%",
    marginRight:"30px"
  },
  btn: {
    backgroundColor: "white",
    color: "#1A3143",
    width: "221px",
    height: "50px",
    border: "1px solid #21436E",
    borderRadius: 0,
  },
});

export default styles;

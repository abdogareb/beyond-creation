const styles = (theme) => ({
  image: {
    width: "568px",
    height: "688px",
    [theme.breakpoints.down('lg')]: {
      width: "510px",
    height: "688px",
    },
    [theme.breakpoints.down('md')]: {
      width: "250px",
    height: "288px",
    }
  },
  radioBtn:{
    color: "#c0c0c0",
    '&.Mui-checked': {
      color: "#808080",
    }
}
});
export default styles;
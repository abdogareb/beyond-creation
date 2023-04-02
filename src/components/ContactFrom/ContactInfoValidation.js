import * as yup from "yup";


const phoneRegEx = /^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/;
export const schema = yup
  .object({
    name: yup.string("Not a vaild Name").required("Name is a required field"),
    email: yup
      .string()
      .email("Not a vaild Email")
      .required("Email is a required field"),
    phone: yup
      .string()
      .matches(phoneRegEx, "Phone number is not valid")
      .required(),
    budget: yup.number('Not a valid budget').required("Budget is a required field"),
    message:yup.string('Not a valid message').required("Please add you message"),
  })
  .required();

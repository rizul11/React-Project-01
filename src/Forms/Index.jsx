import React from "react";
import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(3).max(18).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
});

function Index() {
  return <div></div>;
}

export default Index;

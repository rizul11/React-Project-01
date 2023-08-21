import React, { useState } from "react";
import { useFormik } from "formik";

function Login() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password:"",
  };
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {},
  });

  return (
    <>
      <section className="questions">
        <div className="container-sm">
          <h1 className="heading_1">
            Questions? <span>Say hi.</span>
          </h1>
          <div className="questions_inner">
            <form>
              <div className="form_field">
                <div className="row gx-4">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="name"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="confirm_password" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirm_password"
                      name="confirm_password"
                      className="form-control"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="interested">
            <h5 className="heading_5">Interested in becoming a speaker?</h5>
            <p>
              We are always looking for new speakers on a variety of design
              &amp; technology disciplines. Please apply by filling in our{" "}
              <a href="#">typeform</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

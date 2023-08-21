import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [enquiry, setEnquiry] = useState("");
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
                      type="text"
                      id="name"
                      value={name}
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                      phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="company" className="form-label">
                      company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="form-control"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="subject" className="form-label">
                      subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="form-control"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="enquiry" className="form-label" value={enquiry} onChange={(e) => setEnquiry(e.target.value)} >
                      Enquiry
                    </label>
                    <textarea
                      id="enquiry"
                      className="form-control"
                      rows={4}
                      defaultValue={""}
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

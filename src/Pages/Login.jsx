import React from 'react'

function Login() {
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
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">phone</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">company</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label">subject</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-12 mb-3">
              <label className="form-label">Enquiry</label>
              <textarea className="form-control" rows={4} defaultValue={""} />
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
        We are always looking for new speakers on a variety of design &amp;
        technology disciplines. Please apply by filling in our{" "}
        <a href="#">typeform</a>.
      </p>
    </div>
  </div>
</section>

    </>
  )
}

export default Login

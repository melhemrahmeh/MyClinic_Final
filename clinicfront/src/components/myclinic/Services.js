import { Link } from 'react-router-dom'
import React  from 'react'

//TODO: adjust the price   9999.99$
export default function Services() {
  return (

    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Operations</h5>
          <h1 className="display-4">Excellent Medical Services</h1>
        </div>

        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Diagnostics</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Check Up</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Osteoplasty</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Endodontics</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Whitening</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Extraction</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Orthodontics</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Gum Treatmemt</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Dental Caries</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Odontogenic Cyst</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Dental Implants</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Root Canal</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Broken Tooth</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <i class="fa fa-tooth fa-stack-2x fa-inverse"></i>
              </div>
              <h4 className="mb-3">Brushing</h4>
              <p className="m-0">Description:</p>
              <p class="service-price">...$</p>
              <a className="btn btn-lg btn-primary rounded-pill" href>
                <Link to={"/bookappointment"}> <i className="bi bi-arrow-right"> </i></Link>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
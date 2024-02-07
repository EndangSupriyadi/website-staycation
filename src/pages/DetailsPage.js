// DetailsPage.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
// import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import { checkoutBooking } from 'store/actions/checkout';
import { fetchPage } from "store/actions/page";
import Activities from "parts/Activities";

function DetailsPage({ page, fetchPage, checkoutBooking }) {
  const { id } = useParams();

  useEffect(() => {
    window.title = "Details Page";
    window.scrollTo(0, 0);

    if (!fetchPage || !page[id]) {
      fetchPage(`/detail-page/${id}`, id);
    }
  }, [id, fetchPage, page]);

  if (!page || !page[id]) return <div>Loading...</div>;

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  return (
    <>
      <Header />
      <PageDetailTitle breadcrumb={breadcrumb} data={page[id]} />
      <FeaturedImage data={page[id].imageId} />
      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <Fade delay={20}>
              <PageDetailDescription data={page[id]} />
            </Fade>
          </div>
          <div className="col-5 mb-5">
            <Fade bottom>
              <BookingForm 
              itemDetails={page[id]} 
              startBooking={checkoutBooking}/>
            </Fade>
          </div>
        </div>
      </section>
      <Activities data={page[id].activityId} />
      <Testimony data={page[id].testimonial} />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage, checkoutBooking })(DetailsPage);

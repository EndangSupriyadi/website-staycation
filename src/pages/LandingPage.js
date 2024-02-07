/* eslint-disable no-undef */
import React, { Component } from 'react';
import Header from 'parts/Header';
import { connect } from "react-redux";
import { fetchPage } from 'store/actions/page'

// import landingPage from 'json/landingPage';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';


class LandingPage extends Component {
  constructor(props){
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    window.title = "Stycation | Home";
    window.scrollTo(0, 0);

    if (!this.props.landingPage)
      this.props.fetchPage(`/landing-page`, 'landingPage');
    
  }
  
  render() {
    const { page } = this.props;

    if( !page.hasOwnProperty("landingPage")) return null;

    // if (!page || !page.hasOwnProperty("http://localhost:3001/api/v1/member/landing-page", 'landingPage'));
      return (
        <>   
          <Header {...this.props}></Header>
          <Hero refMostPicked={this.refMostPicked} data={ page.landingPage.hero} />
          <MostPicked 
            refMostPicked={this.refMostPicked} 
            data={ page.landingPage.mostPicked} 
          />
          <Categories data={ page.landingPage.categories}  />
          <Testimony data={ page.landingPage.testimonial} />
          <Footer />

        </> 
      );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
  // page: state.page ? state.page.landingPage : null
});

export default connect(mapStateToProps,{ fetchPage })(LandingPage)
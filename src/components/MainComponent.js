import React, { Component } from "react";
import Gallery from "./GalleryComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import GalleryInfo from "./GalleryInfoComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    gallerys: state.gallerys,
    promotions: state.promotions,
  };
};

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home
          promotion={
            this.props.promotions.filter((promotion) => promotion.featured)[0]
          }
          gallery={this.props.gallerys.filter((gallery) => gallery.featured)[0]}
        />
      );
    };
    const GalleryWithId = ({ match }) => {
      return (
        <GalleryInfo
          gallery={
            this.props.gallerys.filter(
              (gallery) => gallery.id === +match.params.galleryId
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.galleryId === +match.params.galleryId
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/Gallery"
            render={() => <Gallery gallerys={this.props.gallerys} />}
          />
          <Route path="/Gallery/:galleryId" component={GalleryWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            render={() => <About gallerys={this.props.gallerys} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));

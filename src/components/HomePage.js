import React from "react";
import Carousel from "./sections/Carousel";
import News from "./sections/News";
import About from "./sections/About";
import Profile from "./sections/Profile";
import ProfileModal from "./ProfileModal";
import Story from "./sections/Story";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./Header";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileClickIndex: 0
    };
    this.handleClickProfile = this.handleClickProfile.bind(this);
  }
  handleClickProfile(index) {
    this.setState(() => ({
      profileClickIndex: index
    }));
  }
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <News />
        <About />
        <Profile profileIndex={this.handleClickProfile} />
        <Story />
        <Contact />
        <Footer />
        <ProfileModal index={this.state.profileClickIndex} />
      </div>
    );
  }
}

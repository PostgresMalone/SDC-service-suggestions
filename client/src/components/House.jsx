import React from 'react';
import FavoritesModal from './FavoritesModal.jsx';
import {
  HouseInfo, ImgContainer, PlusText,
  BedText, VerifiedText, HouseName, HousePrice,
  ReviewStars, NumberOfReviews, HeartPicture
} from './Styled_Components/styling.jsx';

class House extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showListForm: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleListForm = this.toggleListForm.bind(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
    if (this.state.showListForm === true) {
      this.setState({ showListForm: !this.state.showListForm });
    }
  }

  toggleListForm() {
    this.setState({ showListForm: !this.state.showListForm });
  }

  render() {
    return (
      <HouseInfo >
        <ImgContainer>
          <img src={this.props.house.home_thumbnail_img} />
        </ImgContainer>
        <VerifiedText>
          <PlusText>PLUS</PlusText>
          <BedText>{this.props.house.home_beds} Beds</BedText>
        </VerifiedText>
        <HouseName>Lorem Ipsum</HouseName>
        <HousePrice>{this.props.house.home_price}</HousePrice>
        <NumberOfReviews>
          <ReviewStars src="https://s3-us-west-1.amazonaws.com/picturesfec1/stars.png" />
        </NumberOfReviews>
      </HouseInfo>
    );
  }
}

export default House;


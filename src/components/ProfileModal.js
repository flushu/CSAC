import React from "react";

export default class ProfileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [
        {
          name: "Puffy",
          age: "5 years old",
          gender: "Female",
          stories: [
            {
              title: "Puffy was brought to Dr. Song's office",
              img_src: "./images/modals/puffy_1.jpg",
              story: [
                "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
                "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
              ]
            },
            {
              title: "Puffy took out teethes",
              img_src: "./images/modals/puffy_1.jpg",
              story: [
                "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
                "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
              ]
            }
          ]
        },
        {
          name: "Lady Jane",
          age: "6 years old",
          gender: "Female",
          stories: [
            {
              title: "Lady Jane was brought to Dr. Song's office",
              img_src: "./images/modals/profile_story_lj.jpeg",
              story: [
                "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
                "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
              ]
            },
            {
              title: "Lady Jane's dump on forehead removed",
              img_src: "./images/modals/profile_story_lj2.jpg",
              story: [
                "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
                "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
              ]
            }
          ]
        },
        {
          name: "Thor",
          age: "2 years old",
          gender: "Male",
          stories: [
            {
              title:
                "2 year old Chihuahua mix who was hit by a car a few weeks ago. 14 lbs.",
              img_src: "./images/modals/profile_story_thor.jpeg",
              story: ["Thor was brought to Robin's house after the accident"]
            },
            {
              title:
                "He underwent left hip surgery with titanium plate and screws on May 21st 2018.",
              img_src: "./images/modals/thor_story_2.jpg",
              story: [
                "He is doing well and is recovering with Robin, our patient. He is friendly with other dogs and is potty-trained.",
                "He still needs to be neutered which they recommended at a later date date after he is hip healed.",
                "Any proceeds from the adoption can go to Henry's hope. Thank you!"
              ]
            }
          ]
        },
        {
          name: "Kittens",
          age: "2 years old",
          gender: "Female",
          stories: [
            {
              title: "Kittens were brought to Dr. Song's office",
              img_src: "./images/modals/profile_kittens.jpeg",
              story: [
                "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
                "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
              ]
            }
          ]
        }
      ]
    };
  }
  render() {
    const profile = this.state.profiles[this.props.index];
    return (
      <div
        className="modal fade"
        id="profileModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {profile.name}
              </h5>
              <p style={{ paddingTop: "5px", paddingLeft: "5px" }}>{`Age: ${
                profile.age
              }, Gender: ${profile.gender}`}</p>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="list-unstyled">
                {Object.keys(this.state.profiles[this.props.index].stories).map(
                  key => {
                    return (
                      <li className="media m-2" key={key}>
                        <img
                          className="align-self-start mr-3"
                          src={
                            this.state.profiles[this.props.index].stories[key]
                              .img_src
                          }
                          alt="Generic placeholder image"
                        />
                        <div className="media-body">
                          <h5 className="mt-0">
                            {
                              this.state.profiles[this.props.index].stories[key]
                                .title
                            }
                          </h5>
                          {Object.keys(
                            this.state.profiles[this.props.index].stories[key]
                              .story
                          ).map(key2 => (
                            <p key={key2}>
                              {
                                this.state.profiles[this.props.index].stories[
                                  key
                                ].story[key2]
                              }
                            </p>
                          ))}
                        </div>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

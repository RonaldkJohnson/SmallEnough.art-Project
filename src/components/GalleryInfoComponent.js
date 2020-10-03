import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isModalOpen: false,
    };
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit = (values) => {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
  };
  render() {
    return (
      <React.Fragment>
        <Button onClick={this.toggleModal} i className="fa fa-pencil fa-lg  ">
          Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="FormGroup">
                <Label htmlFor="rating">Rating</Label>
                <Control.select model=".rating" id="rating" name="rating">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Control.select>
              </div>
              <div className="FormGroup">
                <Label htmlFor="yourName">Your Name</Label>
                <Control.text
                  model=".yourName"
                  type="text"
                  id="yourName"
                  name="yourName"
                  innerRef={(input) => (this.yourName = input)}
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".yourName"
                  component="div"
                  messages={{
                    required: "Required",
                    minLength: "Must be at least 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </div>
              <div className="FormGroup">
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  model=".comment"
                  type="text"
                  id="comment"
                  name="comment"
                  rows="8"
                  innerRef={(input) => (this.comment = input)}
                />
              </div>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

function Rendergallery({ gallery }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={gallery.image} alt={gallery.name} />
        <CardBody>
          <CardText>{gallery.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>"Comments"</h4>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <p>{comment.author}</p>
            <p>
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </div>
        ))}
        <CommentForm></CommentForm>
      </div>
    );
  }
}

function galleryInfo(props) {
  if (props.gallery) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/Gallery">Gallery</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.gallery.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.gallery.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <Rendergallery gallery={props.gallery} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default galleryInfo;

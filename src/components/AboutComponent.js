import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderGallery({ gallery }) {
  if (gallery) {
    return (
      <React.Fragment>
        <Media object src={gallery.image} alt={gallery.name} width="150" />
        <Media body className="ml-5 mb-4">
          <Media heading>{gallery.name}</Media>
          {gallery.description}
        </Media>
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
}

function About(props) {
  const gallerys = props.gallerys.map((gallery) => {
    return (
      <Media tag="li" key={gallery.id}>
        <RenderGallery gallery={gallery} />
      </Media>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
          <h2>About Us</h2>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-sm-6">
          <h3>Random Content Here!!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
            feugiat nibh, nec pellentesque massa aliquet at. In consequat nec
            arcu at semper. Praesent convallis tortor placerat, dapibus purus
            vel, convallis urna. Mauris gravida a arcu quis cursus. Curabitur
            faucibus, augue vitae consectetur ullamcorper, turpis sapien
            sollicitudin ex, eu efficitur tellus magna luctus purus. Ut accumsan
            dapibus quam, eget bibendum ante eleifend nec. Aliquam non elit
            vitae urna commodo feugiat id nec neque. Maecenas a lobortis lorem,
            at luctus libero. Vivamus tristique erat orci, consequat hendrerit
            quam accumsan consequat. Donec sagittis, justo efficitur mattis
            facilisis, est nisi sollicitudin mauris, eget venenatis elit arcu
            vitae enim. Sed nec consectetur lectus, a lacinia est. Suspendisse
            ullamcorper ex in elementum condimentum. Sed accumsan sit amet nibh
            quis accumsan. In a porta mauris. Nunc congue purus felis, ac
            faucibus tortor tempus vel. Pellentesque in quam id nibh viverra
            laoreet ac eu tellus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur augue orci, sollicitudin sit amet diam
            at, facilisis venenatis neque. Nulla blandit mi bibendum efficitur
            elementum. Nulla lectus felis, auctor nec molestie eu, feugiat in
            tortor. Aenean auctor leo a velit maximus, nec egestas justo
            pellentesque. Cras in lacinia neque. Duis convallis quis turpis ac
            imperdiet. Integer ornare ante dolor, sed vestibulum ex interdum
            nec. Integer quis posuere purus.
          </p>
        </div>
        <div className="col-sm-6">
          <Card>
            <CardHeader className="bg-dark text-white">
              <h3>About Me</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <img
                  src="/assets/images/testworking.jpg"
                  class="img-fluid"
                  height="1150"
                  width="1150"
                  alt="Conflict"
                />
                <dl className="row">
                  <dt className="col-6">Grew Up:</dt>
                  <dd className="col-6">All over the west coast</dd>
                  <dt className="col-6">Number of paintings made:</dt>
                  <dd className="col-6">220 and counting</dd>
                  <dt className="col-6">Number of Siblings:</dt>
                  <dd className="col-6">2</dd>
                  <dt className="col-6">Number of Nephews and Neices:</dt>
                  <dd className="col-6">3 and counting</dd>
                </dl>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col">
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p className="mb-0">
                  “I dream my painting and I paint my dream.”
                </p>
                <footer className="blockquote-footer">
                  ― Vincent Willem van Gogh{" "}
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>More of My Work</h3>
        </div>
        <div className="col mt-4">
          <Media list>{gallerys}</Media>
        </div>
      </div>
    </div>
  );
}

export default About;

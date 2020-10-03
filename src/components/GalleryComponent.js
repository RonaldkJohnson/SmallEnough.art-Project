import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderGalleryItem({ gallery }) {
  return (
    <Card>
      <Link to={`/gallery/${gallery.id}`}>
        <CardImg width="100%" src={gallery.image} alt={gallery.name} />
        <CardImgOverlay>
          <CardTitle>{gallery.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}
function Gallery(props) {
  const gallery = props.gallerys.map((gallery) => {
    return (
      <div key={gallery.id} className="col-md-5 m-1">
        <RenderGalleryItem gallery={gallery} />
      </div>
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
            <BreadcrumbItem active>Gallery</BreadcrumbItem>
          </Breadcrumb>
          <h2>Gallery</h2>
          <hr />
        </div>
      </div>
      <div className="row">{gallery}</div>
    </div>
  );
}

/*
return (
    <div className="container">
      <div className="row">{gallery}</div>
      <div className="row">
        <div className="col-md-5 m-1">
          {this.renderSelectedgallery(this.state.selectedgallery)}
        </div>
      </div>
    </div>
  );
    }
    return <div />;

  
  */

export default Gallery;

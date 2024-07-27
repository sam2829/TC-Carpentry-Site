import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// component to render the info for services page
const ServicesPageInfoSection = () => {
  return (
    <>
      <Row className="my-5">
        <Col xs={12}>
          <h2 className="my-5">Services</h2>
          <p className="my-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
          </p>
        </Col>
      </Row>
    </>
  );
};

export default ServicesPageInfoSection;

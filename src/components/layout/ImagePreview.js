import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const ImagePreview = props => {
  return (
    
      <div className=" mt-5 container p-2">
        <Card className="border-0">
          <CardImg
            top
            width="100%"
            height="auto"
            src={props.imageSrcHandler}
            alt="no-image-available"
          />
          <CardBody>
            <CardTitle>Dokument Hochladen</CardTitle>
            <CardText>
              Klicken Sie auf die Kamera-Schaltfläche, um Ihr Bilddokument
              zufotografieren
            </CardText>
          </CardBody>
        </Card>
  
    </div>
  );
};

export default ImagePreview;

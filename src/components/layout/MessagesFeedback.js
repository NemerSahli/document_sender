import React from 'react'
import { Alert } from 'reactstrap';

export default function MessagesFeedback(props) {
  return (
    <div>
       {props.emailDelivered ? (
                  <Alert className="text-center text-white h5 bg-success">
                    Your Document has been sent.
                  </Alert>
                ) : null}
                {props.sendingMailFailedMessage !== '' ? (
                  <Alert className="text-center bg-danger text-white h5">
                    {props.sendingMailFailedMessage}
                  </Alert>
                ) : null}
    </div>
  )
}

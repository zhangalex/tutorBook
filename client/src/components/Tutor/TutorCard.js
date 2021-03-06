import React from "react";
import { Card, CardTitle, Col, Row } from "react-materialize";
import "./TutorCard.css";
import AddEvent from "../../components/AddEvent";

// import dependencies for calendar
import BigCalendar from "react-big-calendar";
import moment from "moment";
//import events from "../Events";
import "./BigCalendar.css";

// Setup localizer using moment !!!important
BigCalendar.momentLocalizer(moment);

// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const TutorCard = props => {
  return(
    <div>
      <Row>
        <Col m={4}>
          <Card className="large"
            header={
              <CardTitle image={props.header}>
                    {props.title}
                  </CardTitle>
                  }>
                  <p><a className="tutor-link" href="https://t.vipkid.com.cn/" target="_blank" rel="noopener noreferrer">VIPKID Teacher Portal</a></p>
                  <p className="content-content">
                   Total Students: {props.count}
                  </p>
                  <p className="content-content">
                    Teacher Contract: {props.contract}
                  </p>
          </Card>
          <AddEvent _tutorEventUpdate={props._tutorEventUpdate}/>
        </Col>
        <Col m={6}>
        
          <BigCalendar
            {...this.props}
            events={props.events}
            step={60}
            defaultDate={new Date()}
          />
        </Col>
      </Row>
    </div>
  );

} //end TutorCard const

export default TutorCard;

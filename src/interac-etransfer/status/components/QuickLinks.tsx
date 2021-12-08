import { Col } from 'react-bootstrap';

export default function QuickLinks() {
  return (
    <Col xs={3}>
      <div className="border p-2 rounded">
        <b>You can also:</b>
        <br />
        View upcoming bills payments and transfers &gt;
        <br />
        Stop a payment &gt;
        <br />
        Change your statment preferences &gt;
      </div>
    </Col>
  );
}

import { Col, Form, Row } from 'react-bootstrap';

export default function DatePicker({
  months,
  days,
  years,
}: {
  months: number[];
  days: number[];
  years: number[];
}) {
  return (
    <Col xs={9}>
      <Row>
        <Col xs="auto">
          <Form.Select>
            {months?.map((month: number) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs="auto">
          <Form.Select>
            {days?.map((day: number) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs="auto">
          <Form.Select>
            {years?.map((year: number) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Col>
  );
}

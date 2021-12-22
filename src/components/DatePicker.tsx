import { DateTime } from 'luxon';
import { Col, Form, Row } from 'react-bootstrap';

const years = (): number[] => {
  const currentYear = DateTime.now().setZone('America/New_York').year;
  const yrs = [];
  for (let i = currentYear; i <= currentYear + 5; i += 1) yrs.push(i);
  return yrs;
};
const months = (): number[] => {
  const mnths = [];
  for (let i = 1; i <= 12; i += 1) mnths.push(i);
  return mnths;
};
const days = (): number[] => {
  const dys = [];
  for (let i = 1; i <= 31; i += 1) dys.push(i);
  return dys;
};

export default function DatePicker() {
  return (
    <Col xs={9}>
      <Row>
        <Col xs="auto">
          <Form.Select>
            {months().map((month: number) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs="auto">
          <Form.Select>
            {days().map((day: number) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col xs="auto">
          <Form.Select>
            {years().map((year: number) => (
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

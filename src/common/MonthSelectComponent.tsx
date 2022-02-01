import { Form } from 'react-bootstrap';

const getDateAry = (e:any) => {
  const result: any = [];
  let prevYearValue = '';
  for (let i = 0; i < 12; i += 1) {
    const calculatedDate = e.minus({ months: i });
    const dateStr = calculatedDate.toFormat('MMMM yyyy');
    const yearValue = calculatedDate.toFormat('yyyy');
    if (prevYearValue !== yearValue) {
      result.push({
        label: yearValue,
        items: [],
      });
      prevYearValue = yearValue;
    }
    const item = {
      value: dateStr,
    };
    result[result.length - 1].items.push(item);
  }
  return result;
};

export default function MonthSelectComponent(props: any) {
  const { onChange, prefix = 'option', currentDate } = props;
  const dateAry = getDateAry(currentDate);
  return (
    <Form.Select style={{ maxWidth: 300 }} onChange={onChange} className="month-select-comp">
      {dateAry.map((item: any) => (
        <optgroup label={`${item.label}`} key={`${prefix}_${item.label}`}>
          {item.items.map((dateValue: any) => (
            <option value={dateValue.value} key={`${prefix}_${dateValue.value}`}>
              {dateValue.value}
            </option>
          ))}
        </optgroup>
      ))}
    </Form.Select>
  );
}

import { Form } from 'react-bootstrap';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDateAry = () => {
  const dateVal = new Date();
  const year = dateVal.getFullYear();
  const prevYear = year * 1 - 1;
  const currMonth = dateVal.getMonth();
  const result: any = [
    {
      label: year,
      items: [],
    },
    {
      label: prevYear,
      items: [],
    },
  ];

  for (let i = 0; i < 12; i += 1) {
    let dateStr = '';
    if (currMonth - i < 0) {
      dateStr = `${MONTH_NAMES[currMonth - i]} ${prevYear}`;
      const item = {
        value: dateStr,
        currMonth,
        currYear: year,
      };
      if (!result[0]) {
        result[0] = [];
      }
      result[0].items.push(item);
    } else {
      dateStr = `${MONTH_NAMES[currMonth - i]} ${year}`;
      const item = {
        value: dateStr,
        currMonth,
        currYear: year,
      };
      if (!result[1]) {
        result[1] = [];
      }
      result[1].items.push(item);
    }
  }
  return result;
};

export default function MonthSelectComponent(props: any) {
  const { onChange } = props;
  const dateAry = getDateAry();
  return (
    <Form.Select style={{ maxWidth: 300 }} onChange={onChange} className="month-select-comp">
      {dateAry.map((item: any) => (
        <optgroup label={`${item.label}`} key={`sent_${item.label}`}>
          {item.items.map((dateValue: any) => (
            <option value={dateValue.value} key={`sent_${dateValue.value}`}>
              {dateValue.value}
            </option>
          ))}
        </optgroup>
      ))}
    </Form.Select>
  );
}

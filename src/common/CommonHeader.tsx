import PropTypes from 'prop-types';

function CommonHeader({ title, print }: { title: string; print: boolean }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h3>{title.toUpperCase()}</h3>
      <div className="d-flex">
        {print && (
          <div
            style={{
              width: 20,
              height: 25,
              border: '1px dotted grey',
              textAlign: 'center',
              marginRight: 10,
            }}
            title="print"
          >
            P
          </div>
        )}
        <div
          style={{
            width: 20,
            height: 25,
            border: '1px dotted grey',
            textAlign: 'center',
            marginRight: 10,
          }}
          title="copy"
        >
          P
        </div>
        <div
          style={{
            width: 20,
            height: 25,
            border: '1px dotted grey',
            textAlign: 'center',
            marginRight: 10,
          }}
          title="question"
        >
          P
        </div>
      </div>
    </div>
  );
}

CommonHeader.propTypes = {
  title: PropTypes.string,
  print: PropTypes.bool,
};

CommonHeader.defaultProps = {
  title: '',
  print: true,
};

export default CommonHeader;

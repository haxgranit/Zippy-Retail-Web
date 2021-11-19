import React from 'react';
import CopyIcon from '../icons/copy.png';
import PrintIcon from '../icons/print.png';
import QuestionIcon from '../icons/question.png';

function CommonHeader({ title, print }) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1>{title.toUpperCase()}</h1>
      <div className="d-flex">
        {print && (
          <img src={PrintIcon} alt="placeholder" style={{ width: 20, height: 25, marginRight: 10 }} />
        )}
        <img src={CopyIcon} alt="placeholder" style={{ width: 20, height: 25, marginRight: 10 }} />
        <img src={QuestionIcon} alt="placeholder" style={{ width: 20, height: 25, marginRight: 10 }} />
      </div>
    </div>
  );
}

CommonHeader.propTypes = {
  title: String,
  print: Boolean,
};

CommonHeader.defaultProps = {
  title: '',
  print: true,
};

export default CommonHeader;

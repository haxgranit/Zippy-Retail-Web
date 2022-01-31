import PropTypes from 'prop-types';

function ZippyPageContainer({
  className,
  title,
  subTitle,
  children,
}: {
  className?: string;
  title?: string;
  subTitle?: string;
  children: any;
}) {
  return (
    <>
      <div className={className}>
        <div className="zippy-cash-container-wrap">
          <div className="backdrop" />
          <div className="zippy-cash-container">
            {title && subTitle
              && (
                <div className="zippy-cash-container-header">
                  <div className="title">{title}</div>
                  <div className="catch">{subTitle}</div>
                </div>
              )}
            <div className="zippy-cash-container-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ZippyPageContainer.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

ZippyPageContainer.defaultProps = {
  className: '',
  title: '',
  subTitle: '',
};

export default ZippyPageContainer;

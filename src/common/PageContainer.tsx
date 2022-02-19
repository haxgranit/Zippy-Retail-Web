import PropTypes from 'prop-types';

function PageContainer({
  className,
  title,
  subTitle,
  backdropImage,
  children,
  showClose,
  closeHandler,
}: {
  className?: string;
  showClose: boolean,
  closeHandler: Function,
  title?: string;
  subTitle?: string;
  backdropImage?: string;
  children: any;
}) {
  return (
    <>
      <div className={className}>
        <div className="zippy-cash-container-wrap">
          <div className={`backdrop ${backdropImage || ''}`} />
          <div className="zippy-cash-container">
            <div className="zippy-cash-container-header">
              {showClose && (
                <i
                  aria-label="close"
                  tabIndex={0}
                  className="zippy-cash-icon zc-cross"
                  role="button"
                  onClick={() => closeHandler?.()}
                  onKeyUp={() => { }}
                />
              )}
              {title && <h1 className="title">{title}</h1>}
              {subTitle && <h2 className="catch">{subTitle}</h2>}
            </div>
            <div className="zippy-cash-container-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

PageContainer.propTypes = {
  className: PropTypes.string,
  showClose: PropTypes.bool,
  closeHandler: PropTypes.func,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  backdropImage: PropTypes.string,
};

PageContainer.defaultProps = {
  className: '',
  showClose: false,
  closeHandler: () => {},
  title: '',
  subTitle: '',
  backdropImage: '',
};

export default PageContainer;

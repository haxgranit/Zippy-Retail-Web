import PageContainer from '../../common/PageContainer';
import placeholder from './Account.png';

export default function Account() {
  return (
    <PageContainer backdropImage="backdrop-image-1">
      <img src={placeholder} alt="placeholder" style={{ margin: '-50px -35px' }} />
    </PageContainer>
  );
}

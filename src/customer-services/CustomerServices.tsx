import PageContainer from '../common/PageContainer';
import placeholder from './CustomerServices.png';

export default function CustomerServices() {
  return (
    <PageContainer backdropImage="backdrop-image-1">
      <img src={placeholder} alt="placeholder" style={{ margin: '-50px -35px' }} />
    </PageContainer>
  );
}

import PageContainer from '../common/PageContainer';
import placeholder from './ManageMyAlerts.png';

export default function ManageMyAlerts() {
  return (
    <PageContainer backdropImage="backdrop-image-2">
      <img src={placeholder} alt="placeholder" style={{ margin: '-50px -35px' }} />
    </PageContainer>
  );
}

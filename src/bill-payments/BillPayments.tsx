import PageContainer from '../common/PageContainer';
import placeholder from './BillPayments.png';

export default function BillPayments() {
  return (
    <PageContainer backdropImage="backdrop-image-2">
      <img src={placeholder} alt="placeholder" style={{ margin: '-50px -35px' }} />
    </PageContainer>
  );
}

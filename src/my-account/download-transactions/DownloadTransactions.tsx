import PageContainer from '../../common/PageContainer';
import placeholder from './DownloadTransactions.png';

export default function DownloadTransactions() {
  return (
    <PageContainer backdropImage="backdrop-image-2">
      <img src={placeholder} alt="placeholder" style={{ margin: '-50px -35px' }} />
    </PageContainer>
  );
}

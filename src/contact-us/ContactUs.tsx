import PageContainer from '../common/PageContainer';
import placeholder from './ContactUs.png';

export default function ContactUs() {
  return (
    <PageContainer backdropImage="backdrop-image-3">
      <img src={placeholder} alt="placeholder" style={{ margin: '-50px -35px' }} />
    </PageContainer>
  );
}

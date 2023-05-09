import Banner from './modules/Banner';
import { EditBannerProvider } from './providers/ExitBannerProvider';

const Home: React.FC = () => {
  return (
    <EditBannerProvider>
      <Banner />
    </EditBannerProvider>
  );
};

export default Home;

import Banner from './modules/banner/Banner';
import Navbar from './modules/navigation/Navbar';
import { EditBannerProvider } from './providers/ExitBannerProvider';

const Home: React.FC = () => {
  return (
    <EditBannerProvider>
      <Banner />
      <Navbar />
    </EditBannerProvider>
  );
};

export default Home;

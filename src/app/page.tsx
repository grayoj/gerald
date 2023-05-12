import Layout from './modules/Layout';
import Banner from './modules/banner/Banner';
import ToolsBanner from './modules/banner/ToolsBanner';
import ToolCard from './modules/tools/cards/ToolCard';
import Footer from './modules/footer/Footer';
import Hero from './modules/hero/Hero';
import Navbar from './modules/navigation/Navbar';
import { EditBannerProvider } from './providers/ExitBannerProvider';
import ProjectsBanner from './modules/banner/ProjectsBanner';
import ProjectCard from './modules/projects/cards/ProjectCard';

const Home: React.FC = () => {
  return (
    <Layout>
      <EditBannerProvider>
        <Banner />
        <Navbar />
        <Hero />
        <ToolsBanner />
        <ToolCard />
        <ProjectsBanner />
        <ProjectCard />
        <Footer />
      </EditBannerProvider>
    </Layout>
  );
};

export default Home;

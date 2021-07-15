import CarouselContainer from "components/carousel/CarouselContainer";
import ProductCategories from "features/product/ProductCategories";
import ProductMain from "features/product/ProductMain";
import { motion } from "framer-motion";
import { pageSlide, pageTransition } from "utils/animations";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageSlide}
      transition={pageTransition}
    >
      <CarouselContainer />
      <ProductCategories />
      <ProductMain />
    </motion.div>
  );
};

export default HomePage;

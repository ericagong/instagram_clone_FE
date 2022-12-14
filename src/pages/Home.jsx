import Layout from "../componenets/common/Layout";
import Header from "../componenets/common/Header";
import HomeLayout from "../componenets/post/HomeLayout";

const Home = (props) => {
  return (
    <Layout>
      <Header />
      <HomeLayout />
    </Layout>
  );
};

export default Home;

import "./MyInsights.scss";
import Navbar from "../../components/Navbar/Navbar";
import Charts from "../../components/Chart/Chart";
import Footer from "../../components/Footer/Footer";
import Infosection from "../../components/Infosection/Infosction";
import Breakdown
 from "../../components/Breakdown/Breakdown";
const MyInsights = () => {
  return (
    <>
      <Navbar />
      <Charts />
      <Breakdown/>
      <Infosection />
      <Footer />
    </>
  );
};

export default MyInsights;

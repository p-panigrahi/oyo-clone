import React from "react";
import Header from "../components/header/Header";
import Hearder2 from "@/components/hearder2/Hearder2";
import Header3 from "@/components/header3/Header3";
import { BrokenImageTwoTone } from "@mui/icons-material";
import Image from "next/image";
import Head from "next/head";
import Header4 from "@/components/header4/Header4";
import Footer from "@/components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          OYO : India's best online hotel Booking Site For Sanitized Stay.
        </title>
      </Head>
      <Header />
      <Hearder2 />
      <Header3 />
      <div className="mx-20">
        <div className=" my-14">
          <Image
            src={"/banner1.avif"}
            width={200}
            height={200}
            className="h-80 w-full"
          />
        </div>
        <div className="mb-14">
          <Image
            src={"/banner2.avif"}
            width={200}
            height={200}
            className="h-40 w-full"
          />
        </div>
        <Header4 />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react'

import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
  Loader,
} from "../components/componentsindex";


export const Home = () => {
  return (
    <div className={Style.homePage}>
      <Title heading="HeroSection Componet" paragraph= "" />
      <HeroSection />
      <Title heading="Service Componet" paragraph= "" />
      <Service />
      <Title heading="BigNFTSilder Componet" paragraph= "" />
      <BigNFTSilder />
      <Title heading="Subscribe Componet" paragraph= "" />
      <Subscribe />
      <Title heading="Category Componet" paragraph= "Explore the NFTs in the most featcherd categrories." />
      <Category />
      <Title heading="Filter Componet" paragraph= "" />
      <Filter />
      <Title heading="NFTCard Componet" paragraph= "" />
      <NFTCard />
      <Title heading="AudioLive Componet" paragraph= "" />
      <AudioLive />
      <Title heading="FollowerTab Componet" paragraph= "" />
      <FollowerTab />
      <Title heading="Slider Componet" paragraph= "" />
      <Slider />
      <Title heading="Brand Componet" paragraph= "" />
      <Brand />
      <Title heading="Collection Componet" paragraph= "" />
      <Collection />
      <Title heading="Video Componet" paragraph= "" />
      <Video />
      <Title heading="Loader Componet" paragraph= "" />
      <Loader />
    </div>
  )
}


export default Home;
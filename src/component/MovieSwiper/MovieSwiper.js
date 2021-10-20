import useMovieDB from "hook/useMovieDB";
import React from "react";
import "swiper/swiper-bundle.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Badge, Card } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  Keyboard
} from 'swiper';

const { Meta } = Card;
export default function MovieSwiper() {
  const { data, loading } = useMovieDB("movie/popular");


    SwiperCore.use([Pagination,Navigation,Autoplay,Keyboard])
    return (

      <>
    <Swiper
          spaceBetween={30}
          slidesPerGroup={2}
          navigation={true}
          keyboard={true}
          autoplay={{ delay: 1000 }}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            300: {
              width: 300,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
            },
          }}
        >
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            data?.results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Card
                  hoverable
                  style={{ width: "100%", borderRadius: 25 }}
                  cover={
                    <img
                      style={{ borderRadius: 15 }}
                      alt="example"
                      src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    />
                  }
                >
                  <Meta
                    avatar={<VideoCameraOutlined style={{ color: "green" }} />}
                    title={movie.title}
                    description={
                      <Badge
                        count={`${movie.vote_average}`}
                        style={{
                          cursor: "pointer",
                          backgroundColor: "gold",
                          color: "black",
                          fontSize: "14px",
                        }}
                      />
                    }
                  />
                </Card>
              </SwiperSlide>
            ))
          )}
        </Swiper>
    </>

    )
 
}

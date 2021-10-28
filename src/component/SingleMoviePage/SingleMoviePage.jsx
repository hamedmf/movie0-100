import React from "react";
import { Col, Layout, Row, Spin } from "antd";
import { useParams } from "react-router";
import useMovieDB from "hook/useMovieDB";

import Classes from "./SingleMoviePage.module.scss";

const { Content, Sider } = Layout;
const SingleMoviePage = () => {
  const { id } = useParams();
  const { loading, data } = useMovieDB(`/movie/${id}`);

  return (
    <section>
      {!data ? (
        <div>
          <div className={Classes.spin}>
            <Spin size="large" />
          </div>
        </div>
      ) : (
        <>
          <div className={Classes.UpSinglePage}>
            <div className={Classes.backgroundSingleMovie}>
              <img
                className={Classes.ImgSingleMovie}
                src={`https://image.tmdb.org/t/p/w1280/${data?.backdrop_path}`}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className={Classes.posterSingleMovie}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  borderRadius: "20px",
                  opacity: "0.92",
                }}
              />
            </div>
          </div>
          <Layout className={Classes.DescriptionLayOut}>
            <Content>
              <Row className={Classes.DescriptionSingleMovie}>
                <Col md={24} xs={24}>
                  <div className={Classes.TitleSingleMovie}>
                    <h2>{data.title}</h2>
                  </div>
                </Col>

                <Col md={24} xs={24}>
                  <div className={Classes.GenresSingleMovie}>
                    {data
                      ? data.genres.map((gerne) => (
                          <span key={gerne.id}>{gerne.name}</span>
                        ))
                      : null}
                  </div>
                </Col>

                <Col md={24} xs={24}>
                  <div className={Classes.LanguageSingleMovie}>
                    {data
                      ? data.spoken_languages.map((lang) => (
                          <span key={lang.id}>{lang.english_name}</span>
                        ))
                      : null}
                  </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className={Classes.ReleaseDateSingle}>
                    Date Released: <span>{data.release_date}</span>
                  </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className={Classes.ReleaseOrNot}>
                    Status: <span>{data.status}</span>
                  </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className={Classes.RateSingleMovie}>
                    Rate: <span>{data.vote_average}</span>/10
                  </div>
                </Col>
                <Col md={12} xs={12}>
                  <div className={Classes.RateCountSingle}>
                    Vote Count: <span>{data.vote_count}</span>
                  </div>
                </Col>
                <Col md={24} xs={24}>
                  <div className={Classes.BudgetSingleMovie}>
                    Budget: <span>{data.budget}</span>
                  </div>
                </Col>
                <Col md={24} xs={24}>
                  <div className={Classes.OverViewSingleMovie}>
                    OverView : <p>{data.overview}</p>
                  </div>
                  <br />
                </Col>
              </Row>
            </Content>
            <Sider theme="light" className="sidebar-component">
              <div className={Classes.SideMovieCard}>
                <h4>Production companies</h4>
                <Row>
                  {data.production_companies.map((company) => (
                    <Col md={24} xs={24} key={company.id}>
                      <div className={Classes.ImgCompany}>
                        <img
                          style={{ width: "70px", maxHeight: "70px" }}
                          src={`https://image.tmdb.org/t/p/w154/${company.logo_path}`}
                          alt=""
                        />
                      </div>
                      <div className={Classes.CompanyName}>
                        <h3>{company.name}</h3>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Sider>
          </Layout>
        </>
      )}
    </section>
  );
};

export default SingleMoviePage;

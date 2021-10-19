import React, { useEffect, useState } from "react";

import PopMovieSlider from "component/PopMoviesSlider/PopMovieSlider";

// const { Meta } = Card;

// export default function Home() {
//   const [post, setPost] = useState(null);
//   const [postSlice, setPostSlice] = useState(null);
//   useEffect(() => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=b97ee4b164b607d5e4e00130b6fb4e67&language=en-US&page=1"
//     )
//       .then((data) => data.json())
//       .then((post) => {
//         setPost(post);
//         const temp = post.results.slice(0, 8);
//         setPostSlice(temp);
//       });
//   }, []);
//   console.log(post);
//   return (
//     <Row gutter={(16, 16)}>
//       {postSlice ? (
//         postSlice.map((film) => (
//           <Col md={6}>
//             <Card
//               hoverable
//               style={{ width: 240 }}
//               cover={
//                 <img
//                   alt="example"
//                   https:src={ //api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US
//                   `https://image.tmdb.org/t/p/w500/${film.poster_path}`}
//                 />
//               }
//             >
//               <Progress
//                 width="100"
//                 className="progres"
//                 type="circle"
//                 percent={film.vote_average * 10}
//               />
//               <Meta title={`${film.title}`} description={film.release_date} />
//             </Card>
//           </Col>
//         ))
//       ) : (
//         <div className="load-spin" width={"100%"}>
//
//         </div>
//       )}
//     </Row>
//   );
// }
export default function Home() {
  return <PopMovieSlider />;
}

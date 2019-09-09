import React from "react";

import { Container, Repository, Image, Logo } from "./styles";

const Streams = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.stream._id}>
        <div className="card text-white bg-dark mb-3">
          <div className="card-header">
            <a href={repository.stream.channel.url} target="blank">
              <Image
                src={repository.stream.preview.large}
                style={{ height: "20vh" }}
                alt=""
              />
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <h4>
                <Logo src={repository.stream.channel.logo} alt="" />{" "}
                {repository.stream.channel.display_name}
                {" está"}{" "}
                <span className="text-danger">
                  {repository.stream.stream_type}
                </span>
              </h4>
              Playing:{" "}
              <span className="text-success">{repository.stream.game}</span>
            </h5>
            <ul className="card-text bg-dark">
              <li className="bg-dark">
                {repository.stream.viewers}
                <span className="text-danger"> Viewers</span>
              </li>
              <li className="bg-dark">
                {repository.stream.channel.followers}
                <span className="text-danger"> Followers</span>
              </li>
              <li className="bg-dark">
                {repository.stream.channel.views}
                <span className="text-danger"> Total Views</span>
              </li>
            </ul>
          </div>
        </div>
      </Repository>
    ))}
  </Container>
);

export default Streams;

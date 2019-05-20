import React from "react";

import { Container, Repository, Image, Logo } from "./styles";

const Streams = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={"ckcemgtexvmey8lru22xg321bm861r"}>
        {/* <header>
          <img src={repository.stream.preview.large} alt="" />
          <strong>
            {repository.stream.channel.display_name} is{" "}
            {repository.stream.stream_type}
          </strong>
          <small>
            Playing:
            <span> {repository.stream.game}</span>
          </small>
        </header>
        <ul>
          <li>
            {repository.stream.viewers} <small>Viewers</small>
          </li>
          <li>
            {repository.stream.channel.followers} <small>Followers</small>
          </li>
          <li>
            {repository.stream.channel.views} <small>Total Views</small>
          </li>
        </ul> */}
        <div className="card text-white bg-dark mb-3">
          <div className="card-header">
            <a href={repository.stream.channel.url} target="blank">
              <Image src={repository.stream.preview.large} alt="" />
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

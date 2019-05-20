import React, { Component } from "react";
/* import logo from "../../assets/logo.png"; */
import { Ola, CaixaInput, Botao, Formulario } from "./styles";
import Streams from "../../components/Streams";
import api from "../../services/api";

// import { Container } from './styles';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryInput: "",
    repositories: []
  };

  handleNull = async e => {};

  handleAddRepository = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const response = await api.get(
        `/kraken/streams/${
          this.state.repositoryInput
        }?client_id=ckcemgtexvmey8lru22xg321bm861r`
      );

      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, response.data]
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      /*       <Container>
        <Image>
          <Logo src={logo} alt="Logo twitch" />
        </Image>

        <Form onSubmit={this.handleAddRepository}>
          <Search>Procure seu Streamer favorito</Search>
          <CaixaInp
            type="text"
            required={true}
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <Btn type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              "Procurar"
            )}
          </Btn>
        </Form>

        <Streams repositories={this.state.repositories} />
      </Container> */
      <Ola>
        <Formulario onSubmit={this.handleAddRepository}>
          <div className="form-group">
            <CaixaInput
              type="text"
              required={true}
              value={this.state.repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
          </div>
          <Botao type="submit" className="btn btn-primary">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              "Procurar"
            )}
          </Botao>
        </Formulario>
        <Streams repositories={this.state.repositories} />
      </Ola>
    );
  }
}

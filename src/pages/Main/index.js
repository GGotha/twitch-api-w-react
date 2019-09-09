import React, { Component } from "react";
/* import logo from "../../assets/logo.png"; */
import { Ola, CaixaInput, Botao, Formulario } from "./styles";
import Streams from "../../components/Streams";
import api from "../../services/api";
import { Card } from "react-bootstrap";

// import { Container } from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      repositoryInput: "",
      repositories: [],
      alert: false,
      show: false
    };
  }

  handleAddRepository = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const response = await api.get(
        `/kraken/streams/${this.state.repositoryInput}?client_id=ckcemgtexvmey8lru22xg321bm861r`
      );

      if (response.data.stream === null || undefined) {
        this.setState({ alert: true });
      } else {
        this.setState({ alert: false });

        this.setState({
          repositoryInput: "",
          repositories: [...this.state.repositories, response.data]
        });
      }
    } catch (err) {
      console.log("erro");
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
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
        <label>
          {this.state.alert === true ? (
            <>
              <Card style={{ marginTop: "10px" }}>
                <Card.Body>
                  A stream que você procurou está offline ou não existe
                </Card.Body>
              </Card>
            </>
          ) : (
            ""
          )}
        </label>
      </Ola>
    );
  }
}

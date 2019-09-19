import React, { Component } from "react";
import api from "./services/api";
import InputCustomizado from "./components/InputCustomizado";
import PubSub from "pubsub-js";

class FormularioAutor extends Component {
  constructor() {
    super();
    this.state = { nome: "", email: "", senha: "" };
    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

  enviaForm(evento) {
    evento.preventDefault();
    api
      .post("/autores")
      .then(response =>
        PubSub.publish("atualiza-listagem-autores", response.data)
      );
  }

  setNome(evento) {
    this.setState({ nome: evento.target.value });
  }

  setEmail(evento) {
    this.setState({ email: evento.target.value });
  }

  setSenha(evento) {
    this.setState({ senha: evento.target.value });
  }

  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <form
          className="pure-form pure-form-aligned"
          onSubmit={this.enviaForm.bind(this)}
          method="post"
        >
          <InputCustomizado
            label="Nome"
            id="nome"
            type="text"
            name="nome"
            value={this.state.name}
            onChange={this.setNome}
          />

          <InputCustomizado
            label="E-mail"
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.setEmail}
          />

          <InputCustomizado
            label="Senha"
            id="senha"
            type="password"
            name="senha"
            value={this.state.senha}
            onChange={this.setSenha}
          />

          <div className="pure-control-group">
            <label></label>
            <button type="submit" className="pure-button pure-button-primary">
              Gravar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

class TabelaAutores extends Component {
  render() {
    return (
      <div>
        <table className="pure-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.lista.map(function(autor) {
              return (
                <tr key={autor.id}>
                  <td>{autor.nome}</td>
                  <td>{autor.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default class AutorBox extends Component {
  constructor() {
    super();
    this.state = { lista: [] };
  }

  componentDidMount() {
    api
      .get("/autores")
      .then(response => this.setState({ lista: response.data }));

    PubSub.subscribe("atualiza-lista-autores", function(topico, novaLista) {
      this.setState({ lista: novaLista });
    });
  }

  render() {
    return (
      <div>
        <FormularioAutor />
        <TabelaAutores lista={this.state.lista} />
      </div>
    );
  }
}

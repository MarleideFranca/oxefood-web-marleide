import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import InputMask from "react-input-mask"
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function FormCategoriaProduto() {
  const { state } = useLocation();
  const [idCategoriaProduto, setIdCategoriaProduto] = useState();
  const [listaCategoria, setListaCategoria] = useState([]);
  const [idCategoria, setIdCategoria] = useState();

  const [descricao, setDescricao] = useState();


  useEffect(() => {
    if (state != null && state.id != null) {
      axios
        .get("http://localhost:8080/api/categoriaProduto/" + state.id)
        .then((response) => {
          setIdCategoriaProduto(response.data.id);
          setDescricao(response.data.descricao);
         
        });
    }

    axios.get("http://localhost:8080/api/categoriaProduto").then((response) => {
      const dropDownCategorias = response.data.map((c) => ({
        text: c.descricao,
        value: c.id,
      }));
      setListaCategoria(dropDownCategorias);
    });
  }, [state]);

  function salvar() {
    let categoriaProdutoRequest = {
      idCategoria: idCategoria,
      descricao: descricao,
    
    };

    if (idCategoriaProduto != null) {
      //Alteração:
      axios
        .put("http://localhost:8080/api/categoriaProduto/" + idCategoriaProduto, categoriaProdutoRequest)
        .then((response) => {
          console.log(" Categoria de Produto alterado com sucesso.");
        })
        .catch((error) => {
          console.log("Erro ao alterar uma categoria de produto.");
        });
    } else {
      //Cadastro:
      axios
        .post("http://localhost:8080/api/categoriaProduto", categoriaProdutoRequest)
        .then((response) => {
          console.log("Categoria de Produto cadastrado com sucesso.");
        })
        .catch((error) => {
          console.log("Erro ao incluir a categoria de produto.");
        });
    }
  }

  return (
    <div>
      <MenuSistema tela={"categoriaProduto"} />
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          {idCategoriaProduto === undefined && (
            <h2>
              {" "}
              <span style={{ color: "darkgray" }}>
                {" "}
                CategoriaProduto &nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>{" "}
              Cadastro
            </h2>
          )}
          {idCategoriaProduto != undefined && (
            <h2>
              {" "}
              <span style={{ color: "darkgray" }}>
                {" "}
                CategoriaProduto &nbsp;
                <Icon name="angle double right" size="small" />{" "}
              </span>{" "}
              Alteração
            </h2>
          )}

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>             
              <Form.Select
                required
                fluid
                tabIndex="3"
                placeholder="Selecione"
                label="Categoria"
                options={listaCategoria}
                value={idCategoria}
                onChange={(e, { value }) => {
                  setIdCategoria(value);
                }}
              />

              <Form.TextArea
                fluid
                label="Descrição"
                placeholder="Informe a descrição do produto"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />

            </Form>

            <div style={{ marginTop: "4%" }}>
              <Button
                type="button"
                inverted
                circular
                icon
                labelPosition="left"
                color="orange"
              >
                <Icon name="reply" />
                <Link to={"/list-categoriaProduto"}>Voltar</Link>
              </Button>

              <Button
                inverted
                circular
                icon
                labelPosition="left"
                color="blue"
                floated="right"
                onClick={() => salvar()}
              >
                <Icon name="save" />
                Salvar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

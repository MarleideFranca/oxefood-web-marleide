import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function MenuSistema(props) {
  return (
    <>
      <Menu inverted>
        <Menu.Item
          name="home"
          active={props.tela === "home"}
          as={Link}
          to="/"
        />

        <Menu.Item
          name="cliente"
          active={props.tela === "cliente"}
          as={Link}
          to="/list-cliente"
        />
        <Menu.Item
          name="produto"
          active={props.tela === "produto"}
          as={Link}
          to="/list-produto"
        />
         <Menu.Item
          name="categoriaProduto"
          active={props.tela === "categoriaProduto"}
          as={Link}
          //to='/form-categoriaProduto'
          to="/list-categoriaProduto"
        />

        <Menu.Item
          name="entregador"
          active={props.tela === "entregador"}
          as={Link}
          //to='/form-entregador'
          to="/list-entregador"
        />
        <Menu.Item
          name="promocao"
          active={props.tela === "promocao"}
          as={Link}
          //to='/form-entregador'
          to="/list-promocao"
        />
        
      </Menu>
    </>
  );
}

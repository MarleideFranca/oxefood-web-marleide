import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, FormTextArea, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto() {

    const [titulo, setTitulo] = useState();
    const [codigoDoProduto, setCodigoDoProduto] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoDeEntregaMinimo, setTempoDeEntregaMinimo] = useState();
    const [tempoDeEntregaMaximoEmMinutos, setTempoDeEntregaMaximoEmMinutos] = useState();

    
    function salvar() {

        let produtoRequest = {
            titulo: titulo,
            codigoDoProduto: codigoDoProduto,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoDeEntregaMinimo: tempoDeEntregaMinimo,
            tempoDeEntregaMaximoEmMinutos:tempoDeEntregaMaximoEmMinutos
        }


        axios.post("http://localhost:8080/api/produto", produtoRequest)
		.then((response) => {
		     console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um produto.')
		})
	}


    return (

        <div>
            <MenuSistema tela={'Produto'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                >
                                    <InputMask
                                        placeholder="Informe o título do produto" />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'>

                                    <InputMask
                                        placeholder="Informe o código do produto"
                                        value={codigoDoProduto}
                                        onChange={e => setCodigoDoProduto(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths="equal">

                                <FormTextArea
                                    label='Descrição'
                                    placeholder='Informe a descrição do produto'
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                >
                                </FormTextArea>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    required
                                    label='Valor Unitário'
                                    width={6}
                                    value={valorUnitario}
                                    onChange={e => setValorUnitario(e.target.value)}
                                >

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega'
                                    width={6}>
                                    <InputMask
                                        placeholder="30"
                                        value={tempoDeEntregaMinimo}
                                        onChange={e => setTempoDeEntregaMinimo(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={8}
                                    value={tempoDeEntregaMaximoEmMinutos}
                                    onChange={e => setTempoDeEntregaMaximoEmMinutos(e.target.value)}
                                >
                                    <InputMask
                                        placeholder="40"
                                    />
                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { Link, useLocation } from "react-router-dom";

export default function FormPromocao() {

    const { state } = useLocation();
    const [idCliente, setIdCliente] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8080/ api/promocao/" + state.id)
                .then((response) => {
                    setIdPromocao(response.data.id)
                    setTitulo(response.data.titulo)
                    setRegra(response.data.regra)
                    setValorDesconto(response.data.valorDesconto)
                    setDataInicio(response.data.dataInicio)
                    setDataFim(response.data.dataFim)

                    const [titulo, setTitulo] = useState();
                    const [regra, setRegra] = useState();
                    const [valorDesconto, setValorDesconto] = useState();
                    const [dataInicio, setDataInicio] = useState();
                    const [fonedataFim, setDataFim] = useState();

                    function salvar() {

                        let clienteRequest = {
                            titulo: titulo,
                            regra: regra,
                            valorDesconto: valorDesconto,
                            dataInicio: dataInicio,
                            dataFim: dataFim
                        }

                        axios.post("http://localhost:8080/api/promocao", promocaoRequest)
                            .then((response) => {
                                console.log('Promoção cadastrada com sucesso.')
                            })
                            .catch((error) => {
                                console.log('Erro ao incluir o uma promoção.')
                            })
                    }




                    return (

                        <div>
                            <MenuSistema tela={'Promoção'} />

                            <div style={{ marginTop: '3%' }}>

                                <Container textAlign='justified' >

                                    <h2> <span style={{ color: 'darkgray' }}> Promoção &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

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

                                                />

                                                <Form.Input
                                                    //required
                                                    fluid
                                                    label='Regra'>
                                                    <InputMask
                                                        required
                                                        mask="999.999.999-99"
                                                        value={regra}
                                                        onChange={e => setRegra(e.target.value)}
                                                    />
                                                </Form.Input>

                                            </Form.Group>

                                            <Form.Group>

                                                <Form.Input
                                                    fluid
                                                    label='Valor Desconto (R$)'
                                                    width={6}>
                                                    <InputMask
                                                        mask="(99) 9999.9999"
                                                        value={valorDesconto}
                                                        onChange={e => setValorDesconto(e.target.value)}
                                                    />
                                                </Form.Input>

                                                <Form.Input
                                                    required
                                                    fluid
                                                    label='A partir de'
                                                    width={6}>
                                                    <InputMask
                                                        mask="(99) 9999.9999"
                                                        value={dataInicio}
                                                        onChange={e => setDataInicio(e.target.value)}
                                                    />
                                                </Form.Input>

                                                <Form.Input
                                                    required
                                                    fluid
                                                    label='Terminado em'
                                                    width={6}
                                                >
                                                    <InputMask
                                                        mask="99/99/9999"
                                                        maskChar={null}
                                                        placeholder="Ex: 20/03/1985"
                                                        value={dataFim}
                                                        onChange={e => setDataFim(e.target.value)}
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
                                                <Link to={'/list-promocao'}>Voltar</Link>

                                            </Button>

                                            <Button
                                                inverted
                                                circular
                                                icon
                                                labelPosition='left'
                                                color='blue'
                                                floated='right'
                                                onClick={() => salvar()}
                                            >
                                                <Icon name='save' />
                                                Salvar
                                            </Button>

                                        </div>

                                    </div>

                                </Container>
                            </div>
                        </div>

                    );

                }

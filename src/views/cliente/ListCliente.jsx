<Button
    inverted
    circular
    color='red'
    title='Clique aqui para remover este cliente'
    icon
    onClick={e => confirmaRemover(cliente.id)}>
    <Icon name='trash' />
</Button>

export default function ListCliente() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [idRemover, setIdRemover] = useState();

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }
    <Modal
        basic
        onClose={() => setOpenModal(false)}
        onOpen={() => setOpenModal(true)}
        open={openModal}
    >
        <Header icon>
            <Icon name='trash' />
            <div style={{ marginTop: '5%' }}> Tem certeza que deseja remover esse registro? </div>
        </Header>
        <Modal.Actions>
            <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                <Icon name='remove' /> Não
            </Button>
            <Button color='green' inverted onClick={() => remover()}>
                <Icon name='checkmark' /> Sim
            </Button>
        </Modal.Actions>
    </Modal>

    async function remover() {

        await axios.delete('http://localhost:8080/api/cliente/' + idRemover)
            .then((response) => {

                console.log('Cliente removido com sucesso.')

                axios.get("http://localhost:8080/api/cliente")
                    .then((response) => {
                        setLista(response.data)
                    })
            })
            .catch((error) => {
                console.log('Erro ao remover um cliente.')
            })
        setOpenModal(false)
    }
}

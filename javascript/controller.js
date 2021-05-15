class UserController {
  PegaPessoa() {
    const model = new UserModel(); //criando uma nova instância da UserModel;
    model.FazerRequisicao(); //chamando o método FazerRequisicao
    const view = new UserView();
    view.MostraNaTela(model);
  }
}

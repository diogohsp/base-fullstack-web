import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Sign-Up");
  }

  async getHtml() {
    return `
        <h1>Cadastre-se</h1>
        <button class="btn btn-primary" type="button">teste</button>
        `;
  }
}

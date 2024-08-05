import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Sign-Up");
  }

  async getHtml() {
    return `
        <h1>Cadastre-se</h1>
        `;
  }
}

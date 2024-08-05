import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Page Not Found");
  }

  async getHtml() {
    return `
    <h1>Opss...</h1>
    <h2>Pagina não encontrada!</h2>
    `;
  }
}

import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
        <h1>Bem vindo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas modi repellendus et laborum repudiandae sequi ad vero temporibus? Quasi magni maxime molestias numquam, explicabo cupiditate alias asperiores vel provident.</p>
        <p>
            <a href="/sign-up" data-link>Cadastra-se</a>
        </p>
        `;
  }
}

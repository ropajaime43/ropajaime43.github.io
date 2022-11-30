class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2022
        Robles Cuenca Jaime.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);

import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2.2.1/core/lit-core.min.js';

export class MyElement extends LitElement {
  
    static properties = {
        actors: [],
        inputText: ''
    };

    constructor() {
        super();
        this.actors = [
   {id:0, name: 'Bryan Cranston', books: 2, starred: true},
   {id:1, name: 'Aaron Paul', books: 62, starred: true},
   {id:2, name: 'Bob Odenkirk', books: 0, starred: false}
   ];
      this.inputText = ''
      }

//     getIcon(actor) {
//       if (actor.starred) return 'star'
//       return 'star_border'
//     }
    
    toggleStar(updatedItem) {
      this.actors = this.actors.map( (actor) => {
        if (actor.id === updatedItem.id) {
          actor.starred = !actor.starred
        }
        return actor
      })
    }

    addItem() {
      if (this.inputText) {
        this.actors = [...this.actors, {id: this.actors.length + 1, name: this.inputText, stared: false, books: 0}];
        this.inputText = ''
      }
      
    }

    onChangeInputText(e) {
      this.inputText = e.currentTarget.value
    }


    render() {
      return html`
        <div class="container"> 
            <ul class="demo-list-two mdl-list">
                ${this.actors.map((actor) =>
                html`<li class="mdl-list__item mdl-list__item--two-line">
                            <span class="mdl-list__item-primary-content">
                                <i class="material-icons mdl-list__item-avatar">person</i>
                                <span>${actor.name}</span>
                                <span class="mdl-list__item-sub-title">${actor.books}</span>
                            </span>
                            <span class="mdl-list__item-secondary-content">
                                <a @click=${() => this.toggleStar(actor)} class="mdl-list__item-secondary-action" href="#"><i class="material-icons">${actor.starred ? 'star' : 'star_border'}</i></a>
                            </span>
                        </li>`
                )}
            </ul>
            <div class="mdl-card__actions">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input @change=${this.onChangeInputText} class="mdl-textfield__input" type="text" id="sample3" value=${this.inputText}>
                    <label class="mdl-textfield__label" for="sample3">Name</label>
                </div>    
                <button @click=${() => this.addItem('')} class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                    <i class="material-icons">add</i>
                </button>
                <ul>
            </div>
        </div>
      `;
    }


    createRenderRoot() {
      //  Don't use shadow dom
      return this;
    }
}

customElements.define('my-element', MyElement);
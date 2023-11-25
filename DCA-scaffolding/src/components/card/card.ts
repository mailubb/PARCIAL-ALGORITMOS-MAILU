export enum Attributes{
    "nombre" = "nombre",
    "color"= "color",
    "letra" = "letra"
}

class Card extends HTMLElement{
    nombre?: string
    color?: string
    letra?: string


    static get observedAttributes(){
        const attrs: Record<Attributes,null> ={
            nombre: null,
            color: null,
            letra: null
        }
        return Object.keys(attrs)
    }

    attributeChangedCallback(propName:Attributes, oldValue: string | undefined, newValue: string | undefined){
        switch(propName) {
                default:
                this[propName] = newValue
                    break;
            }
            
        this.render()
    }
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
}

render(){
    if (this.shadowRoot){
        this.shadowRoot.innerHTML = `
        
        <div>
        <h2>${this.nombre}</h2>
        <img src="${this.color}" alt="">
        <p>${this.letra}</p>
        </div>
        `
    }
}
}

customElements.define("my-card", Card)
export default Card
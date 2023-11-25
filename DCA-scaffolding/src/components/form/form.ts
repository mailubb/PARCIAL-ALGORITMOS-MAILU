import firebase, { addUsuario } from "../../utils/firebase"

export const forms = {
    nombre: "",
    color:"",
    letra: ""
}

class Form extends HTMLElement{
    constructor(){
       super()
       this.attachShadow({mode:"open"})
    }

    connectedCallback(){
    this.render()
    }

    changeTitulo(e:any){
        forms.nombre = e.target.value
    }

    changeImage(e:any){
        forms.color = e.target.value
    }

    changeLetra(e:any){
        forms.letra = e.target.value
    }

    addData(){
        firebase.addUsuario(forms);
    }


render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML = ``

         const ChangeT = this.ownerDocument.createElement("input")
         ChangeT.placeholder = "Ingresa tu nombre"
        ChangeT.addEventListener("change", this.changeTitulo);
         this.shadowRoot?.appendChild(ChangeT)

         const ChangeD = this.ownerDocument.createElement("input")
         ChangeD.placeholder = "Ingresa el color"
        ChangeD.addEventListener("change", this.changeImage);
         this.shadowRoot?.appendChild(ChangeD)

         const ChangeV = this.ownerDocument.createElement("input")
         ChangeV.placeholder = "Ingresa link de la letra"
        ChangeV.addEventListener("change", this. changeLetra);
         this.shadowRoot?.appendChild(ChangeV)

         const Button = this.ownerDocument.createElement("button")
         Button.innerText = "Continuar"
        Button.addEventListener("click", this.addData);
         this.shadowRoot?.appendChild(Button)
     }
}

}


customElements.define("my-form",Form)
export default Form
class MensagemView{

    private _elemento: Element;

    constructor(seletor:string){
        this._elemento = document.querySelector(seletor);
    }

    template(model:string){
        return `
            <p class="alert alert-info">${model}</p>
        `        
    }

    update(model:string){
        this._elemento.innerHTML = this.template(model);
    }



}
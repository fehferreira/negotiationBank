class MensagemView extends View{

    template(model:string){
        return `
            <p class="alert alert-info">${model}</p>
        `        
    }

    update(model:string){
        this._elemento.innerHTML = this.template(model);
    }



}
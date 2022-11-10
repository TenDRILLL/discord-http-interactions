export class Modal {
    title: string;
    customID: string;
    components: Array<ActionRow>;

    constructor(){}

    setTitle(title){
        this.title = title;
    }

    setCustomID(id){
        this.customID = id;
    }

    setComponents(arr){
        this.components = arr;
    }

}

class ActionRow {
    type: number;
    components: Array<ModalComponent>;
}

class ModalComponent {
    type: number;
    customID: string;
    label: string;
    style: number;
    minLength: number | null;
    maxLength: number | null;
    placeholder: string | null;
    required: boolean | null;
}
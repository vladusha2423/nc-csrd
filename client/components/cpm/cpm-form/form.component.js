import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./form.template.js";

export default class CpmForm extends Component {
    constructor() {
        super({
            store
        });
        this.props.store.events.subscribe('addCpmTicket', this.reload.bind(this));
        this.methods = {
            addCpmTicket: function(){
                let input1 = document.querySelector('input[name=dateOfCreation]').value;
                let input2 = document.querySelector('input[name=type]').value;
                let input3 = document.querySelector('input[name=status]').value;
                let input4 = document.querySelector('input[name=closingDate]').value;
                let ticket = {
                    dateOfCreation: input1,
                    type: input2,
                    status: input3,
                    closingDate: input4,
                }
                store.dispatch('addCpmTicket', ticket);
                return false;
            },
        }
    }

    render() {
        return this.compile(template.call(this));
    }
}

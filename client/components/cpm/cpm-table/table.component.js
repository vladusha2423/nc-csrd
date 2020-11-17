import Component from '../../../modules/component/component.js';
import store from '../../../store/index.js';
import {template} from "./table.template.js";

export default class CpmTable extends Component {
    constructor() {
        super({
            store
        });
        store.events.subscribe('addCpmTicket', this.reload());
    }

    render() {
        return this.compile(template.call(this));
    }
}

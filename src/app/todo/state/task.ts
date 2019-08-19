import { uniqueId } from 'lodash';

export class Task {
    name = '';
    dueDate?: Date;
    done = false;
    id: string;

    constructor(init?: Partial<Task>) {
        Object.assign(this, {...init});
        this.id = uniqueId();
    }
}

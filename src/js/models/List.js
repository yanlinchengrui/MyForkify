import uniqid from 'uniqid';

export default class List {

    constructor(){
        this.items = [];
    }

    addItem(count, unit, ingred){
        const item = {
            id: uniqid(),
            count,
            unit,
            ingred
        }
        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const i = this.items.findIndex(e => e.id === id);
        this.items.splice(i, 1);
        console.log(i);
    }

    updateCount(id, newCount){
        this.items.find(e => e.id ===id).count = newCount;
    }
    
}
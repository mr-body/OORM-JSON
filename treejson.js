const fs = require('fs');
const path = require('path');

class TreeDatabase {
    constructor(filename) {
        this.filename = path.join(__dirname, filename);
        this.load();
    }

    load() {
        if (fs.existsSync(this.filename)) {
            const data = fs.readFileSync(this.filename);
            this.data = JSON.parse(data);
        } else {
            this.data = {};
        }
    }

    save() {
        fs.writeFileSync(this.filename, JSON.stringify(this.data, null, 2));
    }

    ref(path) {
        const keys = path.split('/');
        let current = this.data;

        keys.forEach(key => {
            if (!current[key]) {
                current[key] = []; // Use array for dynamic keys
            }
            current = current[key];
        });

        return new TreeRef(current, this.save.bind(this));
    }
}

class TreeRef {
    constructor(ref, save) {
        this.ref = ref;
        this.save = save;
    }

    insert(item) {
        const id = Math.random().toString(36).substr(2, 9); // Gera um ID único
        item.id = id; // Adiciona o ID ao item
        this.ref.push(item);
        this.save();
    }

    getById(id) {
        return this.ref.find(item => item.id === id); // Busca item pelo ID
    }

    getAll() {
        return this.ref;
    }

    delete(id) {
        const index = this.ref.findIndex(item => item.id === id);
        if (index !== -1) {
            this.ref.splice(index, 1);
            this.save();
        }
    }

    deleteAll() {
        this.ref.length = 0;
        this.save();
    }

    update(id, newData) {
        const index = this.ref.findIndex(item => item.id === id);
        if (index !== -1) {
            Object.assign(this.ref[index], newData);
            this.save();
        }
    }
}

module.exports = (filename) => new TreeDatabase(filename);

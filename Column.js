export default class Column {
    constructor(id, title) {
        this.element = {};
        this.element.root = Column.createRoot();
        this.element.title = this.element.root.querySelector(".kanban__column-title");
        this.element.item = this.element.root.querySelector(".kanban__column-item");
        this.element.addItem = this.element.root.querySelector(".kanban__add-item");
    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="kanban__column">
                <div class="kanban__column-title"></div>
                <div class="kanban__column-items"></div></div>
                <button class="kanban__add-item" type="button">+ Add</button>
            </div>
        `).childNodes[0];
    }
}
import { Component } from '@angular/core';
import { CategoryI } from '../../interfaces/category.inteface';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
    categoryDialog: boolean = false;

    deleteCategoryDialog: boolean = false;

    deleteCategoriesDialog: boolean = false;

    categories: CategoryI[] = [];

    category: CategoryI = {};

    selectedCategories: CategoryI[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.cols = [
            { field: 'category', header: 'CategoryI' },
            { field: 'price', header: 'Price' },
        ];
    }

    openNew() {
        this.category = {};
        this.submitted = false;
        this.categoryDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteCategoriesDialog = true;
    }

    editProduct(category: CategoryI) {
        this.category = { ...category };
        this.categoryDialog = true;
    }

    deleteProduct(category: CategoryI) {
        this.deleteCategoryDialog = true;
        this.category = { ...category };
    }

    confirmDeleteSelected() {
        this.deleteCategoriesDialog = false;
        this.categories = this.categories.filter(
            (val) => !this.selectedCategories.includes(val)
        );
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Products Deleted',
            life: 3000,
        });
        this.selectedCategories = [];
    }

    confirmDelete() {
        this.deleteCategoryDialog = false;
        this.categories = this.categories.filter(
            (val) => val.id !== this.category.id
        );
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'CategoryI Deleted',
            life: 3000,
        });
        this.category = {};
    }

    hideDialog() {
        this.categoryDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        // if (this.category.name?.trim()) {
        //     if (this.category.id) {
        //         // @ts-ignore
        //         this.category.inventoryStatus = this.category.inventoryStatus
        //             .value
        //             ? this.category.inventoryStatus.value
        //             : this.category.inventoryStatus;
        //         this.categories[this.findIndexById(this.category.id)] =
        //             this.category;
        //         this.messageService.add({
        //             severity: 'success',
        //             summary: 'Successful',
        //             detail: 'CategoryI Updated',
        //             life: 3000,
        //         });
        //     } else {
        //         this.category.id = this.createId();
        //         this.category.code = this.createId();
        //         this.category.image = 'category-placeholder.svg';
        //         // @ts-ignore
        //         this.category.inventoryStatus = this.category.inventoryStatus
        //             ? this.category.inventoryStatus.value
        //             : 'INSTOCK';
        //         this.categories.push(this.category);
        //         this.messageService.add({
        //             severity: 'success',
        //             summary: 'Successful',
        //             detail: 'CategoryI Created',
        //             life: 3000,
        //         });
        //     }

        //     this.categories = [...this.categories];
        //     this.categoryDialog = false;
        //     this.category = {};
        // }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app.layout.component';

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'categories',
                loadChildren: () =>
                    import('../../pages/categories/categories.module').then(
                        (m) => m.CategoriesModule
                    ),
            },
            {
                path: 'products',
                loadChildren: () =>
                    import('../../pages/products/products.module').then(
                        (m) => m.ProductsModule
                    ),
            },
            {
                path: 'tables',
                loadChildren: () =>
                    import('../../pages/tables/tables.module').then(
                        (m) => m.TablesModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppLayoutRoutingModule {}

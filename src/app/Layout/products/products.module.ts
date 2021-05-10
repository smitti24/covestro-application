import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsResolverService } from './products-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    resolve: [ProductsResolverService],
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [ProductsResolverService],
})
export class ProductsModule {}

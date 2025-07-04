import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , FormsModule , RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  todayDate = new Date();
  personWeight = 100.5 ;

  mainThemeColor:string = "Green"

  isLoggedIn:boolean = true;

  classPageTitle: string = "text-center";

  stylePageTitle = {
    'color' : 'red',
    'margin' : '20px',
  }

  products: Product[] ;

  constructor(private productService: ProductsService) {
    this.products = productService.getAllProducts();
  }
}

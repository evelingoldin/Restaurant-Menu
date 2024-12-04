import { Injectable } from '@nestjs/common';
import { menuData } from './menu-data';
import { Category, MenuItem } from './menu.types';

@Injectable()
export class MenuService {
  // Get all categories
  getCategories(): Category[] {
    return menuData;
  }

  // Get menu items by category name
  getMenuItems(categoryName: string): MenuItem[] {
    const category = menuData.find((cat) => cat.name === categoryName);
    return category ? category.items : [];
  }
}

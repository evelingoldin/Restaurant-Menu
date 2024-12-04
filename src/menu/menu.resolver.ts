import { Query, Resolver, Args } from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { Category, MenuItem } from './menu.types';

@Resolver()
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}

  @Query(() => [Category])
  getCategories(): Category[] {
    return this.menuService.getCategories(); 
  }

  @Query(() => [MenuItem])
  getMenuItems(@Args('categoryName') categoryName: string): MenuItem[] {
    return this.menuService.getMenuItems(categoryName); 
  }
}

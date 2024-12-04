import { Test, TestingModule } from '@nestjs/testing';
import { MenuResolver } from './menu.resolver';
import { MenuService } from './menu.service';
import { menuData } from './menu-data';

describe('MenuResolver', () => {
  let resolver: MenuResolver;
  let service: MenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuResolver, MenuService],
    }).compile();

    resolver = module.get<MenuResolver>(MenuResolver);
    service = module.get<MenuService>(MenuService);
  });

  it('should return all categories', () => {
    const result = resolver.getCategories();
    expect(result).toEqual(menuData); 
  });

  it('should return menu items for a valid category', () => {
    const result = resolver.getMenuItems('Appetizers');
    expect(result).toEqual(menuData[0].items); 
  });

  it('should return an empty array for an invalid category', () => {
    const result = resolver.getMenuItems('NonExistentCategory');
    expect(result).toEqual([]);
  });
});

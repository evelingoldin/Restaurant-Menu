import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module'; 

describe('GraphQL API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // Create and initialize the NestJS application
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should fetch all categories', async () => {
    const response = await request(app.getHttpServer())
      .post('/graphql') 
      .send({
        query: `
          query {
            getCategories {
              name
              items {
                name
                price
              }
            }
          }
        `,
      });

    // Validate the response
    expect(response.status).toBe(200);
    expect(response.body.data.getCategories).toBeDefined();
    expect(response.body.data.getCategories.length).toBeGreaterThan(0);
  });

  it('should fetch menu items for a valid category', async () => {
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          query {
            getMenuItems(categoryName: "Appetizers") {
              name
              price
            }
          }
        `,
      });

    // Validate the response
    expect(response.status).toBe(200);
    expect(response.body.data.getMenuItems).toBeDefined();
    expect(response.body.data.getMenuItems.length).toBeGreaterThan(0);
  });

  afterAll(async () => {
    // Clean up the application after tests
    await app.close();
  });
});

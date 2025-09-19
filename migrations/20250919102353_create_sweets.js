export async function up(knex) {
  return knex.schema.createTable("sweets", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("category_id").unsigned().references("id").inTable("categories").onDelete("CASCADE");
    table.decimal("price", 10, 2).notNullable();
    table.integer("quantity").defaultTo(0);
  });
}

export async function down(knex) {
  return knex.schema.dropTable("sweets");
}

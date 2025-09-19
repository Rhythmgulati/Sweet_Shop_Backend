export async function up(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("username").notNullable().unique();
    table.string("password").notNullable();
    table.boolean("is_admin").defaultTo(false); // 0 = normal user, 1 = admin
  });
}

export async function down(knex) {
  return knex.schema.dropTable("users");
}

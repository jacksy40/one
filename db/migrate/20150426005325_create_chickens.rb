class CreateChickens < ActiveRecord::Migration
  def change
    create_table :chickens do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :picture
      t.float :price, null: false

      t.timestamps null: false
    end
  end
end

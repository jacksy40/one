class CreateDrinks < ActiveRecord::Migration
  def change
    create_table :drinks do |t|
      t.string :name, null: false
      t.string :description
      t.string :picture
      t.float :price, null: false

      t.timestamps null: false
    end
  end
end

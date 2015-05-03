class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :comments
      t.string :status, default: "false"

      t.timestamps null: false
    end
  end
end

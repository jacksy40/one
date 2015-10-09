class AddColumnMenu < ActiveRecord::Migration
 def change
    add_column :menus, :spicy, :string, default: "false"
  end
end

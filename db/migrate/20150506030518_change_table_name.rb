class ChangeTableName < ActiveRecord::Migration
  def up
    rename_table :Menus, :menus
  end

   def down
    rename_table :menus, :Menus
  end

end

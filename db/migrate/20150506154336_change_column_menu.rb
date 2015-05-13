class ChangeColumnMenu < ActiveRecord::Migration
  def up
    rename_column :menus, :section_id, :section
  end

  def down
    rename_column :menus, :section, :section_id
  end
end

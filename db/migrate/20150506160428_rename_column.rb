class RenameColumn < ActiveRecord::Migration
  def up
    rename_column :menus, :section, :section_name
    rename_column :sections, :section, :section_name
  end

  def down
    rename_column :menus, :section_name, :section
    rename_column :sections, :section_name, :section
  end
end

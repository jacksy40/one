class ChangeColumnName < ActiveRecord::Migration
  def change
    change_column :menus, :section, :string, null: false
  end
end

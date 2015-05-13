class Section < ActiveRecord::Base

  has_many :menus

  validates :section_name, null: false

end

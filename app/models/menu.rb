class Menu < ActiveRecord::Base

  belongs_to :section

  mount_uploader :picture, PhotoUploader

  validates :name, presence: true
  validates :description, presence: true
  validates :price, null: false
  validates :section_name, presence: true


end

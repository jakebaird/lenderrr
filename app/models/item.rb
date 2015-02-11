class Item < ActiveRecord::Base
  belongs_to :user
  belongs_to :item
  has_many :items
end

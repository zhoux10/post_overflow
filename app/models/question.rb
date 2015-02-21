class Question < ActiveRecord::Base
  belongs_to :category
  has_many :replies
end
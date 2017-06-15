class Model < ActiveRecord::Base
	has_many :cabs
	belongs_to :make
end

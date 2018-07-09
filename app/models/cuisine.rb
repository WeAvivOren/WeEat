class Cuisine < ApplicationRecord
  validates_presence_of :name # Validates that the specified attributes are not blank

end

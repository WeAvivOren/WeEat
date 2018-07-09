class Restaurant < ApplicationRecord

  validates_presence_of :name, :address, :max_delivery_time_minutes # Validates that the specified attributes are not blank
  validates_inclusion_of :accepts_10bis, in: [true, false] #

end

json.extract! restaurant, :id, :name, :cuisine_id, :rating, :accepts_10bis, :address, :max_delivery_time_minutes, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)

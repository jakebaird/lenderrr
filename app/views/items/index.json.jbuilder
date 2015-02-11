json.array!(@items) do |item|
  json.extract! item, :id, :name, :location, :price, :description, :terms_and_conditions, :user_id, :item_id
  json.url item_url(item, format: :json)
end

Rails.application.routes.draw do
  resources :restaurants do
    resources :reviews
  end
  resources :cuisines
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

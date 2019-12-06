Rails.application.routes.draw do
  resources :scores
  resources :tiles
  resources :levels
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post "/scores/", to: "scores#new"
  # delete "/scores/:id", to: "scores/:id"

end

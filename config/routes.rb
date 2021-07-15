Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resources :cart_items, only: [:create, :update, :destroy, :index]
    resources :products, only: [:index, :show] do
      resources :reviews, only: [:create, :update, :destroy, :index]
    end
    resources :categories, only: [:index, :show]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end

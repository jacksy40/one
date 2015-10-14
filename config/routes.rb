Rails.application.routes.draw do
  root 'ones#index'
  devise_for :users

  resources :ones, only: [ :index, :show ]
  resources :menus, only: [ :index, :show, :new, :create, :destroy ]
  resources :directions, only: [:index]

end

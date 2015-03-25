Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config

  ActiveAdmin.routes(self)

  devise_for :users, :controllers => {
    omniauth_callbacks: 'omniauth_callbacks'
  }, skip: [:sessions, :registrations]

  #->Prelang (user_login:devise/stylized_paths)
  devise_scope :user do
    get    "login"   => "devise/sessions#new",         as: :new_user_session
    post   "login"   => "devise/sessions#create",      as: :user_session
    delete "signout" => "devise/sessions#destroy",     as: :destroy_user_session

    get    "signup"  => "devise/registrations#new",    as: :new_user_registration
    post   "signup"  => "devise/registrations#create", as: :user_registration
    put    "signup"  => "devise/registrations#update", as: :update_user_registration
    get    "account" => "devise/registrations#edit",   as: :edit_user_registration
  end

  resources :items

  root 'landings#index'
end

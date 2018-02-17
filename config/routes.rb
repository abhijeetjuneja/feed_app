Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'feeds#home'
  get '/login' ,to: 'login#login_form'
  post '/login' ,to: 'login#login'
  delete '/logout' ,to: 'login#logout'

  get '/signup' ,to: 'login#signup_form'
  post '/signup' ,to: 'login#signup'

  get 'feeds/add', to: 'feeds#add_form'
  post 'feeds/add', to: 'feeds#add'
  post 'feeds/delete', to: 'feeds#delete'
end

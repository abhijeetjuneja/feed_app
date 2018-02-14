Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'login#login_form'
  post '/login' ,to: 'login#login'

  get '/signup' ,to: 'login#signup_form'
  post '/signup' ,to: 'login#signup'
end

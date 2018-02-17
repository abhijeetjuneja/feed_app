class LoginController < ApplicationController
  include LoginHelper
  def login_form

  end

  def login
    user = User.find_by(email: params[:email].downcase)
    if user && user.authenticate(params[:password])
      log_in user 
      params[:remember] == 'on' ? remember(user) : forget(user)
      logger.debug "Logged in"
      redirect_to '/'
      else
      logger.debug "Some error occurred"
    end
  end

  def logout
    log_out if logged_in
    redirect_to '/login'
  end

  def signup_form
    
  end

  def signup
    @user = User.new(user_params)
    logger.debug "#{user_params}"
    if @user.save
      logger.debug "User created!"
      redirect_to '/login'
    else
      logger.debug "Some Error occurred"
    end
  end

  private

    def user_params
      params.permit(:name, :email, :password, :password_confirmation)
    end
end

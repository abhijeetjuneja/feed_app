class LoginController < ApplicationController
  include LoginHelper

  def list
    @users  = User.where.not(id: current_user.id)
    p "#{current_user.id}"
    @relationship = Relationship.find_by(follower_id: current_user.id)
  end
  def login_form

  end

  def login
    user = User.find_by(email: params[:email].downcase)
    p "#{user.authenticate(params[:password])}"
    if user && user.authenticate(params[:password])
      log_in user 
      params[:remember] == 'on' ? remember(user) : forget(user)
      p "Logged in"
      redirect_to '/'
    else
      p "Some error occurred"
      redirect_to '/login'
    end
  end

  def logout
    log_out if logged_in
    redirect_to '/login'
  end

  def signup_form
    
  end

  def follow
   follow_user(params[:id])
  end

  def unfollow
    unfollow_user(params[:id])
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

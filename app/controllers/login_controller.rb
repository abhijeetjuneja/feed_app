class LoginController < ApplicationController
  def login_form

  end

  def login
    logger.debug "#{User}"
  end

  def signup_form
    
  end

  def signup
    @user = User.new(user_params)
    logger.debug "#{user_params}"
    if @user.save
      logger.debug "User created!"
    else
      logger.debug "Some Error occurred"
    end
  end

  private

    def user_params
      params.permit(:name, :email, :password, :password_confirmation)
    end
end

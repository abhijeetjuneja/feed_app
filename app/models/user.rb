class User < ApplicationRecord
  has_many :feeds , dependent: :destroy
  validates :name , presence: true 
  validates :email , presence: true
  validates :password , presence: true
  attr_accessor :remember_token

  has_secure_password

  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  def User.assign_remember_token
    SecureRandom.urlsafe_base64 
  end

  def remember 
    self.remember_token = User.assign_remember_token
    update_attribute(:remember_digest , User.digest(remember_token))
  end

  def forget
    update_attribute(:remember_digest, nil)
  end

  def authenticate?(attribute, token)
    digest = send("#{attribute}_digest")
    return false if digest.nil?
    BCrypt::Password.new(digest).is_password?(token)
  end
end

class User < ApplicationRecord
    validates :username, :email, uniqueness: true, presence: true
    validates :password, allow_nil: true, length: { minimum: 8 }
    validates :session_token, :password_digest, presence: true

    has_many :authored_reviews,
      foreign_key: :author_id,
      class_name: :Review 

    has_many :cart_items,
      foreign_key: :user_id,
      class_name: :CartItem

    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
      end
    
      def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
      end
    
      def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
      end
    
      def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        self.session_token
      end
    
      def ensure_session_token
        self.session_token ||= generate_unique_session_token
      end
    
      def generate_unique_session_token
        token = SecureRandom.urlsafe_base64(16)

        while self.class.exists?(session_token: token)
          token = SecureRandom.urlsafe_base64(16)
        end

        token
      end
end

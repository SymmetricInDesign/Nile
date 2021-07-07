class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user && @user.save
            login!(@user)
            render json: @user
        else
#           p @user.errors.full_messages
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(username: params[:username])
        if @user
            render :show
        else
            #TODO: Add error messages to views
            flash[:errors] = ["user not found."]
            redirect_to :root
        end
    end

    def update
        @user  = User.find_by_credentials(user_params)
        if @user && @user.update(email: params[:user][:email])
            render :show
        else
            flash[:errors] = ["user failed to update"]
            redirect_to :root
        end
    end

    private

    def user_params
        # puts params
        params.require(:user).permit(:username, :email, :password)
    end
end
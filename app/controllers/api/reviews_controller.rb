class Api::ReviewsController < ApplicationController
    def index
        @reviews = Product.includes(:reviews).find_by(id: params[:product_id]).reviews
        render :index
    end

    def create
        @review = Review.new(
            product_id: params[:review][:product_id],
            author_id: current_user.id, 
            title: params[:review][:title],
            body: params[:review][:body],
            rating: params[:review][:rating]
        )
        if @review && @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review && @review.update(
            title: params[:review][:title],
            body: params[:review][:body],
            rating: params[:review][:rating]
            )
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review && @review.destroy
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

end



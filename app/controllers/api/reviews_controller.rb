class Api::ReviewsController < ApplicationController
    def index
        @reviews = Product.find(params[:product_id]).reviews
        render :index
    end

    def create
        @review = Review.new(
            product_id: params[:product_id],
            author_id: current_user.id, 
            title: params[:review][:title]
            body: params[:review][:body]
            rating: params[:review][:rating]
        )
        if @review && @review.save
            render json: @review
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review && @review.update(
            title: params[:review][:title]
            body: params[:review][:body]
            rating: params[:review][:rating]
            )
            render json: @review
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review && @review.destroy
            render json: @review
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

end



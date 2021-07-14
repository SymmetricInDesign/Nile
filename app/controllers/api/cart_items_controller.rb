class Api::CartItemsController < ApplicationController
    def index
        @cart_items = current_user.cart_items
        @products = {}
        @cart_items.each do |cart_item|
            @products[cart_item.id] = Product.with_attached_photos.find(cart_item.product_id)         
        end
        render :index
    end

    def create
        @cart_item = CartItem.new(product_id: params[:product_id], user_id: current_user.id, quantity: 1)
        if @cart_item && @cart_item.save
            render json: @cart_item
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def update
        @cart_item = CartItem.find(params[:id])
        if @cart_item && @cart_item.update
            render json: @cart_item
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        if @cart_item && @cart_item.destroy
            render json: @cart_item
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

end



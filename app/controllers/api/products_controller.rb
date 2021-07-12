class Api::ProductsController < ApplicationController
    def index
        puts params
        if (params[:category] == 'All Departments' && params[:searchTerm] == '-1')
            @products = Product.with_attached_photos.all
        elsif (params[:category] == 'All Departments' && params[:searchTerm] != '-1')
            puts params
            @products = Product.with_attached_photos.where("name LIKE #{params[:searchTerm]}")
        else
            category_id = Category.find_by(name: params[:category])
            @products = Product.with_attached_photos.where("name LIKE #{params[:searchTerm]} AND category_id = #{category_id}")
        end
        render :index
    end

    def show
        # debugger
        @product = Product.with_attached_photos.find_by(id: params[:id])
        render :show
    end
end
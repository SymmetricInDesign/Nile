class Api::CategoriesController < ApplicationController
    def index
        @products = Category.all
        render :index
    end

    def show
        @category = Category.find_by(id: params[:id])
    end
end
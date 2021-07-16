class Api::ProductsController < ApplicationController
    def index
        @products = Product.filter(params[:category], params[:searchText])
        render :index
    end
    
    def show
        @product = Product.with_attached_photos.find_by(id: params[:id])
        render :show
    end
end

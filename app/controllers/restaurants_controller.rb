class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :edit, :update, :destroy]

  # GET /restaurants
  # GET /restaurants.json
  def index
    @restaurants = Restaurant.all
    respond_to do |format|
      format.html {  @restaurants }
      format.json {  render :json => @restaurants }
    end
   # render :json => @restaurants
  end

  # GET /restaurants/1
  # GET /restaurants/1.json
  def show
     render :json => @restaurant
  end


  # POST /restaurants
  # POST /restaurants.json
  def create
    @restaurant = Restaurant.new(restaurant_params)

    respond_to do |format|
      if @restaurant.save
        format.json { render :show, status: :created, location: @restaurant }
      else
        format.json { render json: @restaurant.errors, status: :unprocessable_entity }
      end
    end
  end


  # DELETE /restaurants/1
  # DELETE /restaurants/1.json
  def destroy
    @restaurant.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def restaurant_params
      params.require(:restaurant).permit(:name, :cuisine_id, :rating, :accepts_10bis, :address, :max_delivery_time_minutes)
    end

end

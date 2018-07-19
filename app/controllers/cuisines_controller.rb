class CuisinesController < ApplicationController
  before_action :set_cuisine, only: [:show, :edit, :update, :destroy]

  # GET /cuisines
  # GET /cuisines.json
  def index
    @cuisines = Cuisine.all
    render :json => @cuisines
  end

  # POST /cuisines
  # POST /cuisines.json
  def create
    @cuisine = Cuisine.new(cuisine_params)
    render json: @cuisine, status: :created
  end

  # DELETE /cuisines/1
  # DELETE /cuisines/1.json
  def destroy
    @cuisine.destroy
    format.json { head :no_content }
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_cuisine
    @cuisine = Cuisine.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def cuisine_params
    params.require(:cuisine).permit(:name)
  end
end

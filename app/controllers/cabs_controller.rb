class CabsController < ApplicationController

	def new
		@cab = Cab.new(company_id:params[:company_id])
	end
end
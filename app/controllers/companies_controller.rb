class CompaniesController < ApplicationController
	before_filter :company_params,only: :create
	before_filter :authenticate_user
	def new
		p '================='
		@company = Company.new(user_id: current_user.id)
	end
	def create
		@company = Company.new(company_params)
		if @company.save
			redirect_to root_path
		else
			redirect_to :back
		end
	end

	def show
		@company = Company.find(params[:id])
	end

	private
		def company_params
			params.require(:company).permit(:user_id,:name,:contact,:description,:zipcode,:address,:alt_contact,:city)
			
		end
end

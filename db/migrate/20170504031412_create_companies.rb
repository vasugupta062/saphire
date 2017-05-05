class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :city
      t.string :address
      t.string :lat
      t.string :long
      t.string :zipcode
      t.string :contact
      t.string :alt_contact
      t.text :description
      t.string :user_id
      t.timestamps null: false
    end
  end
end

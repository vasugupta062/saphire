class CreateCabs < ActiveRecord::Migration
  def change
    create_table :cabs do |t|
      t.string :make_id
      t.integer :model
      t.string :cab_type
      t.string :year
      t.integer :seat
      t.string :company_id
      t.string :comfirt_id

      t.timestamps null: false
    end
  end
end

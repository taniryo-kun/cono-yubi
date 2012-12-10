class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_id
      t.string :user_name
      t.integer :user_age
      t.string :email

      t.timestamps
      
    end
  end
end

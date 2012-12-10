class AddPrivateFlag < ActiveRecord::Migration
  def up
  	add_column :events, :private_flag, :boolean
  end

  def down
  end
end

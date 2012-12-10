class ModifyUsers < ActiveRecord::Migration
  def up
    rename_column :users, :user_id, :uid
    rename_column :users, :user_name, :name
    add_column :users, :provider, :string
  end

  def down
  end
end

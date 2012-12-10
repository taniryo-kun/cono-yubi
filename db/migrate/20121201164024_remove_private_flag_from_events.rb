class RemovePrivateFlagFromEvents < ActiveRecord::Migration
  def up
  	change_column(:events, :private_flag, :string)
  end

  def down
  end
end

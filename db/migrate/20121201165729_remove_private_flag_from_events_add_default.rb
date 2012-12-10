class RemovePrivateFlagFromEventsAddDefault < ActiveRecord::Migration
  def up
  		change_column :events, :private_flag, :string, :default => "0"
  end

  def down
  end
end

class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :event_name
      t.datetime :event_time
      t.string :event_place
      t.string :event_pr
      t.date :candidate1
      t.date :candidate2
      t.date :candidate3
      t.date :deadline

      t.timestamps
    end
  end
end

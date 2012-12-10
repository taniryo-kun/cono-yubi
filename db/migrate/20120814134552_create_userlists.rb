class CreateUserlists < ActiveRecord::Migration
  def change
    create_table :userlists do |t|
      t.string :event_id
      t.string :user_id
      t.integer :participant_number
      t.integer :candidate_response1
      t.integer :candidate_response2
      t.integer :candidate_response3

      t.timestamps
    end
  end
end
